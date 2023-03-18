class RemoveUserAndServiceFromWeblinks < ActiveRecord::Migration[7.0]
  def change
    remove_reference :weblinks, :user, null: false, foreign_key: true
    remove_reference :weblinks, :service, null: false, foreign_key: true
  end
end
