# frozen_string_literal: true

# class to set up players
class Player
  attr_accessor :name, :marker

  def initialize(name, marker)
    @name = name
    @marker = marker
  end
end
