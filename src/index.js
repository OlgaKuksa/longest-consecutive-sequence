module.exports = function longestConsecutiveLength(array) {
  if (array.length==0) return 0;
  let setArray = new Set(array);
  let mins = new Set();
  for (let i = 0; i < array.length; i++) {
    isMin = false;
    if (setArray.has(array[i] - 1) && isMin) isMin = false;
    if (setArray.has(array[i] + 1)) isMin = true;
    if (isMin) mins.add(array[i]);
  }
  let maxLength = 1;
  for (let min of mins) {
    let currentLength = 0;
    let value = min;
    while (setArray.has(value)) {
      currentLength++;
      value++;
    }
    if (currentLength > maxLength) maxLength = currentLength;
  };
  return maxLength;
};
