class WeblinksController < ApplicationController

  def create
    if request.headers['X-Link-Type'] == "user"
      link = current_user.weblinks.create!(w_params)
    else
      # send service type in the header
      # then create a weblink with the params
    end
    render json: link, status: 201
  end

  def show

  end

  def index
  end

  def update
  end

  def destroy
    link = Weblink.find(params[:id])
    link.destroy
    head :no_content
  end

  private

  def w_params
    params.permit(:id, :title, :url, :linktype)
  
  end

end
