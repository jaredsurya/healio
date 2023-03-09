class HealerSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :image, :created_at, :location, :full_address, :allow_email
  #:image
end
