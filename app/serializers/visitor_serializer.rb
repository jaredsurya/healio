class VisitorSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :image, :created_at, :location, :allow_email
end
