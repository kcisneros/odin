stock_prices = [17,3,6,9,15,8,6,1,10]

# stock_prices = [17,3,4,12]

def stock_picker(prices)
  max_profit = 0
  final_array = []

  prices.each_with_index do |price, buy_day| 
    sell_day = buy_day + 1

    while sell_day <= prices.length - 1

      profit =  prices[sell_day] - prices[buy_day]
      if buy_day < sell_day

        # puts "buy on day #{buy_day} for #{prices[buy_day]}, sell on day #{sell_day} for #{prices[sell_day]}. The profit/loss is: #{profit}"

        if profit <= max_profit 
          max_profit = max_profit
        else
          max_profit = profit
          final_array = [buy_day, sell_day]
        end
        # puts "final_array is: #{final_array}"
      end
      sell_day += 1
    end
  end
  return final_array
end

stock_picker(stock_prices)
