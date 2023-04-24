# frozen_string_literal: true

# module that has the words displayed to the screen
module DisplayableText
  def display_initial_prompt_text
    'Do you want to be the codemaker or the codebreaker? Enter 1 for codemaker, 2 for codebreaker: '
  end

  def display_codemaker_confirmation_text
    'You are the codemaker. Enter a code to be broken: '
  end

  def display_codebreaker_confirmation_text
    'You are the codebreaker.'
  end

  def display_invalid_selection_option_text
    'Invalid selection. You are the codebreaker.'
  end

  def display_human_codebreaker_display_dupe_text
    'Duplicate entries or empty entries not allowed. Enter a new selection again.'
  end

  def display_color_choice_prompt
    "\nEnter your color choice. Pick one color (r for example) and then
    press enter. Do this four times to generate your four color code choice.\n
    r for 🔴, b for 🔵, g for 🟢,
    y for 🟡, br for 🟤, p for 🟣"
  end

  def display_computer_text
    "Computer is selecting random colors...\n\n"
  end
end
