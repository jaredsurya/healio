class UsersController < ApplicationController
  before_action :authenticate_user, only: [:update, :destroy]
  # before_action :replace_nil_values_with_empty_string
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
    user = User.find(user_params[:id])    
    if user == current_user
      # update_weblinks(user_params[:weblinks])
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

  def update_avatar
    byebug
    user = User.find(request.headers['X-User-Id'])
    user.avatar.attach(user_params[:avatar]) #may use params instead of user_p
    # byebug
    render json: user, status: :created
  end

  private

  # def replace_nil_values_with_empty_string
  #   ActiveSupport::Notifications.subscribe('render.active_model_serializers') do |*args|
  #     event = ActiveSupport::Notifications::Event.new(*args)
  #     event.payload[:json] = replace_nil_values_with_empty_string_in_hash(event.payload[:json])
  #   end
  # end

  # def replace_nil_values_with_empty_string_in_hash(hash)
  #   hash.transform_values do |value|
  #     if value.nil?
  #       ''
  #     elsif value.is_a?(Hash)
  #       replace_nil_values_with_empty_string_in_hash(value)
  #     elsif value.is_a?(Array)
  #       value.map { |item| replace_nil_values_with_empty_string_in_hash(item) }
  #     else
  #       value
  #     end
  #   end
  # end

  def user_params 
    params.permit(
      :id, :full_name, :password, :email, :user_type, 
      :allow_email, :location, :avatar, :full_address, 
      :lat, :lon, :phone_number, :type, :bio 
    )
  end

  def authenticate_user
    render json: { error: "Unauthorized" }, status: 401 unless current_user
  end
end
