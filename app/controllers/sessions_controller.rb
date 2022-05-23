class SessionsController < ApplicationController

    def create
        user=User.find_by_email(params[:email])
        # byebug
            if user&.authenticate(params[:password])
                session[:user_id] =user.id
                render json: user, status: :ok
            else 
                render json: {error: "Invalid email or password."}, status: :unauthorized
            end
    end

    def organizer_create
        organizer=Organizer.find_by_email(params[:email])
            if organizer&.authenticate(params[:password])
                session[:organizer_id] = organizer.id
                render json: organizer, status: :ok
            else
                render json: {error: "Invalid email or password."}
            end
    end

    def delete
        session.delete :user_id
        session.delete :organizer_id

        head :no_content
    end
end
