//done
function solution(str) {
  if (!str.length) return "";
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}
solution("dlrow");
