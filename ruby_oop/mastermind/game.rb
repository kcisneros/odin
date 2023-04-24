# frozen_string_literal: true

require './display_text'

# class to play the mastermind game
class Game
  include DisplayableText

  AVAILABLE_COLORS = ['🟤', '🔴', '🔵', '🟢', '🟡', '🟣'].freeze

  def initialize
    @player_codebreaker = codebreaker_or_codemaker?
  end

  # keep playing until there's a match OR 12 turns happen
  def play
    turn_number = 0
    if @player_codebreaker
      human_codemaker
      until game_over? || turn_number == 12
        computer_codebreaker
        color_index_match
        color_found_in_array
        turn_number += 1
      end
    else
      computer_codemaker
      until game_over? || turn_number == 12
        human_codebreaker
        color_index_match
        color_found_in_array
        turn_number += 1
        puts 'Try again.'
      end
    end
  end

  private

  def game_over?
    @game_over = false
    if win?
      puts "Game over! Exact match. The code was: #{@secret_code}."
      @game_over = true
    else
      @game_over = false
    end
    @game_over
  end

  def win?
    @guess_array == @secret_code
  end

  def pick_color(color)
    {
      'br' => '🟤',
      'r' => '🔴',
      'b' => '🔵',
      'g' => '🟢',
      'y' => '🟡',
      'p' => '🟣'
    }[color]
  end

  def color_choice_selection
    puts display_color_choice_prompt
    gets.chomp
  end

  def computer_codemaker
    puts display_computer_text
    @secret_code = AVAILABLE_COLORS.sample(4)
  end

  def computer_codebreaker
    puts display_computer_text
    @guess_array = AVAILABLE_COLORS.sample(4)
  end

  def human_codemaker
    puts display_codemaker_confirmation_text
    @secret_code = set_code_array
  end

  def human_codebreaker
    puts display_codebreaker_confirmation_text
    @guess_array = set_code_array
    if @guess_array.include?(nil) || @guess_array.uniq.length != 4
      puts display_human_codebreaker_display_dupe_text
      @guess_array = set_code_array
    end
    puts "\nYou guessed: #{@guess_array}"
    @guess_array
  end

  def set_code_array
    [pick_color(color_choice_selection), pick_color(color_choice_selection),
     pick_color(color_choice_selection), pick_color(color_choice_selection)]
  end

  def color_found_in_array
    @guess_array.each do |color|
      puts "Color #{color} is a part of the secret code." if @secret_code.include?(color)
    end
  end

  def color_index_match
    @guess_array.each_with_index do |color, idx|
      puts "#{color} is in the right spot!" if color.match(@secret_code[idx])
    end
  end

  def codebreaker_or_codemaker?
    # true means player is codemaker, false means codebreaker
    puts display_initial_prompt_text
    choice = gets.chomp.to_i
    case choice
    when 1
      true
    when 2
      false
    else
      puts display_invalid_selection_option_text
    end
  end
end

puts "Let's play Mastermind!\n\n"
game = Game.new
game.play
