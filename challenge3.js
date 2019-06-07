/*
Given a list of orders in sequential order and the current price, calculate the Profit and Loss (pnl) on a First In First Out (FIFO) realization basis.

The profit and loss of a security can be determined given a quantity, entryPrice, and exitPrice: pnl = quantity * (exitPrice - entryPrice)

When given a series of buy and sell orders, some pnl is realized and some is unrealized. 
When a buy order occurs (ie a security is bought), the profit or loss on that order is not realized until that quantity is later sold. 
When a sell order occurs, we must determine which buy orders will have their quantity realized. 
We will do this on a FIFO basis, meaning that we will match the sell quantity with the first buy order possible (from a sequential perspective). 
In this case the entry price is the buy price and the exit price is the sell price.

PNL that is not matched with a sell order is unrealized (meaning we haven't sold the shares we bought). In this case the entry price is the buy price and the exit price is the current price.

When unrealizedPnl and realizedPnl have been determined, the final PNL can be calculated as: totalPnl = unrealizedPnl + realizedPnl

An order is formatted as an array [quantity, price]. For example, an order [10, 15] is an order to buy 10 at $15 an order [-5, 30] is an order to sell 5 at $30.

You may assume the list of orders is valid:
    it will not over buy or over sell
    the list of orders will be a valid array
    each order array will have valid inputs (positive non-null price, non-null quantity)

Example:
orders = [[10, 15], [5, 10], [-12, 20]] //buy 10 at $15, buy 5 at $10, sell 12 at $20
currentPrice = 17

realizedPnl = 10 * (20 - 15) + 2 * (20 - 10) = 70
unrealizedPnl = 3 * (17 - 10) = 21
pnl =  70 + 21 = 91
*/

function calculatePnl(orders, currentPrice) {
    let realizedPnl = 0
    let unrealizedPnl = 0
    let position = []
    const deepCloneNestedArray = (items) => items.map(item => Array.isArray(item) ? deepCloneNestedArray(item) : item);
    let sanitizedOrders = deepCloneNestedArray(orders)


for (let order of sanitizedOrders){
    let quantity = order[0]
    let price = order[1]
    if(quantity > 0){
        position.push(order)
    } else {
       completeSellOrder(quantity,price)
        }
    }

for(let order of position){
  let quantity = order[0]
  let price = order[1]
  if(quantity>0){
    unrealizedPnl = unrealizedPnl + quantity*(currentPrice-price)
  }
}

    function completeSellOrder(quantity,salePrice){
      let sharesToSell = quantity
        while(sharesToSell < 0){
            let currentOrder = position.shift()
            if(-sharesToSell > currentOrder[0]){
            sharesToSell = sharesToSell + currentOrder[0]
            realizedPnl = realizedPnl + currentOrder[0] * (salePrice - currentOrder[1])
            } else{
              realizedPnl = realizedPnl + -sharesToSell *(salePrice - currentOrder[1])
              sharesToSell = sharesToSell + currentOrder[0]
              currentOrder[0] = sharesToSell
              position.unshift(currentOrder)

            }
        }
    }
return realizedPnl + unrealizedPnl
}
