# method to split string into array
def split_string_into_array(string)
  p "original string is: #{string}"
  individual_chars = string.split("")
  individual_chars
end

# method to convert to ord
def convert_to_ord(individual_chars)
  individual_chars.map do |char|
    ascii_num = char.ord
    ascii_num
  end
end

def rotate_the_num(ascii_num, num)
  # p "in the rotate_the_num method, ascii_num is: #{ascii_num}"
  ascii_num.map do |asc|
    # p "asc is: #{asc}"
    if asc <= 90 && asc >= 65 
      cipher = (asc - 65 + num) % 26
      cipher = cipher + 65
      # p "cipher is: #{cipher}"
      # p "the char is uppercase"
    elsif asc >= 97 && asc <= 122
      cipher = (asc - 97 + num) % 26
      cipher = cipher + 97
      # p "cipher is: #{cipher}"
      # p "the char is lowercase"
    else
      cipher = asc
      # p "cipher is: #{cipher}"
    end
    # adding this cipher at the end of the if is what made it work..???
    cipher
  end
end

# method to convert back to chr
def convert_to_chr(rotated_ascii_num)
  rotated_ascii_num.map do |ascii|
    back_to_char = ascii.chr
  end
end

# method to join back to string
def back_to_string(back_to_char)
  back_to_char.join("")
end

individual_chars = split_string_into_array("What a string!!")
ascii_num = convert_to_ord(individual_chars)
rotated_ascii_num = rotate_the_num(ascii_num, 5)
back_to_char = convert_to_chr(rotated_ascii_num)
p "ciphered string is: #{new_string = back_to_string(back_to_char)}"

# this was the _v1_ way, one mega method that did way too many things
# this kinda works? but doesn't rotate between a - z.
# def cipher_rotation(word, num)
#   # for each char in the string, rotate by num
#   # puts the new string
# individual_chars = word.split("")
# chars = []
# # p individual_chars
# individual_chars.each do |char|
#   # # checking for uppercase
#   # if char.ord >= 65 || char.ord <= 90
#   #   cipher = (char.ord - 65 + num) % 26 
#   #   cipher = cipher + 65
#   #   p "in the if, cipher is: #{cipher}"
#   # end
#   p "original char is: #{char}"
#     ord_nums = char.ord + num
#     p "ord_nums is: #{ord_nums}"
#     p "num is: #{num}"
#     back_to_char = ord_nums.chr
#     p "rotated char is: #{back_to_char}"
#     chars << back_to_char
#     p "this is chars array: #{chars}"
#     # joined_chars = chars.join("")
#     # p "this is joined chars: #{joined_chars}"
#   end
#   p "this is the rotated string outside of the loop: #{chars.join("")}"
# # p individual_chars
# # ord_nums.each do |ordd|
# #   letters = ordd.chr 
# #   p letters
# # end
#   # puts string
#   # puts num
# end

# puts get_string("hello there!")
# puts num_to_rotate_strings(4)
# cipher_rotation("Hello", 4)
# cipher_rotation("what", 5)