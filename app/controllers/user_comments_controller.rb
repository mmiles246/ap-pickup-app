class UserCommentsController < ApplicationController

    def index
        all_comments=UserComment.all 
        render json: all_comments, status: :ok
    end

    # def get_event_comments
    #     event_comments=UserComment.find_by(town_event_id: params[:town_event_id])
    #     render json: event_comments, status: :ok
    # end

    def show
        all_comments=UserComment.all
        event_comments=[];
        town_event=TownEvent.find_by(id: params[:event_id])
        if all_comments
            all_comments.each do |comment|
                if comment.town_event_id===town_event.id
                    event_comments<<comment
                end
            end
        end
        render json: event_comments, status: :ok, serilaizer: UserCommentSerializer
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


