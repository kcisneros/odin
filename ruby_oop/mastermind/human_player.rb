# frozen_string_literal: true

# class for the Human player
class HumanPlayer
  attr_accessor :secret_code

  def initialize(secret_code)
    @secret_code = secret_code
  end
end
