function moveZeros(arr) {
  const zerosAtEnd = arr
    .filter((e) => e !== 0)
    .concat(arr.filter((e) => e === 0));

  return zerosAtEnd;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
