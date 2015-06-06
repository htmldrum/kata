# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

(0..100).each { |i|

  t = Test.create({
                    title: "Test post number #{i}",
                    content: "Test content for post number #{i}"
                  })

  e = Employee.create({
                        first_name: "Barry",
                        last_name: "Bonds",
                        address: "#{i} Fake Street"
                      })
  
  cs = CoffeeShop.create({
                      name: "Swinging Coffee Shop \##{i}",
                      address: "123 Fake Street",
                      status: #{i},
                        
                    })                      
}
