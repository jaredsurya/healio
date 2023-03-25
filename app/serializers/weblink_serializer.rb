class WeblinkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title

  # belongs_to :user
  belongs_to :linkable, polymorphic: true
end
