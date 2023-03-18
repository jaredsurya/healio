class WeblinkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title

  belongs_to :linkable, polymorphic: true
end
