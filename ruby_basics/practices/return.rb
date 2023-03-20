def add_three(number)
  puts number + 3
end

returned_value = add_three(5)
# puts returned_value

add_three(5).times { puts 'this should print 8 times' }