class ServicesController < ApplicationController

  def create
    service = Service.create!(svc_param)
    services = Service.all
    render json: services, status: 201
  end

  def index
    @services = Service.all
    render json: @services
  end 

  def update
    service = Service.find(svc_param[:id])
    service.update(svc_param)
    services = Service.all
    render json: services
  end

  def destroy
    service = Service.find(params[:id])
    service.destroy
    services = Service.all
    render json: services
  end
end

private

def svc_param
  params.permit(:id, :name, :image, :description)
end