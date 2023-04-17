class User < ApplicationRecord
  has_secure_password

  has_one_attached :avatar, service: :cloudinary, dependent: :destroy
  has_many :blogs, dependent: :destroy
  has_many :user_services, dependent: :destroy
  has_many :services, through: :user_services, dependent: :destroy
  has_many :weblinks, as: :linkable, dependent: :destroy
  has_many :comments, dependent: :destroy
  validates :email, uniqueness: true

  def remove_null_values
    attributes.each do |attr, value|
      self[attr] = '' if value.nil?
    end
  end
end
