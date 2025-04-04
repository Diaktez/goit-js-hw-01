function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    pricePerDroid * quantity
  } credits!`;
}
console.log(
  `%c${makeTransaction(5, 3000)}`,
  'background: blue; color: yellow; padding: 5px; font-size: 16px; font-weight: bold;'
); // "You ordered 5 droids worth 15000 credits!"
console.log(
  `%c${makeTransaction(3, 1000)}`,
  'background: blue; color: yellow; padding: 5px; font-size: 16px; font-weight: bold;'
); // "You ordered 3 droids worth 3000 credits!"
console.log(
  `%c${makeTransaction(10, 500)}`,
  'background: blue; color: yellow; padding: 5px; font-size: 16px; font-weight: bold;'
); // "You ordered 10 droids worth 5000 credits!"
