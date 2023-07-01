function squareDigits(num) {
  const numbersToString = num.toString();

  let result = "";
  for (let i = 0; i < numbersToString.length; i++) {
    result += numbersToString[i] ** 2;
  }
  return parseInt(result);
}

squareDigits(3212);
