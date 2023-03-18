class ChangeWeblinksLinkableIdToBigint < ActiveRecord::Migration[7.0]
  def change
    change_column :weblinks, :linkable_id, :bigint, using: 'linkable_id::bigint'
  end
end
