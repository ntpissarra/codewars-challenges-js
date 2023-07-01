function findUniq(arr) {
  const firstNumber = arr[0];
  const lastNumber = arr[arr.length - 1];

  if (firstNumber === lastNumber) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== firstNumber && arr[i] !== lastNumber) {
        return arr[i];
      }
    }
  } else {
    if (firstNumber === arr[1]) {
      return lastNumber;
    } else {
      return firstNumber;
    }
  }
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
