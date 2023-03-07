class HealerSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :image, :created_at
  #:image
end
