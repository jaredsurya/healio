class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :type
      t.string :full_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :image

      t.timestamps
    end
  end
end
