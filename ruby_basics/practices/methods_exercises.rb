def greeting(name)
  greet = puts "Hi #{name}!"
  greet
end

greeting("bob")

def multiply(arg1, arg2)
  ans = arg1 * arg2
  puts ans
  return ans
end

multiply(2, 3)

def scream(words)
  words = words + "!!!"
  puts words
  return 
end

scream("Yippeee")