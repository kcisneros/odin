require 'spec_helper'
require_relative '../stockpicker'

RSpec.describe 'Stock Picker Exercises' do

  describe 'stock picker exercise' do

    it 'should return [1, 4]' do
      expect(stock_picker([17,3,6,9,15,8,6,1,10])).to eq([1, 4])
    end

    it 'should return [1, 6]' do
      expect(stock_picker([17,3,6,9,5,8,60,1,10])).to eq([1, 6])
    end

  end
end