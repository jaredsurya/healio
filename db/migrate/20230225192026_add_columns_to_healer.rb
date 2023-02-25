class AddColumnsToHealer < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :bio, :text
    add_column :users, :weblinks, :string
    add_column :users, :phone_number, :string
  end
end
