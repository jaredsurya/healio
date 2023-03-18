class Service < ApplicationRecord
  has_many :healers
  has_many :comments
  has_many :weblinks, as: :linkable
  has_one_attached :avatar

end
