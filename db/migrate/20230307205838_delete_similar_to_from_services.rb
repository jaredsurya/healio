class DeleteSimilarToFromServices < ActiveRecord::Migration[7.0]
  def change
    remove_column :services, :similar_to
  end
end
