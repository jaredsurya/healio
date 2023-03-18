class AddLinkableToWeblinks < ActiveRecord::Migration[7.0]
  def change
    add_reference :weblinks, :linkable, polymorphic: true, index: true
  end
end
