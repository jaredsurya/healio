class Comment < ApplicationRecord
  belongs_to :service
  belongs_to :user
  validates :content, presence: { message: " can't be blank." }
end
