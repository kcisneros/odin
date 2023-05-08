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

require 'yaml'
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
    load_previous_game_prompt
    game_steps
  end

  def save_game_file
    serialized_object = File.new('saved_game.yml', 'w')
    serialized_object.puts YAML.dump(self)
    serialized_object.close
  end

  def load_previous_game_prompt
    puts DisplayableText::LOAD_GAME_CHOICE
    response = gets.chomp
    case response
    when 'Y', 'y', 'yes', 'YES'
      puts DisplayableText::LOADED_GAME_CONFIRMATION
      load_previous_game
    when 'N', 'n', 'no', 'NO'
      start_new_game
    end
  end

  def start_new_game
    puts random_word
    turn_number = 0
    puts "#{create_hidden_lines} Word to guess is #{@hangman_word.length} letters long!"
    until game_over?(turn_number)
      each_turn(turn_number)
      turn_number += 1
    end
  end

  def load_previous_game
    YAML.load(File.read('saved_game.yml'), permitted_classes: [Hangman, RandomWord])
  end

  private

  def save_the_game?
    puts DisplayableText::ASK_TO_SAVE_GAME
    response = gets.chomp
    case response
    when 'Y', 'y', 'yes', 'YES'
      puts DisplayableText::GAME_SAVED_CONFIRMATION
      save_game_file
      exit(0)
    when 'N', 'n', 'no', 'NO'
      game_steps
    end
  end

  def display_turns_left(turn_number)
    if turn_number == 11
      puts lose_text(@hangman_word)
    else
      puts turns_left(turn_number)
    end
  end

  def win?
    return true if @hidden_word_lines.eql?(@hangman_word) || @guessed_word.eql?(@hangman_word)
  end

  def reveal_letter_if_it_exists
    @hangman_word.chars.each_with_index do |letter, index|
      @hidden_word_lines[index] = letter if letter == @prompt_guess_letter
    end
    @hidden_word_lines
  end

  def guess_the_word_option
    puts DisplayableText::GUESS_THE_WORD
    response = gets.chomp
    case response
    when 'Y', 'y', 'yes', 'YES'
      puts DisplayableText::ENTER_THE_WORD
      @guessed_word = gets.chomp
    when 'N', 'n', 'no', 'NO'
      game_steps
    end
  end

  def game_steps
    display_guessed_letters
    prompt_for_letter
    # display_guessed_letters
    check_if_prompt_guess_letter_is_in_hangman_word
    puts reveal_letter_if_it_exists
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
    save_the_game?
    guess_the_word_option
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
