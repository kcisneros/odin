# assignment: https://www.theodinproject.com/lessons/ruby-bubble-sort#assignment

# answer: 
# > bubble_sort([4,3,78,2,0,2])
# => [0,2,2,3,4,78]

# everything just keeps getting more difficult... 

def bubble_sort(array)  
  swapping = true 

  while swapping 
    swapping = false

    array.each_with_index do |number, index|

      # if the number or the next number are nil (end of array)
      # immediately stop the code
      if number.nil? || array[index+1].nil?
        break   
      end

      # puts "swapping at the top is: #{swapping}"

      # puts "number is: #{number}"
      # puts "next num is #{array[index+1]}"
      # puts "index is: #{index}"

        # if number is greater than the next number
        if number > array[index+1]
          # set the swapping var to true (because we're swapping)
          swapping = true
          # puts "#{number} is greater than #{array[index+1]}, shift it!"
          # swap the values in the array. aka 4, 3 becomes 3, 4 in the array
          array[index], array[index+1] = array[index+1], array[index]
          # puts "updated array in the if is: #{array}"

        # if the above isn't true
        else
          # puts "#{number} is not greater than #{array[index+1]}, don't shift it!"
          # leave the values in the array as they are. aka 3, 4 stays 3, 4
          array[index+1], array[index] = array[index+1], array[index]
          # puts "updated array in the else is: #{array}"
        end
        # puts "swapping var is: #{swapping}"

        # puts "array.size+1 is: #{array.size+1}"
        # puts "array.index+1 is: #{array[index]+1}"

        # puts "swapping at the bottom is: #{swapping}"
    end
  end
  return array
end

bubble_sort([4,3,78,2,0,2])
