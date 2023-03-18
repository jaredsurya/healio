class Weblink < ApplicationRecord
  belongs_to :linkable, polymorphic: true
end
