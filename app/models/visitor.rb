class Visitor < User
  validates :email, uniqueness: true
  has_many :comments
end
