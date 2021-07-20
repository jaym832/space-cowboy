require 'byebug'
class SessionsController < ApplicationController

    skip_before_action :authorize

    def create
        # byebug
        user = User.find_by(name: params[:_json])
            if user
                session[:user_id] = user.id
                render json: user
            else
                render json: { errors: ["Invalid username"] }, status: :unauthorized
            end

    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end