class SessionsController < ApplicationController
skip_before_action :confirm_authentication, only: [:create, :organizer_create, :delete]
    def create
       
        user=User.find_by_email(params[:email])
        # byebug
            if user&.authenticate(params[:password])
                session[:user_id] =user.id
                # profile_img=rails_blob_path(user.profile_img)

                # render json: {user: user, profile_img: profile_img}, status: :ok
                render json: user, status: :ok
            else 
                render json: {error: "Invalid email or password."}, status: :unauthorized
            end
    end

    def organizer_create
        organizer=Organizer.find_by_email(params[:email])
            if organizer&.authenticate(params[:password])
                session[:organizer_id] = organizer.id
                # profile_img=rails_blob_path(organizer.profile_img)
                render json: organizer, status: :ok
            else
                render json: {error: "Invalid email or password."}
            end
    end

    def destroy
        session.delete :user_id
        session.delete :organizer_id

        head :no_content
    end
end
