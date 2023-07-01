function nextBigger(n) {
  const numberToString = n.toString();

  let x = "";
  for (let i = 0; i < numberToString.length; i++) {
    if (numberToString[i] < numberToString[i - 1]) {
    }
  }
  return n;
}

console.log(nextBigger(12));
