# frozen_string_literal: true

# module that has the words displayed to the screen
module DisplayableText
  PROMPT_FOR_LETTER = 'Enter a letter to solve the secret word: '
  GAME_OVER_TEXT = 'Game over! You guessed the word'
  NO_MATCH_TEXT = 'Not a match'
  WELCOME_TEXT = "Let's play Hangman!\n\n"

  def guessed_letters(guessed_letters)
    puts "\n\nSo far you have guessed: #{guessed_letters}"
  end

  def guess_word_confirmation(guess_word)
    "guess word is: #{guess_word.join('')}"
  end

  def turns_left(turn_number)
    "You have #{11 - turn_number} turns left"
  end
end
