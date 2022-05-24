class UsersController < ApplicationController

    def index 
        users=User.all
        render json: users, status: :ok
    end

    # def create
    #     new_user= User.create(user_params)
    #     render json: new_user, status: :created
    #         if user.valid?
    #             session[:user_id]=user.id
    # end 

    def create
        user=User.create(user_params)
        if user.valid?
            session[:user_id]=user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    

    private

    def user_params
        params.permit(:first_name, 
        :last_name, 
        :email, 
        :password,
        :password_confirmation, 
        :about, 
        :interested_in,
        :newsletter
        )
    end

end
