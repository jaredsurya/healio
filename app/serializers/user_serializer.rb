class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
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
      data[:allow_email] = object.allow_email
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
      data[:allow_email] = object.allow_email
    end
    data
  end
end
