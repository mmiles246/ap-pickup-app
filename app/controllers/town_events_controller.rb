class TownEventsController < ApplicationController

    def index 
        town_events=TownEvent.all
        render json: town_events, status: :ok
    end

    def show
        town_event=TownEvent.find_by(id: params[:id])
        render json: town_event, status: :found
    end

    # def create
    #     new_town_event=TownEvent.create(town_event_params)
    #     render json: new_town_event, status: :created 
    # end

    def create

        new_town_event=logged_in_organizer=Organizer.find_by(id: session[:organizer_id])
        
        if logged_in_organizer
            new_town_event=logged_in_organizer.town_events.create(town_event_params)

            if new_town_event.valid?
                render json: new_town_event
            else
                new_town_event.errors.full_messages
            end
        end
    end

    def update
        # byebug
        event_to_update=TownEvent.find_by(id: params[:event_id])
        byebug
        event_to_update.update(town_event_params)
        render json: event_to_update, status: :ok, serializer: EditEventSerializerSerializer
    end

    private 

    def town_event_params
        params.permit(:name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors)
    end
end
