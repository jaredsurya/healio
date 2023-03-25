class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar
  has_many :blogs
  has_many :user_services
  has_many :services, through: :user_services
  has_many :comments
  has_many :weblinks, as: :linkable
  validates :email, uniqueness: true
end
