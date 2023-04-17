class Service < ApplicationRecord
  has_many :user_services, dependent: :destroy
  has_many :users, through: :user_services, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :weblinks, as: :linkable, dependent: :destroy
  validates :name, presence: true
end
