class RemoveWeblinksFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :weblinks
  end
end
