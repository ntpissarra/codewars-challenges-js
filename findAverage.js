//done
function findAverage(array) {
  if (!array.length) return 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return (total = total / array.length);
}

findAverage([1, 1, 1]);
