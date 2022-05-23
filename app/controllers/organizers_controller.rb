class OrganizersController < ApplicationController

    def index
        organizers=Organizer.all
        render json: organizers, status: :ok
    end

    def show
    end
end
