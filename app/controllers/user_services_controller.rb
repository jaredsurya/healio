class UserServicesController < ApplicationController
  wrap_parameters format: []
  
  def create
    user_service = UserService.create!({user_id: current_user.id, service_id: accepted_params[:service_id]})
    render json: current_user.services, status: :created
  end

  def destroy
    user_service = UserService.find_by(service_id: params[:id], user_id: current_user.id)
    user_service.destroy
    render json: current_user.services, status: :ok
  end

  private

  def accepted_params
    params.permit(:id, :user_id, :service_id)
  end

end
