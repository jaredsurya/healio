class Healer < User
  has_many :services
  has_many :comments
end
