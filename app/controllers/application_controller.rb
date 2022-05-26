class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :confirm_authentication

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count]}
    end

    def user_or_organizer
        if current_user
            render json: current_user
        elsif current_organizer
            render json: current_organizer
        else 
            render json: {}, status: :unauthorized
        end
    end

    private

    def current_user
        @current_user ||= session[:user_id] &&
        User.find_by_id(session[:user_id])
    end

    def current_organizer
        @current_organizer ||=session[:organizer_id] &&
        Organizer.find_by_id(session[:organizer_id])
    end

    def confirm_authentication
        render json: {error: "Must be signed in to do this."}, status: :unauthorized unless current_organizer||current_user
    end

end
