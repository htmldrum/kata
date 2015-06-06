class CreateTests < ActiveRecord::Migration
  def change
    drop_table :tests if ActiveRecord::Base.connection.table_exists? :tests
    create_table :tests do |t|
      t.string :title
      t.text :content

      t.timestamps 
    end
  end
end
