# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

(0..1e3).each {|i|

  CoffeeShop.create({
                      name: "Shop \##{i}",
                      description: "Description for shop \##{i}"
                    })

  Employee.create({
                    name: %w{ Michael Janet Steve Lucy }[i % 4] + " Meldrum",
                    address: "#{i} Fake Street"
                  })

}
