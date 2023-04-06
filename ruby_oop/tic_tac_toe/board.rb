# frozen_string_literal: true

# require './player'

# https://www.theodinproject.com/lessons/ruby-tic-tac-toe#assignment

# Think about how you would set up the
# different elements within the game… What should
# be a class? Instance variable? Method? A few minutes
# of thought can save you from wasting an hour of coding.
# Build your game, taking care to not share information
# between classes any more than you have to.

# This class creates a board to display
class Board

  attr_accessor :board_row_one, :board_row_two, :board_row_three, :current_display_board

  def initialize
    @board_row_one = ['', '', '']
    @board_row_two = ['', '', '']
    @board_row_three = ['', '', '']
  end

  def display_board
    puts "\n
    column: 0 | 1 | 2\n
    row: 1  #{board_row_one[0]} | #{board_row_one[1]} | #{board_row_one[2]}
            ----------
    row: 2  #{board_row_two[0]} | #{board_row_two[1]} | #{board_row_two[2]}
            ----------
    row: 3  #{board_row_three[0]} | #{board_row_three[1]} | #{board_row_three[2]}
    "
  end

  def board_data
    puts 'X or O?'
    char = gets.chomp

    while char != 'X' && char != 'O'
      puts 'Please enter X or O'
      char = gets.chomp
      break if char == 'X' || char == 'O'
    end

    puts 'Which row do you want to put it in? 1, 2, or 3'
    row_location = gets.chomp
    case row_location
    when '1'
      board = board_row_one
    when '2'
      board = board_row_two
    when '3'
      board = board_row_three
    end

    puts 'Which column do you want to put it in? 0, 1, or 2'
    location = gets.chomp.to_i

    board[location] = char
    @current_display_board = display_board
    current_display_board
  end

  def display_current_board
    puts "Current display board is: #{display_board}"
  end
end

