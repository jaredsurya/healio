class UsersController < ApplicationController
  include ActiveStorage::Blob::Analyzable
  before_action :authenticate_user, only: [:update, :destroy]
  wrap_parameters format: []
  
  def create
    @user = User.create!(user_params)
    login_user(@user)
    @user.remove_null_values
    render json: @user, status: 201
  end

  def show
    if current_user
      render json: current_user, status: 201
    else 
      render json: { error: "Invalid Username or Password" }, status: 401
    end
  end

  def index
    @users = User.all
    render json: @users, include: :heros
  end 

  def update
    # byebug
    user = User.find(user_params[:id])    
    if user == current_user
      user.update!(user_params)
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

  def healers
    @healers = User.where(user_type: 'healer')
    render json: @healers
  end

  # def update_avatar
  #   byebug
  #   if user_params[:avatar].present?
  #     begin
  #       current_user.update!(user_params)
  #       render json: current_user, status: :ok
  #     rescue StandardError => e
  #       render json: { errors: ["Error uploading avatar, #{e.message}"] }, status: :internal_server_error
  #     end
  #   end
  # end
  
  private

  def user_params 
    params.permit(
      :id, :full_name, :password, :email, :user_type, 
      :allow_email, :location, :full_address, 
      :lat, :lon, :phone_number, :type, :bio, :signed_blob_id 
    )
  end

  def authenticate_user
    render json: { error: "Unauthorized" }, status: 401 unless current_user
  end
end
