function getShippingMessage(country, price, deliveryFee) {
  const TotalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${TotalPrice} credits!`;
}
console.log(
  `%c${getShippingMessage('Australia', 120, 50)}`,
  'background: yellow; color: blue; padding: 5px; font-size: 16px; font-weight: bold;'
); // "Shipping to Australia will cost 170 credits"
console.log(
  `%c${getShippingMessage('Germany', 80, 20)}`,
  'background: yellow; color: blue; padding: 5px; font-size: 16px; font-weight: bold;'
); // "Shipping to Germany will cost 100 credits"
console.log(
  `%c${getShippingMessage('Sweden', 100, 20)}`,
  'background: yellow; color: blue; padding: 5px; font-size: 16px; font-weight: bold;'
); // "Shipping to Sweden will cost 120 credits"
