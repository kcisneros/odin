def contains_lab(string)
  if string.include?("lab")
    string
  else
    return false
  end
end

puts contains_lab("laboratory")
puts contains_lab("experiment")
puts contains_lab("pans labrynth")
puts contains_lab("elaborate")
puts contains_lab("polar bear")