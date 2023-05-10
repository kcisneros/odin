# frozen_string_literal: true

class RandomWord
  # this class should create a word object that is for a random
  # word from the text file in assets/english_words.txt
  attr_accessor :rand_word

  def initialize
    @rand_word = random_word
  end

  def random_word
    loop do
      @rand_word = File.readlines('../assets/english_words.txt').sample
      break if @rand_word.length.between?(6, 12)
    end
    @rand_word
  end
end
