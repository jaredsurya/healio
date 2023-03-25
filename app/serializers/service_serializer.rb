class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :weblinks
  has_many :weblinks, as: :linkable
end
