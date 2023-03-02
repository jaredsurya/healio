class HealerSerializer < ActiveModel::Serializer
  attributes :id, :type, :full_name, :email, :image
end
