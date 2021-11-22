/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []
  // adds an order to the book when the book is empty and thus cannot fulfill the order

  if (existingBook.length === 0) updatedBook.push(incomingOrder)
  for (let i = 0; i < existingBook.length; i++) {
    if (incomingOrder !== existingBook[i]) updatedBook.push(incomingOrder)
  }
  console.log(updatedBook)

  return updatedBook
}



module.exports = reconcileOrder
