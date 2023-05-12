# frozen_string_literal: true

# this class should create a word object that is for a random
# word from the text file in assets/english_words.txt
class RandomWord
  attr_accessor :rand_word, :word

  def initialize
    @rand_word = random_word
  end

  def random_word
    word_list = File.readlines('../assets/english_words.txt')
    word = ''
    loop do
      word = word_list.sample.chomp
      break if word.length.between?(6, 12)
    end
    word
  end
end
