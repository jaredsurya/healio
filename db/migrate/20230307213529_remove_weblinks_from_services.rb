class RemoveWeblinksFromServices < ActiveRecord::Migration[7.0]
  def change
    remove_column :services, :weblinks
  end
end
