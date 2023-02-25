class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :visitor
  has_one :healer
  has_one :service
end
