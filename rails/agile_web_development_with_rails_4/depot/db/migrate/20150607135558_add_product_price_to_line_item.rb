class AddProductPriceToLineItem < ActiveRecord::Migration
  def up

    add_column :line_items, :price, :decimal, precision: 8, scale: 2

    # Copy product price into line_item
    LineItem.all.each do |item|
      item.price = item.product.price
      item.save!
    end
    
  end
  def down
    remove_column :line_items, :price
  end
end
