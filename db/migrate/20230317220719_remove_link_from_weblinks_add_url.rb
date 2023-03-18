class RemoveLinkFromWeblinksAddUrl < ActiveRecord::Migration[7.0]
  def change
    remove_column :weblinks, :link
    add_column :weblinks, :url, :string
  end
end
