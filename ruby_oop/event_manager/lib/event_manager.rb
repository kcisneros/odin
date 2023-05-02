# frozen_string_literal: true

require 'google/apis/civicinfo_v2'
require 'erb'
require 'csv'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5, '0')[0..4]
end

def standardize_numbers(phone_number)
  if phone_number.include?('.') ||
     phone_number.include?('(') ||
     phone_number.include?(')') ||
     phone_number.include?('-') ||
     phone_number.include?(' ') ||
     phone_number.include?('+')
    final_number = phone_number.gsub('.', '').gsub('(', '').gsub(')', '').gsub(/\s+/, '').gsub('-', '').gsub('+', '')
  else
    final_number = phone_number
  end
  clean_phone_numbers(final_number)
end

def clean_phone_numbers(final_number)
  # if the phone number is less than 10 digits, assume it's a bad number check
  # if the number is 10 digits., it's a good number check
  # if the number is 11 digits && first number is a 1 then trip the 1 and use remaining 10 digits check
  # if the number is 11 digits and the first number is not 1, then it is a bad number check
  # if the number is more than 11 digits, bad number
  if final_number.length == 11 && final_number.start_with?('1')
    final_number[1..10]
  elsif final_number.length == 11 && !final_number.start_with?('1') ||
        final_number.length < 10 ||
        final_number.length > 11
    'bad phone number'
  else
    final_number
  end
end

def open_csv
  CSV.open(
    'event_attendees.csv',
    headers: true,
    header_converters: :symbol
  )
end

def get_the_hour(registration_dates)
  Time.strptime(registration_dates, '%m/%d/%y %H:%M').hour
end

def tally_frequency_of_hour_registration(all_of_the_hours)
  all_of_the_hours.each_with_object(Hash.new(0)) do |item, hash|
    hash[item] += 1
    # hash.sort_by { |time, tally| puts "tally is: #{tally}. time is: #{time}"}
    # this doesn't work.. :l
    # hash.sort_by { |time, tally| tally}
  end
end

def get_the_day(registration_dates)
  formatted_time = Time.strptime(registration_dates, '%m/%d/%y %H:%M')
  formatted_time.strftime('%A')
end

def tally_frequency_of_day_registration(all_of_the_days)
  all_of_the_days.each_with_object(Hash.new(0)) do |day, hash|
    hash[day] += 1
  end
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    legislators = civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    ).officials
  rescue Google::Apis::ClientError
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def save_thank_you_letter(id, form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"
  File.open(filename, 'w') do |file|
    file.puts form_letter
  end
end

puts 'EventManager initialized.'

template_letter = File.read('../form_letter.erb')
erb_template = ERB.new(template_letter)

contents = open_csv

all_of_the_hours = []

all_of_the_days = []

contents.each do |row|
  id = row[0]
  name = row[:first_name]

  zipcode = clean_zipcode(row[:zipcode])

  phone_number = standardize_numbers(row[:homephone])

  registration_dates = row[:regdate]

  all_of_the_hours << get_the_hour(registration_dates)

  @hour_registration_tally = tally_frequency_of_hour_registration(all_of_the_hours)

  all_of_the_days << get_the_day(registration_dates)

  @day_registration_tally = tally_frequency_of_day_registration(all_of_the_days)

  legislators = legislators_by_zipcode(zipcode)

  form_letter = erb_template.result(binding)

  save_thank_you_letter(id, form_letter)
end
puts "Day registration tally is: #{@day_registration_tally}"
puts "Hour registration tally is: #{@hour_registration_tally}"
