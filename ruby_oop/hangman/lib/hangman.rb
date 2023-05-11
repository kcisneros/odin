# frozen_string_literal: true

require 'yaml'
require './random_word'
require './display_text'
require './manage_game_state'

# this is the Hangman game class
class Hangman
  include DisplayableText
  include ManageGameState

  attr_reader :guessed_letters, :secret_word, :hidden_word_lines
  attr_accessor :turn_number

  def initialize
    @secret_word = RandomWord.new.rand_word.chomp
    @guessed_letters = []
    @prompt_guess_letter = ''
    @turn_number = 1
  end

  def start_game
    load_game_prompt
    if @prompt_response == 'Y'
      load_game
    end
    play
  end

  def play
    puts "#{create_hidden_lines} Word to guess is #{@secret_word.length} letters long! #{@secret_word}"
    each_turn until game_over?
  end

  private

  def display_turns_left
    if @turn_number == 11
      puts lose_text(@secret_word)
    else
      puts turns_left(@turn_number)
    end
  end

  def win?
    return true if @hidden_word_lines.eql?(@secret_word) || @guessed_word.eql?(@secret_word)
  end

  def reveal_letter_if_it_exists
    @secret_word.chars.each_with_index do |letter, index|
      @hidden_word_lines[index] = letter if letter == @prompt_guess_letter
    end
    @hidden_word_lines
  end

  def each_turn
    puts "turn number is: #{@turn_number}"
    prompt_for_letter
    display_guessed_letters
    puts reveal_letter_if_it_exists
    display_turns_left
    @turn_number += 1
    save_the_game
  end

  def display_guessed_letters
    @guessed_letters << @prompt_guess_letter
    puts guessed_letters_text(@guessed_letters)
  end

  def prompt_for_letter
    puts DisplayableText::PROMPT_FOR_LETTER
    @prompt_guess_letter = gets.chomp.downcase
  end

  def game_over?
    return true if @turn_number == 12

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
    if defined?(@hidden_word_lines)
      @hidden_word_lines
    else
      @hidden_word_lines = '-' * @secret_word.length
    end
  end
end

puts DisplayableText::WELCOME_TEXT
rand_word = Hangman.new
rand_word.start_game
