class AddTypeToWeblinks < ActiveRecord::Migration[7.0]
  def change
    add_column :weblinks, :type, :string
  end
end
