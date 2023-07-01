function check(a, x) {
  let contain = false;
  for (let i = 0; i < a.length; i++) {
    if (x === a[i]) {
      contain = true;
    }
  }
  return contain;
}
