class VisitorSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :created_at, :location
  # has_many :services
  # has_many :comments
end
