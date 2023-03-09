class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :image
      t.string :desc
      t.text :body

      t.timestamps
    end
  end
end
