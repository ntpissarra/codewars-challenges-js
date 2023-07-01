function humanReadable(seconds) {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor((seconds / 60) % 60);
  const secs = Math.floor(seconds % 60);

  function addZero(num) {
    if (num < 10) return `0${num}`;
    else return num;
  }

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(secs)}`;
}

console.log(humanReadable(60));
