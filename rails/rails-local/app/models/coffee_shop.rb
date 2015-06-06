# == Schema Information
#
# Table name: coffee_shops
#
#  id          :uuid             not null, primary key
#  name        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CoffeeShop < ActiveRecord::Base
end
