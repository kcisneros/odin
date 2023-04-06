# frozen_string_literal: true

# class to set up players
class Player
  attr_reader :player1, :player2, :first_player, :second_player

  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
    @first_player = ''
    @second_player = ''
  end

  def pick_who_goes_first(player1, player2)
    player1 = rand(10)
    player2 = rand(10)
    if player1 <= 5
      puts 'Player 1 goes first'
      first_player = @player1
    else
      puts 'Player 2 goes first'
      first_player = @player2
    end
    first_player
  end

  # def first_player_x
  #   @char = 'X'
  # end

  # def second_player_o
  #   @char = 'O'
  # end
end
