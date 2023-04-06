# frozen_string_literal: true

require './player'
require './board'

class Game 

  attr_accessor :board

  def create_players
    puts 'Enter first player name: '
    first_player = gets.chomp
    puts 'Enter the second player: '
    second_player = gets.chomp
    @players = Player.new(first_player, second_player)
    puts "First player is: #{first_player}, second player is: #{second_player}"
    # p @players.pick_who_goes_first(first_player, second_player)
    puts "Person who goes first is: #{@players.pick_who_goes_first(first_player, second_player)}"
  end

  def create_board
    @board = Board.new
  end

  def board_data
    board.board_data
  end

  def display_current_board
    board.display_current_board
  end

end

game = Game.new
game.create_players
game.create_board
game.display_current_board
game.board_data
game.display_current_board