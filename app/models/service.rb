class Service < ApplicationRecord
  has_many :healers
  has_many :comments
end
