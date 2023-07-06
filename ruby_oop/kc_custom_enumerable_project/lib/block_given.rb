# def maybe_block
#   if block_given?
#     puts 'block party'
#   end
#   puts 'executed regardless'
# end

# maybe_block

# maybe_block {}

def simple_method
  yield
end

simple_method { puts 'hi from the block' }
