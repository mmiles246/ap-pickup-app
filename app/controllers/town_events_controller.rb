class TownEventsController < ApplicationController
    before_action :set_town_event, only: [:show, :update, :destroy]
    skip_before_action :confirm_authentication, only: [:index]

    def index 
        town_events=TownEvent.all
        render json: town_events, status: :ok
    end

    def show
        # town_event=TownEvent.find_by(id: params[:id])
        render json: @town_event, status: :found
    end

    # def create
    #     new_town_event=TownEvent.create(town_event_params)
    #     render json: new_town_event, status: :created 
    # end

    def create
        users_interests=User.all.pluck(:email, :interested_in)
        byebug
    
    #     new_town_event=logged_in_organizer=Organizer.find_by(id: session[:organizer_id])
        
    #     if logged_in_organizer
    #         new_town_event=logged_in_organizer.town_events.create(town_event_params)

    #         if new_town_event.valid?
    #             render json: new_town_event
    #             if new_town_event.type_of 
    #                 TownEventsMailer.town_event_posted.deliver_now
                
    #         else
    #             new_town_event.errors.full_messages
    #         end
    #     end
    end

    def update
        # byebug
        # event_to_update=TownEvent.find_by(id: params[:event_id])
        # byebug
        @town_event.update(town_event_params)
        render json: @town_event, status: :ok, serializer: EditEventSerializerSerializer
    end

    def destroy
        # event_to_destroy=TownEvent.find_by(id: params[:event_id])
        @town_event.destroy
        head :no_content 
    end


    private 

    def town_event_params
        params.permit(:name, :type_of, :start_time, :end_time, :location, :event_description, :sponsors)
    end

    def set_town_event
        @town_event=TownEvent.find(params [:id])
    end

    def authorize_admin
        organizer_can_modify = current_organizer.admin? || (@town_event.organizer_id == current_organizer.id)
        render json: {error: "You don't have permission to perform this action"}, status: :forbidden
    end

end
