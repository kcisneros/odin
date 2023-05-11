# frozen_string_literal: true

# module that has the words displayed to the screen
module DisplayableText
  PROMPT_FOR_LETTER = 'Enter a letter to solve the secret word: '
  GAME_OVER_TEXT = 'Game over! You guessed the word 🎉'
  NO_MATCH_TEXT = 'Letter is not in the hangman word!'
  WELCOME_TEXT = "Let's play Hangman!\n\n"
  GUESS_THE_WORD = 'Would you like to guess the word? Y/N '
  ENTER_THE_WORD = 'Please enter your guess: '
  ASK_TO_SAVE_GAME = 'Do you want to stop and save the game at this point? Y/N '
  GAME_SAVED_CONFIRMATION = 'Game saved, feel free start playing again at any time. '
  LOAD_GAME_CHOICE = 'Do you want to load a saved game? Y/N '
  LOADED_GAME_CONFIRMATION = 'Previous game loaded, good luck! '

  def guessed_letters_text(guessed_letters)
    puts "\n\nSo far you have guessed: #{guessed_letters}"
  end

  def turns_left(turn_number)
    "You have #{11 - turn_number} turns left.\n\n"
  end

  def lose_text(hangman_word)
    "Sorry, you lost! Word was: #{hangman_word}"
  end
end
