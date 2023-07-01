function solution(number) {
  let value = number;
  let conversion = "";
  while (value != 0) {
    if (value >= 1000) {
      conversion += "M";
      value -= 1000;
    } else if (value >= 900) {
      conversion += "CM";
      value -= 900;
    } else if (value >= 500) {
      conversion += "D";
      value -= 500;
    } else if (value >= 400) {
      conversion += "CD";
      value -= 400;
    } else if (value >= 100) {
      conversion += "C";
      value -= 100;
    } else if (value >= 90) {
      conversion += "XC";
      value -= 90;
    } else if (value >= 50) {
      conversion += "L";
      value -= 50;
    } else if (value >= 40) {
      conversion += "XL";
      value -= 40;
    } else if (value >= 10) {
      conversion += "X";
      value -= 10;
    } else if (value >= 9) {
      conversion += "IX";
      value -= 9;
    } else if (value >= 5) {
      conversion += "V";
      value -= 5;
    } else if (value >= 4) {
      conversion += "IV";
      value -= 4;
    } else if (value >= 1) {
      conversion += "I";
      value -= 1;
    }
  }

  return conversion;
}
// return conversion;

console.log(solution(712));
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
