class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :service_id
  belongs_to :service
  
end
