# frozen_string_literal: true

# class for the Computer player
class ComputerPlayer
  attr_accessor :secret_code

  def initialize(secret_code)
    @secret_code = secret_code
  end
end
