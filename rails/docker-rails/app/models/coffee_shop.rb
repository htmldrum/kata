# == Schema Information
#
# Table name: coffee_shops
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  address     :string
#  description :text
#  employee_id :integer
#  status      :integer          default(0)
#  created_at  :datetime
#  updated_at  :datetime
#

class CoffeeShop < ActiveRecord::Base
end
