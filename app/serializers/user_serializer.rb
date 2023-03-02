class UserSerializer < ActiveModel::Serializer
  def attributes(*args)
    data = super
    if object.type == "Visitor"
      data[:id] = object.id
      data[:type] = object.type
      data[:full_name] = object.full_name
      data[:password_digest] = object.password_digest
      data[:image] = object.image
      data[:email] = object.email
    elsif object.type == "Healer"
      data[:id] = object.id
      data[:type] = object.type
      data[:full_name] = object.full_name
      data[:password_digest] = object.password_digest
      data[:image] = object.image
      data[:email] = object.email
    end
    data
  end
end
