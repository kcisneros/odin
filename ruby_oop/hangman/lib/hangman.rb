# frozen_string_literal: true

require 'yaml'
require './random_word'
require './display_text'
require './manage_game_state'

# this is the Hangman game class
class Hangman
  include DisplayableText
  include ManageGameState

  MAX_TURNS = 12

  attr_reader :guessed_letters, :secret_word, :hidden_word_lines
  attr_accessor :turn_number

  def initialize
    @secret_word = RandomWord.new.rand_word
    @guessed_letters = []
    @prompt_for_letter = ''
    @turn_number = 0
  end

  def start_game
    puts DisplayableText::WELCOME_TEXT
    load_game_prompt if File.exist?(FILE_NAME)
    play
  end

  private

  def play
    puts "#{create_hidden_lines} Word to guess is #{@secret_word.length} letters long!"
    each_turn until game_over?
  end

  def guess_the_word_option
    puts DisplayableText::GUESS_THE_WORD
    response = gets.upcase.chomp
    case response
    when 'Y'
      puts DisplayableText::ENTER_THE_WORD
      @guessed_word = gets.chomp
    when 'N'
      puts 'Ok, moving onto the next step'
    end
  end

  def display_turns_left
    if @turn_number >= MAX_TURNS - 1
      puts lose_text(@secret_word)
    else
      puts turns_left(@turn_number)
    end
  end

  def win?
    @hidden_word_lines.eql?(@secret_word) || @guessed_word.eql?(@secret_word)
  end

  def reveal_letter_if_it_exists_in_secret_string
    @secret_word.chars.each_with_index do |letter, index|
      @hidden_word_lines[index] = letter if letter == @prompt_for_letter
    end
    @hidden_word_lines
  end

  def each_turn
    prompt_for_letter
    save_the_game_option
    display_guessed_letters
    puts reveal_letter_if_it_exists_in_secret_string
    guess_the_word_option unless win?
    display_turns_left unless win?
    @turn_number += 1
  end

  def display_guessed_letters
    @guessed_letters << @prompt_for_letter
    puts all_guessed_letters_so_far(@guessed_letters)
  end

  def prompt_for_letter
    puts DisplayableText::PROMPT_FOR_LETTER
    @prompt_for_letter = gets.chomp.downcase
  end

  def game_over?
    @game_over =
      if @turn_number == MAX_TURNS
        true
      elsif win?
        puts DisplayableText::WINNER_GAME_OVER_TEXT
        true
      else
        false
      end
  end

  def create_hidden_lines
    @hidden_word_lines ||= '-' * @secret_word.length
  end
end

rand_word = Hangman.new
rand_word.start_game
