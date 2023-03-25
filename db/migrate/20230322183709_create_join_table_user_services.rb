class CreateJoinTableUserServices < ActiveRecord::Migration[7.0]
  def change
    create_join_table :users, :services do |t|
      t.index [:user_id, :service_id]
      t.index [:service_id, :user_id]
    end
  end
end
