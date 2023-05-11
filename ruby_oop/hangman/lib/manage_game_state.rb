# frozen_string_literal: true

require './display_text'

# module that takes care of saving and loading the saved game
module ManageGameState
  include DisplayableText

  FILE_NAME = 'saved_game.yml'

  def load_game_prompt
    puts DisplayableText::LOAD_GAME_CHOICE
    @prompt_response = gets.chomp.upcase
    case @prompt_response
    when 'Y'
      puts DisplayableText::LOADED_GAME_CONFIRMATION
      load_game
    else
      puts 'Ok, starting a new game.'
    end
  end

  def load_game
    game_state = YAML.safe_load(File.open(FILE_NAME, 'r'), permitted_classes: [Hangman, RandomWord])
    @guessed_letters = game_state.guessed_letters
    @secret_word = game_state.secret_word
    @hidden_word_lines = game_state.hidden_word_lines
    @turn_number = game_state.turn_number
  end

  def save_game_file
    serialized_object = File.new(FILE_NAME, 'w')
    serialized_object.puts YAML.dump(self)
    serialized_object.close
  end

  def save_the_game_option
    if @turn_number <= 11 && !win?
      puts DisplayableText::ASK_TO_SAVE_GAME
      response = gets.chomp.upcase
      case response
      when 'Y'
        puts DisplayableText::GAME_SAVED_CONFIRMATION
        save_game_file
        exit(0)
      else
        puts 'Ok, not saving the game.'
      end
    end
  end
end
