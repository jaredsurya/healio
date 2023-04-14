class AddUserForeignKeyToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :user_id, :bigint, null: false, foreign_key: true
  end
end
