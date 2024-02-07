function upperCase(symbol) {
    return symbol.toUpperCase()
}

function roundTwoDecimalPlaces(number) {
    if (number == null) {
      return 0;
    }
    return parseFloat(number.toFixed(2));
}

function currencyFormat(amount) {
  let roundedAmount = Math.round(amount);
  return roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {upperCase}
export {roundTwoDecimalPlaces}
export {currencyFormat}
