# https://www.theodinproject.com/lessons/ruby-sub-strings
# Implement a method #substrings that takes a word as the first argument and then an array
# of valid substrings (your dictionary) as the second argument. It should return a hash
# listing each substring (case insensitive) that was found in the original
# string and how many times it was found.

# example:
# > dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
# => ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
# > substrings("below", dictionary)
# => { "below" => 1, "low" => 1 }

def substrings(string, dictionary)
  temp = dictionary.reduce(Hash.new(0)) do |result, word|
    if string =~ /#{word}/i
      result[word] += 1
    end
    # puts result
    result
  end
  p "temp is: #{temp}"
end


dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
# substrings("howdy partner ", dictionary)
substrings("Howdy partner, sit down! How's it going?", dictionary)
