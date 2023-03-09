class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :body
end
