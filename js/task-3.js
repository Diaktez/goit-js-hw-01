function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2
  );
}
function logWithSeparator(message) {
  console.log(
    '%c ',
    'background: brown; color: brown; padding: 10px ; font-size: 20px;'
  );
  console.log(
    `%c${message}`,
    'background: white; color: black; padding: 8px; font-size: 16px; font-weight: bold;'
  );
}
logWithSeparator(getElementWidth('50px', '8px', '4px')); // 74
logWithSeparator(getElementWidth('60px', '12px', '8.5px')); // 101
logWithSeparator(getElementWidth('200px', '0px', '0px')); // 200
console.log(
  '%cMALYUKY',
  'background: blue; color: yellow; font-size: 24px; font-weight: bold;'
);
console.log(
  '%c in IT',
  'background: blue; color: yellow; font-size: 24px; font-weight: bold;'
);
