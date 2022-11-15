class OrganizerCommentsController < ApplicationController

    def create 
        new_comment=OrganizerComment.create(comment_params)
        render json: new_comment, status: created
    end

    def event_comments
        
    end

    # def show
    #     comment=OrganizerComment.find_by(id: params[:id])
    #     render json: comment
    # end

    private

    def comment_params
        params.permit(:content, :organizer_id, :town_event_id)
    end

end
