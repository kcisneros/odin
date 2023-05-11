# frozen_string_literal: true

require './display_text'

# module that takes care of saving and loading the saved game
module ManageGameState
  include DisplayableText

  def load_game_prompt
    puts DisplayableText::LOAD_GAME_CHOICE
    @prompt_response = gets.chomp.upcase
    case @prompt_response
    when 'Y'
      puts DisplayableText::LOADED_GAME_CONFIRMATION
      load_game
    end
  end

  def load_game_play
    puts @hidden_word_lines
    until game_over?
      each_turn
      @turn_number += 1
    end
  end

  def load_game
    game_state = YAML.load(File.open('saved_game.yml', 'r'), permitted_classes: [Hangman, RandomWord])
    pp game_state
    @guessed_letters = game_state.guessed_letters
    @secret_word = game_state.secret_word
    @hidden_word_lines = game_state.hidden_word_lines
    @turn_number = game_state.turn_number
    game_state.load_game_play
  end

  def save_game_file
    serialized_object = File.new('saved_game.yml', 'w')
    serialized_object.puts YAML.dump(self)
    serialized_object.close
  end

  def save_the_game
    if @turn_number != 11
      puts DisplayableText::ASK_TO_SAVE_GAME
      response = gets.chomp
      case response
      when 'Y', 'y', 'yes', 'YES'
        puts DisplayableText::GAME_SAVED_CONFIRMATION
        save_game_file
        exit(0)
      end
    end
  end
end
