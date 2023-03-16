class HealerSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :image, :created_at, :full_address, :lat, :lon, :phone_number, :bio
  #:image
  has_many :weblinks
  has_one :avatar
  has_many :services
end
