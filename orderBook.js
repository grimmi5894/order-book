/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }

  for (let i = 0; i < existingBook.length; i++) {
    if ((incomingOrder.type !== existingBook[i].type) &&
       (incomingOrder.quantity === existingBook[i].quantity) &&
       (incomingOrder.price === existingBook[i].price)) {
      existingBook.splice(i, 1), i--

      return existingBook
    }
  }
  // adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys)
  // adds an order to the book when the book has a corresponding order type but it does not match
  // fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity
  // partially fulfills an order, removes the matching order and adds the remainder of the order to the book when 
  //    the book contains a matching order of a smaller quantity
  // uses two existing orders to completely fulfill an order, removing the matching orders from the book
  // uses two existing orders to completely fulfill an order, removing the first matching order from the 
  //    book and reducing the second
  // uses two existing orders to partially fulfill an order, removing the matching orders from the book and 
  //    reducing the incoming order before adding it to the book
  // Extra Credit: it fulfills a mismatched order when both parties benefit
  // Extra Credit: it does not fulfill a mismatched order when it does not benefit both parties

  console.log(existingBook)


  return existingBook
}

module.exports = reconcileOrder
