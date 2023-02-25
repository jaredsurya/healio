class UserSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :username, :email, :password_digest, :image
end
