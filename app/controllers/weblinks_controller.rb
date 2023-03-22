class WeblinksController < ApplicationController

  def create
    link = Weblink.create!(w_params)
    render json: link, status: 201
  end

  def show

  end

  def index
  end

  def update
  end

  def destroy
  end

  private

  def w_params
    params.permit(:id, :title, :url)
  
  end

end
