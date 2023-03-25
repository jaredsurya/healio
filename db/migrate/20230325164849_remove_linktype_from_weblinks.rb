class RemoveLinktypeFromWeblinks < ActiveRecord::Migration[7.0]
  def change
    remove_column :weblinks, :linktype
  end
end
