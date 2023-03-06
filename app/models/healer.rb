class Healer < User
  validates :email, uniqueness: true
  
  has_many :services
  has_many :comments
end
