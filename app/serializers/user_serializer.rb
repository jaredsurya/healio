class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :full_name, :email, :created_at, :location, :full_address, :allow_email, :lat, :lon, :phone_number, :bio, :user_type
  
  has_many :weblinks, as: :linkable
  # has_many :linkable
  has_many :services
  has_many :blogs
  has_many :comments
  # has_one_attached :avatar

  def avatar
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end

end
