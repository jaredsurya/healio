class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.text :description
      t.string :image
      t.string :weblinks
      t.string :similar_to

      t.timestamps
    end
  end
end
