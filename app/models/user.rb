class User < ApplicationRecord
  has_secure_password

  has_one_attached :avatar, dependent: :destroy
  has_many :blogs, dependent: :destroy
  has_many :user_services, dependent: :destroy
  has_many :services, through: :user_services, dependent: :destroy
  has_many :weblinks, as: :linkable, dependent: :destroy
  validates :email, uniqueness: true

  def remove_null_values
    attributes.each do |attr, value|
      self[attr] = '' if value.nil?
    end
  end
end
