# frozen_string_literal: true

require './player'
require './board'

# class to set up the game
class Game
  attr_accessor :board, :player1, :player2

  def initialize
    @player1 = create_player
    @player2 = create_player(ordinal_prompt: 'second')
    @board = Board.new
    board.display_board
  end

  def swap_players
    turn_number = 1
    until game_over?
      if turn_number.odd?
        puts "#{player1.name.capitalize} is selecting a spot..."
        @board.board_update(player1.marker)
        turn_number += 1
      else
        puts "#{player2.name.capitalize} is selecting a spot..."
        @board.board_update(player2.marker)
        turn_number += 1
      end
    end
  end

  private

  def create_player(ordinal_prompt: 'first')
    puts "Enter #{ordinal_prompt} player name: "
    player_name = gets.chomp.capitalize
    puts 'Enter marker (X or O): '
    marker = gets.chomp.upcase
    until marker == 'X' || marker == 'O'
      puts 'Enter X or O only: '
      marker = gets.chomp.upcase
    end
    Player.new(player_name, marker)
  end

  # I think this method can be private, but not sure why just yet..
  def game_over?
    game_over = false
    # tried having this ugly long if in a constant, but couldn't make it work.. 
    if (@board.board[0] == 'X' && @board.board[1] == 'X' && @board.board[2] == 'X') || # first row horizontal
       (@board.board[0] == 'O' && @board.board[1] == 'O' && @board.board[2] == 'O') || # first row horizontal
       (@board.board[0] == 'X' && @board.board[3] == 'X' && @board.board[6] == 'X') || # first row vertical
       (@board.board[0] == 'O' && @board.board[3] == 'O' && @board.board[6] == 'O') || # first row vertical
       (@board.board[0] == 'X' && @board.board[4] == 'X' && @board.board[8] == 'X') || # top left diagonal
       (@board.board[0] == 'O' && @board.board[4] == 'O' && @board.board[8] == 'O') || # top left diagonal
       (@board.board[3] == 'X' && @board.board[4] == 'X' && @board.board[5] == 'X') || # second row horizontal
       (@board.board[3] == 'O' && @board.board[4] == 'O' && @board.board[5] == 'O') || # second row horizontal
       (@board.board[6] == 'X' && @board.board[7] == 'X' && @board.board[8] == 'X') || # third row horizontal
       (@board.board[6] == 'O' && @board.board[7] == 'O' && @board.board[8] == 'O') || # third row horizontal
       (@board.board[1] == 'X' && @board.board[4] == 'X' && @board.board[7] == 'X') || # second row vertical
       (@board.board[1] == 'O' && @board.board[4] == 'O' && @board.board[7] == 'O') || # second row vertical
       (@board.board[2] == 'X' && @board.board[5] == 'X' && @board.board[8] == 'X') || # third row vertical
       (@board.board[2] == 'O' && @board.board[5] == 'O' && @board.board[8] == 'O') || # third row vertical
       (@board.board[2] == 'X' && @board.board[4] == 'X' && @board.board[6] == 'X') || # top right diagonal
       (@board.board[2] == 'O' && @board.board[4] == 'O' && @board.board[6] == 'O') # top right diagonal
      puts 'Game over!'
      game_over = true
    elsif @board.board.all? { |pos| pos.is_a? String }
      puts 'Tie!'
      game_over = true
    else
      game_over = false
    end
    game_over
  end
end

puts "Welcome to tic-tac-toe!\n\n"
game = Game.new
game.swap_players
