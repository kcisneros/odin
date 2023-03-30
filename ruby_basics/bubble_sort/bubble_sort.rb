# assignment: https://www.theodinproject.com/lessons/ruby-bubble-sort#assignment

# answer: 
# > bubble_sort([4,3,78,2,0,2])
# => [0,2,2,3,4,78]

# initial pseudocode:
# 1. have a loop that compares the element on the left (array[index]),
# to the element to the right of it (array[index+1]). this loop should run 
# while the elements are still unsorted
  
# 2. if the element to the left is GREATER THAN the element to the right (aka: 4 > 3),
# swap the positions (save in new array)
#   2a. else, leave the positions as they are

# 3. return the final sorted array?

def bubble_sort(array)
  sorted_array = []
  array.each_with_index do |number, index|
    p "number is: #{number}"
    p "index is: #{index}"
    p "next number is: #{array[index+1]}"
    if number > array[index+1]
      sorted_array.push(array[index+1], number)
      puts "sorted_array is: #{sorted_array}"
      puts "#{number} is greater than #{array[index+1]}, shift it!"
    else
      puts "#{number} is not greater than #{array[index+1]}, don't shift it!"
    end
  end
  # return sorted_array
end

bubble_sort([4,3,78,2,0,2])
