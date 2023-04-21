# frozen_string_literal: true

# module that has the words displayed to the screen
module DisplayableText
  def display_initial_prompt_text
    puts 'Do you want to be the codemaker or the codebreaker? Enter 1 for codemaker, 2 for codebreaker: '
  end

  def display_codemaker_confirmation_text
    puts 'You are the codemaker.'
  end

  def display_codebreaker_confirmation_text
    puts 'You are the codebreaker.'
  end

  def display_invalid_selection_option_text
    puts 'Invalid selection. You are the codebreaker.'
  end

  def display_human_codebreaker_display_dupe_text
    puts 'Duplicate entries or empty entries not allowed. Enter a new selection again.'
  end

  def display_color_choice_prompt
    puts "\nEnter your color choice. Pick one color (r for example) and then
    press enter. Do this four times to generate your four color code choice.\n
    r for 🔴, b for 🔵, g for 🟢,
    y for 🟡, br for 🟤, p for 🟣"
  end

  def display_human_codebreaker_text
    puts 'Enter a code to be broken: '
  end

  def display_computer_text
    puts "Computer is selecting random colors...\n\n"
  end

end
