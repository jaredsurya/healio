class Healer < User
  validates :email, uniqueness: true
  
  has_many :blogs
  has_many :services
  has_many :comments
end
