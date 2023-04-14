class AddUserIndexForeignKeyToComments < ActiveRecord::Migration[7.0]
  def change
    add_index :comments, :user_id
  end
end
