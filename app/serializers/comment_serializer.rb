class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :service_id, :created_at
  belongs_to :service
  belongs_to :user
end
