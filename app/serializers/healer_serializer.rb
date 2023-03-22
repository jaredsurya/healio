class HealerSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :created_at, :full_address, :lat, :lon, :phone_number, :bio, :location, :allow_email
  #:image
  has_many :weblinks, as: :linkable
  # has_one :avatar
  # has_many :services
end
