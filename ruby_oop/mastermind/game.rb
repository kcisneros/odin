# frozen_string_literal: true

require './computer_player'
require './human_player'

# class to play the mastermind game
class Game
  attr_accessor :human_player, :computer_player

  AVAILABLE_COLORS = ['🟤', '🔴', '🔵', '🟢', '🟡', '🟣'].freeze
  @computer_choice = []

  def initialize
    @computer_player = create_computer_selection
    @human_player = create_human_player_selection
  end

  def create_computer_selection
    puts "Computer is selecting random colors...\n\n"
    @computer_choice = AVAILABLE_COLORS.sample(4)
    ComputerPlayer.new(@computer_choice)
  end

  def create_human_player_selection
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

  def color_index_match
    @guess_array.each_with_index do |color, idx|
      puts "#{color} is in the right spot!" if color.match(@computer_choice[idx])
    end
  end

  def color_found_in_array
    @guess_array.each_with_index do |color, idx|
      puts "Color #{color} is a part of the secret code." if @computer_choice.include?(color)
    end
  end

  # keep playing until there's a match OR 12 turns happen
  def play
    turn_number = 1
    until game_over? || turn_number == 12
      color_index_match
      color_found_in_array
      create_human_player_selection
      turn_number += 1
    end
  end

  private

  def game_over?
    @game_over = false
    if win?
      puts "Game over! Exact match. Computer picked #{@computer_choice}."
      @game_over = true
    else
      puts 'Try again.'
    end
    @game_over
  end

  def win?
    return true if @guess_array == @computer_choice
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
