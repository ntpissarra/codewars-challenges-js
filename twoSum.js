function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let i2 = 1; i2 < numbers.length; i2++) {
      if (numbers[i] + numbers[i2] === target) {
        return [i, i2];
      }
    }
  }
}

console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));

console.log(twoSum([1, 2, 3], 4));
