# frozen_string_literal: true

# module that has the words displayed to the screen
module DisplayableText
  def initial_prompt_text
    'Do you want to be the codemaker or the codebreaker? Enter 1 for codemaker, 2 for codebreaker: '
  end

  def codemaker_confirmation_text
    'You are the codemaker. Enter a code to be broken: '
  end

  def codebreaker_confirmation_text
    'You are the codebreaker.'
  end

  def invalid_selection_option_text
    'Invalid selection. You are the codebreaker.'
  end

  def human_codebreaker_dupe_text
    'Duplicate entries or empty entries not allowed. Enter a new selection again.'
  end

  def color_choice_prompt
    "\nEnter your color choice. Pick one color (r for example) and then
    press enter. Do this four times to generate your four color code choice.\n
    r for 🔴, b for 🔵, g for 🟢,
    y for 🟡, br for 🟤, p for 🟣"
  end

  def computer_text
    "Computer is selecting random colors...\n\n"
  end

  def color_is_part_of_secret_code_text(color)
    "Color #{color} is a part of the secret code."
  end

  def color_is_in_the_right_spot(color)
    "#{color} is in the right spot!"
  end
end
