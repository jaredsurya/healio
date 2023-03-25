class Service < ApplicationRecord
  has_many :user_services
  has_many :users, through: :user_services
  has_many :comments
  has_many :weblinks, as: :linkable
  has_one_attached :avatar

end
