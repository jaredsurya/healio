class Comment < ApplicationRecord
  belongs_to :visitor
  belongs_to :healer
  belongs_to :service
end
