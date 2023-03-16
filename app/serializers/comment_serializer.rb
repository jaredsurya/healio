class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :visitor
  has_one :healer
  has_one :service
end
