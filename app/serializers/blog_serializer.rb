class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :body
  belongs_to :user
end
