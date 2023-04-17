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

  BOARD = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  def display_board
    puts "\n
     #{BOARD[0]} | #{BOARD[1]} | #{BOARD[2]}
     ----------
     #{BOARD[3]} | #{BOARD[4]} | #{BOARD[5]}
     ----------
     #{BOARD[6]} | #{BOARD[7]} | #{BOARD[8]}
    "
  end

  def board_update(marker)
    ask_for_placement

    case BOARD[@spot]
    when String
      puts 'Already taken! Please pick another spot.'
      ask_for_placement
      BOARD[@spot] = marker
    when Integer
      BOARD[@spot] = marker
    else
      raise "Invalid spot: #{BOARD[@spot]}"
    end

    @current_display_board = display_board
    current_display_board
  end

  private

  def ask_for_placement
    puts 'Which spot do you want to take? (0, 1, 2, 3...) '
    @spot = gets.chomp.to_i
    while @spot > BOARD.length
      puts 'Not a valid spot, please enter 0-9: '
      @spot = gets.chomp.to_i
      break if @spot <= BOARD.length
    end
  end
end
