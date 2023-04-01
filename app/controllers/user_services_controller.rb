class UserServicesController < ApplicationController
  wrap_parameters format: []
  
  def create
    byebug
    user_service = UserService.create!({user_id: current_user.id, service_id: params[:service_id]})
    render json: user_service, status: :created
  end

  def destroy
    
  end
# private

# def accepted_params
#   byebug
#   params.permit(:user_id, :service_id)
# end

end
