class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar
  has_many :weblinks
  has_many :blogs
  has_many :services
  has_many :comments

  validates :email, uniqueness: true
end
