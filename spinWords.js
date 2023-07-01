function spinWords(string) {
  const splittedWords = string
    .split(" ")
    .map((e) => {
      if (e.length >= 5) {
        return e.split("").reverse().join("");
      }
      return e;
    })
    .join(" ");

  return splittedWords;
}
spinWords("emocleW");
