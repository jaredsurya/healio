table_names = ActiveRecord::Base.connection.tables

table_names.each do |table_name|
  next if table_name.start_with?("active_storage_") || ["schema_migrations", "ar_internal_metadata"].include?(table_name)

  string_columns = table_name.classify.constantize.columns.select { |column| [:string, :text].include?(column.type) }.map(&:name)
  columns = string_columns.reject { |column| ['id', 'created_at', 'updated_at', 'allow_email', 'desc'].include?(column) }

  columns.each do |column|
    table_name.classify.constantize.update_all("#{table_name.classify.constantize.connection.quote_column_name(column)} = COALESCE(#{table_name.classify.constantize.connection.quote_column_name(column)}, '')")
  end
end

puts "Update completed."
