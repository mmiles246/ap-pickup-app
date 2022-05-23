class TownEventsController < ApplicationController

    def index 
        town_events=TownEvent.all
        render json: town_events, status: :ok
    end

    def show
        town_event=TownEvent.find_by(id: params[:id])
        render json: town_event, status: :found
    end

    def create
        new_town_event=TownEvent.create(town_event_params)
        render json: new_town_event, status: :created 
    end


    private 

    def town_event_params
        params.permit(:name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors)
    end
end
