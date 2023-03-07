class UserSerializer < ActiveModel::Serializer
  def attributes(*args)
    data = super
    if object.type == "Visitor"
      data[:id] = object.id
      data[:type] = object.type
      data[:full_name] = object.full_name
      #data[:image] = object.image
      data[:email] = object.email
      data[:created_at] = object.created_at
    elsif object.type == "Healer"
      data[:id] = object.id
      data[:type] = object.type
      data[:full_name] = object.full_name
      #data[:image] = object.image
      data[:email] = object.email
      data[:created_at] = object.created_at
    end
    data
  end
end
