class UserServiceSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :user_id, :service_id
  belongs_to :service
  belongs_to :user
end
