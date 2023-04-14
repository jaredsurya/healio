class CommentsController < ApplicationController
  def create
    comment = Comment.create!(permitted)
    comments = Comment.all
    render json: comments, status: 201
  end

  def show
    service = Service.find(permitted[:id])
    comments = service.comments
    render json: comments
  end

  def destroy
    comment = Comment.find(permitted[:id])
    comment.destroy
    head :no_content
  end

private

def permitted
  params.permit(:id, :content, :user_id, :service_id)
end
end
