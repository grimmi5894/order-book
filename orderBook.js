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
    else if ((incomingOrder.type !== existingBook[i].type) &&
      (incomingOrder.price === existingBook[i].price) &&
      (incomingOrder.quantity < existingBook[i].quantity)) {
      existingBook[i].quantity -= incomingOrder.quantity
      existingBook.push(existingBook[i])
      existingBook.splice(i, 1), i--

      return existingBook
    }
    else if ((incomingOrder.type !== existingBook[i].type) &&
      (incomingOrder.price === existingBook[i].price) &&
      (incomingOrder.quantity > existingBook[i].quantity)) {
      incomingOrder.quantity -= existingBook[i].quantity
      // existingBook.push(incomingOrder)
      existingBook.splice(i, 1), i--

      // return existingBook
    }
  }
  if ((incomingOrder.type === existingBook.type ||
    incomingOrder.type !== existingBook.type)) {
    existingBook.push(incomingOrder)

    return existingBook
  }
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
