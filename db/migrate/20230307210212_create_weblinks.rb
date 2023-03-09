class CreateWeblinks < ActiveRecord::Migration[7.0]
  def change
    create_table :weblinks do |t|
      t.string :link
      t.string :title
      t.timestamps
    end
  end
end
