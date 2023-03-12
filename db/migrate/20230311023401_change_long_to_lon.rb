class ChangeLongToLon < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :long
    add_column :users, :lon, :string
  end
end
