class SignupsController < ApplicationController

    def index
        all_signups=Signup.all
        render json: all_signups, status: :ok
    end
    
    def create
        user_signup=Signup.create(signup_params)
        # byebug
        render json: user_signup, status: :created
    end

    def delete
        cancel_rsvp=Signup.find_by(user_id: session[:user_id])
        byebug
        cancel_rsvp.destroy
    end


    private 

    def signup_params
        params.permit( :user_id, :town_event_id)
    end
    
end
