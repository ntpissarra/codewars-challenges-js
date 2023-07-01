function grow(x) {
  let sum = x[0];

  for (let i = 1; i < x.length; i++) {
    sum *= x[i];
  }
  return sum;
}
