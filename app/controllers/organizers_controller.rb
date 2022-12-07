class OrganizersController < ApplicationController
    # skip_before_action :confirm_authentication
    before_action :authorize_admin, only: [:create]
    def index
        organizers=Organizer.all
        render json: organizers, status: :ok
    end



    def show
        current_organizer=Organizer.find_by_id(session[:organizer_id])
        # render json: current_organizer, status: :found
        render json: OrganizerSerializer.new(current_organizer).serializable_hash[:data][:attributes]
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

    def avatar_upload
        current_organizer=Organizer.find_by(id: session[:organizer_id])
        byebug
        current_organizer.update(organizer_params)
        render json: current_organizer
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
