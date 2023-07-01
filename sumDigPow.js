function sumDigPow(a, b) {
  let nums = [];

  for (a; a <= b; a++) {
    if (a < 10) {
      nums.push(a);
    } else {
      const numToStr = a.toString();
      let sum = 0;
      for (let i = 0; i < numToStr.length; i++) {
        sum += parseInt(numToStr[i]) ** (i + 1);
      }
      if (sum === a) {
        nums.push(a);
      }
    }
  }
  return nums;
}
console.log(sumDigPow(1, 150));
