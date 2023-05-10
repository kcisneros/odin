# frozen_string_literal: true

require 'yaml'
require './random_word'
require './display_text'

# this is the Hangman game class
class Hangman
  include DisplayableText

  attr_reader :guessed_letters, :secret_word, :hidden_word_lines, :turn_number

  def initialize
    @secret_word = RandomWord.new.rand_word.chomp
    @guessed_letters = []
    @prompt_guess_letter = ''
    @turn_number = 0
  end

  def play
    load_game_prompt
    load_game if @prompt_response == 'Y'
    # @secret_word
    puts "#{create_hidden_lines} Word to guess is #{@secret_word.length} letters long! #{@secret_word}"
    until game_over?(turn_number)
      each_turn(turn_number)
      @turn_number += 1
    end
  end

  def load_game_prompt
    puts DisplayableText::LOAD_GAME_CHOICE
    @prompt_response = gets.chomp.upcase
    case @prompt_response
    when 'Y'
      puts DisplayableText::LOADED_GAME_CONFIRMATION
      load_game
    end
  end

  def load_game_play
    puts @hidden_word_lines
    until game_over?(turn_number)
      each_turn(turn_number)
      @turn_number += 1
    end
  end

  def load_game
    game_state = YAML.load(File.open('saved_game.yml', 'r'), permitted_classes: [Hangman, RandomWord])
    pp game_state
    @guessed_letters = game_state.guessed_letters
    @secret_word = game_state.secret_word
    @hidden_word_lines = game_state.hidden_word_lines
    @turn_number = game_state.turn_number
    game_state.load_game_play
  end

  def save_game_file
    serialized_object = File.new('saved_game.yml', 'w')
    serialized_object.puts YAML.dump(self)
    serialized_object.close
  end

  def save_the_game
    if @turn_number != 11
      puts DisplayableText::ASK_TO_SAVE_GAME
      response = gets.chomp
      case response
      when 'Y', 'y', 'yes', 'YES'
        puts DisplayableText::GAME_SAVED_CONFIRMATION
        save_game_file
        exit(0)
      end
    end
  end

  private

  def display_turns_left(turn_number)
    if turn_number == 11
      puts lose_text(@secret_word)
    else
      puts turns_left(turn_number)
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

  def each_turn(turn_number)
    prompt_for_letter
    display_guessed_letters
    puts reveal_letter_if_it_exists
    display_turns_left(turn_number)
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
    @hidden_word_lines = '-' * @secret_word.length
  end
end

puts DisplayableText::WELCOME_TEXT
rand_word = Hangman.new
rand_word.play
