class CreateUserServices < ActiveRecord::Migration[7.0]
  def change
    create_table :user_services do |t|
      t.references :user, null: true, foreign_key: true
      t.references :service, null: true, foreign_key: true

      t.timestamps
    end
  end
end
