class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :full_name, :email, :created_at, :location, :full_address, :allow_email, :lat, :lon, :phone_number, :bio, :user_type, :avatar
  
  has_many :weblinks, as: :linkable
  # has_many :linkable
  has_many :services
  has_many :blogs
  has_many :comments

  def avatar
    if object.avatar.attached?
      {
        url: rails_blob_url(object.avatar)
      }
    else
      {
        url: ''
      }
    end
  end
  

end
