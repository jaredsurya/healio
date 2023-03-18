class UsersController < ApplicationController
  before_action :authenticate_user, only: [:update, :destroy]
  wrap_parameters format: []

  def create
    if params[:user_type] == "healer"
      user = Healer.create!(user_params)
    else
      user = Visitor.create!(user_params)
    end
    login_user(user)
    render json: user, status: 201, serializer: UserSerializer
  end

  def show
    if current_user
      render json: current_user, status: 201
    else 
      render json: { error: "Invalid Username or Password" }, status: 401
    end
  end

  def index
    users = User.all
    render json: users, include: :heros
  end 

  def update
    user = User.find(params[:id])
    if user == current_user
      user.update(email: params[:email], bio: params[:bio])
      render json: user, status: 202
    else
      render json: { error: "Unauthorized" }, status: 401
    end
  end

  def destroy
    user = User.find(params[:id])
    if user == current_user
      session.delete :user_id
      user.destroy
      head :no_content
    else
      render json: { error: "Unauthorized" }, status: 401
    end
  end

  private

  def user_params 
    params.permit(:id, :full_name, :password, :email, :user_type, :allow_email, :avatar)
  end

  def authenticate_user
    render json: { error: "Unauthorized" }, status: 401 unless current_user
  end
end
