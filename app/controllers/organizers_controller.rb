class OrganizersController < ApplicationController
    # skip_before_action :confirm_authentication
    before_action :authorize_admin, only: [:create]
    def index
        organizers=Organizer.all
        render json: organizers, status: :ok
    end

    # def show
    #     organizer=Organizer.find_by(id: params[:id])
    #     profile_img=rails_blob_path(organizer.profile_img)

    #     render json: {organizer: organizer, profile_img: profile_img}
        
    # end


    def show
        current_organizer=Organizer.find_by_id(session[:organizer_id])
        render json: current_organizer, status: :found
    end

    def create 
            # byebug
            organizer=Organizer.create(organizer_params)
            if user.valid?
                session[:organizer_id]=organizer.id
                render json: organizer, status: :created
            else
                render json: {errors: organizer.errors.full_messages}, status: :unprocessable_entity
            end
    end

    

    private

    def organizer_params 
        params.permit(
            :first_name, 
            :last_name, 
            :email, 
            :password,
            :password_confirmation, 
            :about
            )
    end
end
