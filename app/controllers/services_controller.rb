class ServicesController < ApplicationController

  def index
    @services = Service.all
    render json: @services, include: :users
  end 
end
