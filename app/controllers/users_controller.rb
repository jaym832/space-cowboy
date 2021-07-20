class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
        user = User.create!(name: params[:_json], role: 'player')
        # byebug
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
        render json: @current_user
    end

    def delete
      # byebug
        # session[:user_id] = nil
        @user = User.find_by(id: params[:id])
        @user.destroy

        head :no_content
    end
  
    private
  
    # def user_params
    #     defaults = {role: 'player'}
    #     params.permit(:name, :role).reverse_merge(defaults)
    # end
  
  end