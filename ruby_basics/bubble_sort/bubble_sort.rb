# assignment: https://www.theodinproject.com/lessons/ruby-bubble-sort#assignment

# answer: 
# > bubble_sort([4,3,78,2,0,2])
# => [0,2,2,3,4,78]

def bubble_sort(array)  
  swapping = true 

  while swapping 
    swapping = false

    array.each_with_index do |number, index|

      # if the number or the next number are nil (end of array)
      # immediately stop the code
      if array[index+1].nil?
        break   
      end

      # if number is greater than the next number
      if number > array[index+1]
        # set the swapping var to true (because we're swapping)
        swapping = true
        # swap the values in the array. aka 4, 3 becomes 3, 4 in the array
        array[index], array[index+1] = array[index+1], array[index]
      end
    end
  end
  return array
end

bubble_sort([4,3,78,2,0,2])
