class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  has_many :weblinks, as: :linkable
  has_one :avatar
  has_many :services

  def attributes(*args)
    data = super
    if object.type == "Visitor"
      data[:id] = object.id
      data[:type] = object.type
      data[:full_name] = object.full_name
      #data[:image] = object.image
      data[:email] = object.email
      data[:created_at] = object.created_at
      data[:location] = object.location
      data[:comment] = object.comment
      # data[:allow_email] = object.allow_email
      data[:location] = object.location
    elsif object.type == "Healer"
      data[:id] = object.id
      data[:type] = object.type
      data[:full_name] = object.full_name
      #data[:image] = object.image
      data[:avatar] = rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
      data[:email] = object.email
      data[:created_at] = object.created_at
      data[:location] = object.location
      data[:full_address] = object.full_address
      # data[:allow_email] = object.allow_email
      # data[:blogs] = object.blogs
      # data[:weblinks] = object.weblinks
      # data[:services] = object.services
      data[:full_address] = object.full_address
      data[:lat] = object.lat
      data[:lon] = object.lon
      data[:phone_number] = object.phone_number
      data[:bio] = object.bio
    end
    data
  end


end
