# frozen_string_literal: true

require './computer_player'
require './human_player'

# class to play the mastermind game
class Game
  attr_accessor :human_player, :computer_player

  AVAILABLE_COLORS = ['🟤', '🔴', '🔵', '🟢', '🟡', '🟣'].freeze
  @secret_code = []

  def initialize
    @human_player = codebreaker_or_codemaker
    @computer_player = !@human_player
  end

  def computer_codemaker
    puts "Computer is selecting random colors...\n\n"
    @secret_code = AVAILABLE_COLORS.sample(4)
    ComputerPlayer.new(@secret_code)
  end

  def computer_codebreaker
    puts "Computer is selecting random colors...\n\n"
    @guess_array = AVAILABLE_COLORS.sample(4)
    ComputerPlayer.new(@guess_array)
  end

  def human_codemaker
    puts 'Enter a code to be broken: '
    @secret_code = [pick_color(color_choice_selection), pick_color(color_choice_selection),
      pick_color(color_choice_selection), pick_color(color_choice_selection)]
      HumanPlayer.new(@secret_code)
  end

  def human_codebreaker
    @guess_array = [pick_color(color_choice_selection), pick_color(color_choice_selection),
                    pick_color(color_choice_selection), pick_color(color_choice_selection)]
    if @guess_array.include?(nil) || @guess_array.uniq.length != 4
      puts 'Duplicate entries or empty entries not allowed. Enter a new selection again.'
      @guess_array = [pick_color(color_choice_selection), pick_color(color_choice_selection),
                      pick_color(color_choice_selection), pick_color(color_choice_selection)]
    end
    puts "\nYou guessed: #{@guess_array}"
    HumanPlayer.new(@guess_array)
  end

  def codebreaker_or_codemaker
    puts 'Do you want to be the codemaker or the codebreaker? Enter 1 for codemaker, 2 for codebreaker: '
    choice = gets.chomp.to_i
    case choice
    when 1
      puts 'You are the codemaker.'
      true
    when 2
      puts 'You are the codebreaker.'
      false
    end
  end

  def color_index_match
    @guess_array.each_with_index do |color, idx|
      puts "#{color} is in the right spot!" if color.match(@secret_code[idx])
    end
  end

  def color_found_in_array
    @guess_array.each_with_index do |color, idx|
      puts "Color #{color} is a part of the secret code." if @secret_code.include?(color)
    end
  end

  # keep playing until there's a match OR 12 turns happen
  def play
    turn_number = 0
    if @human_player
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
      puts 'Try again.'
    end
    @game_over
  end

  def win?
    return true if @guess_array == @secret_code
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
    puts "\nEnter your color choice. Pick one color (r for example) and then
    press enter. Do this four times to generate your four color code choice.\n
    r for 🔴, b for 🔵, g for 🟢,
    y for 🟡, br for 🟤, p for 🟣"
    gets.chomp
  end
end

puts "Let's play Mastermind!\n\n"
game = Game.new
game.play
