class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :weblinks, :similar_to
  has_many :weblinks, as: :linkable
end
