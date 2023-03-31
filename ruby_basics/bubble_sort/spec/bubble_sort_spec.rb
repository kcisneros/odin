require 'spec_helper'
require_relative '../bubble_sort'

RSpec.describe 'Bubble Sort Exercises' do

  describe 'bubble sort exercise' do

    it 'should return [0,2,2,3,4,78]' do
      expect(bubble_sort([4,3,78,2,0,2])).to eq([0,2,2,3,4,78])
    end

    it 'should return [1, 5, 6, 23, 35, 36, 42, 900]' do
      expect(bubble_sort([23, 5, 1, 6, 900, 35, 36, 42])).to eq([1, 5, 6, 23, 35, 36, 42, 900])
    end

  end
end