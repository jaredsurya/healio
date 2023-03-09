class AddDescToServices < ActiveRecord::Migration[7.0]
  def change
    add_column :services, :desc, :string
  end
end
