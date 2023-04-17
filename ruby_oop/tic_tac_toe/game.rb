# frozen_string_literal: true

require './player'
require './board'

# class to set up the game
class Game
  attr_accessor :board, :player1, :player2

  WINNING_VECTORS = [
    [0, 1, 2], # first row horizontal
    [0, 3, 6], # first row vertical
    [0, 4, 8], # top left diagonal
    [3, 4, 5], # second row horizontal
    [6, 7, 8], # third row horizontal
    [1, 4, 7], # second row vertical
    [2, 5, 8], # third row vertical
    [2, 4, 6] # top right diagonal
  ].freeze

  def initialize
    @player1 = create_player
    @player2 = create_player(ordinal_prompt: 'second')
    @board = Board.new
    board.display_board
  end

  def play
    turn_number = 1
    until game_over?
      swap_players(turn_number)
      turn_number += 1
    end
  end

  private

  def swap_players(turn_number)
    if turn_number.odd?
      puts "#{player1.name.capitalize} is selecting a spot..."
      @board.board_update(player1.marker)
    else
      puts "#{player2.name.capitalize} is selecting a spot..."
      @board.board_update(player2.marker)
    end
  end

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

  def game_over?
    @game_over = false
    if win?
      @game_over = true
      puts 'Game over!'
    elsif Board::BOARD.all? { |pos| pos.is_a? String }
      puts 'Tie!'
      @game_over = true
    else
      @game_over = false
    end
    @game_over
  end

  def win?
    WINNING_VECTORS.any? do |v|
      Board::BOARD[v[0]] == Board::BOARD[v[1]] && Board::BOARD[v[0]] == Board::BOARD[v[2]] && !Board::BOARD[v[0]].nil?
    end
  end
end

puts "Welcome to tic-tac-toe!\n\n"
game = Game.new
game.play
