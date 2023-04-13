class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :weblinks
  has_many :weblinks, as: :linkable
  has_many :user_services
  has_many :comments
  has_many :users, through: :user_services
end
