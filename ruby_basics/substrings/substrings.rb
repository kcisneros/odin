# assignment: https://www.theodinproject.com/lessons/ruby-sub-strings#assignment
# this was done with help from Chris Murphy.. 

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(string, dictionary)
  hash = {}
  dictionary.each do |dictionary_word| # loop over every word in the dictionary, e.g. "below", "down", ..., "sit"
    matches = string.downcase.scan(dictionary_word) # example: ["down"], or ["it", "it"], or []
    if matches.count > 0 # filter out any []
      hash[matches.uniq.first] = matches.count # build up the hash, e.g hash["it"] => 2, hash["i"] => 3
    end
  end
  return hash # return the built-up hash
end

p substrings("Howdy partner, sit down! How's it going?", dictionary)

## answer according to their site:
# > substrings("Howdy partner, sit down! How's it going?", dictionary)
#   => { "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2, "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }