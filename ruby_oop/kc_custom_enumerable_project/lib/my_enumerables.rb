module Enumerable
  # Your code goes here
  def my_each_with_index
    idx = 0
    self.my_each do 
      yield(self[idx], idx) if block_given?
      idx += 1
    end
    self
  end

end

# You will first have to define my_each
# on the Array class. Methods defined in
# your enumerable module will have access
# to this method
class Array
  # Define my_each here
  # for each element in the array do the block of code
  def my_each
    # find the length of the array
    # while the current iteration (start at 0?) is less than length of the array
    # yield to the block of code
    # end when the length of the array is equal to the current iteration
    counter = 0
    while counter < self.length
      yield(self[counter]) if block_given?
      counter += 1
    end
    # not sure on this self here, but the tests passed..ask peers about it
    self
  end
end

a = [1, 1, 2, 3, 5, 8, 13, 21, 34]
# a.my_each_with_index { |element, idx| p "element is: #{element}. index is: #{idx}" }
# a.my_each { |element| p "element is: #{element}." }

