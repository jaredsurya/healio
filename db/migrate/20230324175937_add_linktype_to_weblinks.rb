class AddLinktypeToWeblinks < ActiveRecord::Migration[7.0]
  def change
    add_column :weblinks, :linktype, :string
    remove_column :weblinks, :type
  end
end
