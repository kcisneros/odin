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

  attr_accessor :board_row_one, :board_row_two, :board_row_three, :current_display_board, :board, :location

  def initialize
    @board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    # @board_row_one = ['', '', '']
    # @board_row_two = ['', '', '']
    # @board_row_three = ['', '', '']
  end

  def display_board
    # puts " #{board[0]} | #{board[1]} | #{board[2]}"
    # puts '-----------'
    # puts " #{board[3]} | #{board[4]} | #{board[5]}"
    # puts '-----------'
    # puts " #{board[6]} | #{board[7]} | #{board[8]}"

    puts "\n
     #{board[0]} | #{board[1]} | #{board[2]}
     ----------
     #{board[3]} | #{board[4]} | #{board[5]}
     ----------
     #{board[6]} | #{board[7]} | #{board[8]}
    "
    # puts "\n
    # column: 0 | 1 | 2\n
    # row: 1  #{board_row_one[0]} | #{board_row_one[1]} | #{board_row_one[2]}
    #         ----------
    # row: 2  #{board_row_two[0]} | #{board_row_two[1]} | #{board_row_two[2]}
    #         ----------
    # row: 3  #{board_row_three[0]} | #{board_row_three[1]} | #{board_row_three[2]}
    # "
  end

  def ask_for_placement
    puts 'Which spot do you want to take? (0, 1, 2, 3...) '
    @spot = gets.chomp.to_i
  end

  def board_update(marker)
    ask_for_placement

    if @board[@spot].is_a? Integer
      # puts "it's an int"
      @board[@spot] = marker
    elsif @board[@spot].is_a? String
      puts 'Already taken! Please pick another spot'
      ask_for_placement
      @board[@spot] = marker
    end

    # @board[@spot] = marker
    @current_display_board = display_board
    current_display_board

    # if @board[@spot].include?("X") || @board[@spot].include?("O")
    #   puts "Pick another spot"
    #   ask_for_placement
    #   @board[@spot] = marker
    #   display_board
    # #   ask_for_row_placement
    # #   ask_for_column_placement
    # end
  end

  # def winner
  #   if @board_row_one[0] && @board_row_one[1] && @board_row_one[2] == 'X' || @board_row_one[0] && @board_row_one[1] && @board_row_one[2] == 'O'
  #     puts 'Winner!'
  #   end
  # end
end
