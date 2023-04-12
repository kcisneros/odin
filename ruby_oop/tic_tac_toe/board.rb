# frozen_string_literal: true

# https://www.theodinproject.com/lessons/ruby-tic-tac-toe#assignment

# Think about how you would set up the
# different elements within the game… What should
# be a class? Instance variable? Method? A few minutes
# of thought can save you from wasting an hour of coding.
# Build your game, taking care to not share information
# between classes any more than you have to.

# This class creates a board to display
class Board

  attr_accessor :current_display_board, :board

  def initialize
    @board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    # @board = ["X", 1, 2, "X", 4, "X", "X", 7, "X"]
  end

  def display_board
    puts "\n
     #{board[0]} | #{board[1]} | #{board[2]}
     ----------
     #{board[3]} | #{board[4]} | #{board[5]}
     ----------
     #{board[6]} | #{board[7]} | #{board[8]}
    "
  end

  def board_update(marker)
    ask_for_placement

    # while @board[@spot].is_a? String
    #   puts 'Already taken! Please pick another spot'
    #   ask_for_placement
    #   @board[@spot] = marker
    #   break if @board[@spot].is_a? Integer
    # end
    # @board[@spot] = marker

    if @board[@spot].is_a? Integer
      # puts "it's an int"
      @board[@spot] = marker
    elsif @board[@spot].is_a? String
      puts 'Already taken! Please pick another spot'
      ask_for_placement
      @board[@spot] = marker
    end

    @current_display_board = display_board
    current_display_board
  end

  private

  # I think this method can be private, but not sure why.. 
  def ask_for_placement
    puts 'Which spot do you want to take? (0, 1, 2, 3...) '
    @spot = gets.chomp.to_i
    while @spot > board.length
      puts 'Not a valid spot, please enter 0-9: '
      @spot = gets.chomp.to_i
      break if @spot <= board.length
    end
  end
end
