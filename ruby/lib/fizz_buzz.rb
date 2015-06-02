# -*- coding: utf-8 -*-
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”." 

(1..100).to_a.each{|i|
  print "Fizz" if i % 3 == 0
  print "Buzz" if i % 5 == 0
  # Formatting line breaks
  if i % 3 == 0 or i % 5 == 0
    puts
  else
    puts "#{i}"
  end
}

(1..100).to_a.each{|i|
  r = ''
  r += "Fizz" if i % 3 == 0
  r += "Buzz" if i % 5 == 0
  r = (r.length == 0) ? "#{i}" : r
  puts "#{r}"
}
