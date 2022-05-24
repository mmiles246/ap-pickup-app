class OrganizersController < ApplicationController

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
        render json: current_organizer
    end

    
end
