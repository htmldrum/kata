class CreateCoffeeShops < ActiveRecord::Migration
  def change
    create_table :coffee_shops do |t|

      t.string :name, null: false
      t.string :address
      t.text :description
      t.integer :employee_id, index: true
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
