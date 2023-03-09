class AddUserIDtoWeblinks < ActiveRecord::Migration[7.0]
  def change
    add_reference :weblinks, :user, null: true, foreign_key: true
    add_reference :weblinks, :service, null: true, foreign_key: true
  end
end
