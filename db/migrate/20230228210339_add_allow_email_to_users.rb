class AddAllowEmailToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :allow_email, :boolean
  end
end
