class User < ApplicationRecord
  has_secure_password

  # has_one_attached :avatar, service: :cloudinary, dependent: :destroy
  has_many :blogs, dependent: :destroy
  has_many :user_services, dependent: :destroy
  has_many :services, through: :user_services, dependent: :destroy
  has_many :weblinks, as: :linkable, dependent: :destroy
  has_many :comments, dependent: :destroy
  validates :email, uniqueness: true
  validates :phone_number, presence: true, length: { is: 10 }, format: { with: /\A\d+\z/, message: "only allows numeric characters" }, if: :healer?

  
  def remove_null_values
    attributes.each do |attr, value|
      self[attr] = '' if value.nil?
    end
  end

  private

  def healer?
    user_type == "healer"
  end

end
