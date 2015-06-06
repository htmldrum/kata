class CreateCoffeeShops < ActiveRecord::Migration
  def change
    enable_extension "uuid-ossp"
    create_table :coffee_shops, id: :uuid do |t|

      t.string :name
      t.string :description
      t.timestamps null: false
      
    end
  end
end
