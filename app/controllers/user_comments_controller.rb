class UserCommentsController < ApplicationController

    def index
        all_comments=UserComment.all 
        render json: all_comments, status: :ok
    end

    def show

        event_comments=UserComment.find_by(town_event_id: params[:town_event_id])
        render json: event_comments, status: :ok
    end


    def create
        new_comment=UserComment.create(comment_params)
        render json: new_comment, status: :created
    end

    private

    def comment_params
        params.permit(:content, :user_id, :town_event_id)
    end

end


