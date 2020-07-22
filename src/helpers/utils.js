export function moneyFormat(dataNumeric, sign = 'IDR') {
  const pieces = parseFloat(dataNumeric).toFixed(2).split('');
  let ii = pieces.length - 3;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ',');
  }
  return `${sign} ${pieces.join('')}`;
}
