class UserServicesController < ApplicationController
  wrap_parameters format: []
  
  def create
    #byebug
    user_service = UserService.create!({user_id: current_user.id, service_id: accepted_params[:service_id]})
    render json: user_service, status: :created
  end

  def destroy
    user_service = UserService.find_by(service_id: params[:id], user_id: current_user.id)
    user_service.destroy
    head :no_content
  end

  private

  def accepted_params
    params.permit(:id, :user_id, :service_id)
  end

end
