function solution(roman) {
  let conversion = 0;

  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < roman.length; i++) {
    if (table[roman[i]] < table[roman[i + 1]]) {
      conversion += table[roman[i + 1]] - table[roman[i]];
      i++;
    } else {
      conversion += table[roman[i]];
    }
  }
  return conversion;
}

console.log(solution("DCCXII"));
