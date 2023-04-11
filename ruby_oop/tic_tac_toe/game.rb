# frozen_string_literal: true

require './player'
require './board'

class Game
  attr_accessor :board, :player1, :player2, :current_player, :next_player

  def initialize
    # hard coded values for player1 just for testing, when done delete line 14 & uncomment line 13
    # @player1 = create_player
    @player1 = Player.new('bob', 'X')
    puts @player1
    # hard coded values for player2 just for testing, when done delete line 16 & uncomment line 17
    @player2 = Player.new('squid', 'O')
    # @player2 = create_player(ordinal_prompt: 'second')
    puts @player2
    @board = Board.new
    @board.display_board
  end

  # called at the end of each turn?
  def game_over?
    # exit if winner or tie
    # display winner name (?)
    # returns true/false
  end

  def take_turn
    # puts "Player is: #{@player1.name}, marker is: #{@player1.marker}"
    # @board.board_update(@player1.marker)
    @current_player = @player1
    puts "#{@current_player.name.capitalize}, please take your turn."
    @board.board_update(@player1.marker)
    # a while loop, probably. exit out if false (no turns left or winner)
    # prompt current player to take turn
    # game_over? (called after each turn is taken)
    # prompt other player to take turn
    # game_over? (called after each turn is taken)
  end

  private

  def create_player(ordinal_prompt: 'first')
    # prompt for name
    puts "Enter #{ordinal_prompt} player name: "
    # assign name to variable
    player_name = gets.chomp
    # assign markers to each player by prompting X or O
    puts 'Enter marker (X or O): '
    marker = gets.chomp
    Player.new(player_name, marker)
    # return player (object instance of Player class)
  end
end

game = Game.new
game.take_turn
