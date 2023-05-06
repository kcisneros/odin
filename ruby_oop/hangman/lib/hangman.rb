# frozen_string_literal: true

# Download the google-10000-english-no-swears.txt dictionary file from the
# first20hours GitHub repository google-10000-english.
# Check! Did this by doing: 
# curl -o english_words.txt https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-no-swears.txt

# When a new game is started,
# your script should load in the dictionary and randomly select a word between
# 5 and 12 characters long for the secret word. You don’t need to draw an actual
# stick figure (though you can if you want to!), but do display some sort of count
# so the player knows how many more incorrect guesses they have before the game
# ends. You should also display which correct letters have already been chosen
# (and their position in the word, e.g. _ r o g r a _ _ i n g) and which incorrect
# letters have already been chosen. Every turn, allow the player to make a guess
# of a letter. It should be case insensitive. Update the display to reflect whether
# the letter was correct or incorrect. If out of guesses, the player should lose. 
# CHECK! this is done ^^

# Now implement the functionality where, at the start of any turn, instead of making a
# guess the player should also have the option to save the game. Remember what you
# learned about serializing objects… you can serialize your game class too! When the
# program first loads, add in an option that allows you to open one of your saved games,
# which should jump you exactly back to where you were when you saved. Play on!

require './random_word'
require './display_text'

# this is the Hangman game class
class Hangman
  include DisplayableText

  def initialize
    @guess_word = []
    @secret_word = RandomWord.new
    @guessed_letters = []
    @prompt_guess_letter = ''
  end

  def play
    random_word
    turn_number = 0
    puts "#{create_hidden_lines} Word to guess is #{@hangman_word.length} letters long!"
    until game_over?(turn_number)
      each_turn(turn_number)
      turn_number += 1
    end
  end

  private

  def display_turns_left(turn_number)
    if turn_number == 11
      puts lose_text(@hangman_word)
    else
      puts turns_left(turn_number)
    end
  end

  def win?
    return true if @hidden_word_lines.eql?(@hangman_word)
  end

  def reveal_letter_if_it_exists
    @hangman_word.chars.each_with_index do |letter, index|
      @hidden_word_lines[index] = letter if letter == @prompt_guess_letter
    end
    @hidden_word_lines
  end

  def check_if_prompt_guess_letter_is_in_hangman_word
    if @hangman_word.include?(@prompt_guess_letter)
      @guess_word << @prompt_guess_letter
    else
      puts DisplayableText::NO_MATCH_TEXT
    end
#    @guess_word
  end

  def each_turn(turn_number)
    prompt_for_letter
    display_guessed_letters
    check_if_prompt_guess_letter_is_in_hangman_word
    puts reveal_letter_if_it_exists
    display_turns_left(turn_number)
  end

  def display_guessed_letters
    @guessed_letters << @prompt_guess_letter
    puts guessed_letters(@guessed_letters)
  end

  def prompt_for_letter
    puts DisplayableText::PROMPT_FOR_LETTER
    @prompt_guess_letter = gets.chomp.downcase
  end

  def game_over?(turn_number)
    return true if turn_number == 12

    @game_over = false
    if win?
      puts DisplayableText::GAME_OVER_TEXT
      @game_over = true
    else
      @game_over = false
    end
    @game_over
  end

  def create_hidden_lines
    @hidden_word_lines = '-' * @hangman_word.length
  end

  def random_word
    @hangman_word = @secret_word.random_word.chomp
  end
end

puts DisplayableText::WELCOME_TEXT
rand_word = Hangman.new
rand_word.play
