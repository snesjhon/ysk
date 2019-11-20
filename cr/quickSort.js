function qs(arr) {
  const arrL = arr.length;
  if (arrL <= 1) return arr;
  let left = [];
  let right = [];
  const pivot = arr[0];
  for (let i = 1; i < arrL; i++) {
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return qs(left).concat(pivot, qs(right));
}

qs([55, 4, 2, 4431, 24566, 222, 1234]); //?

function quickSort(arr) {
  const arrLen = arr.length;
  if (arrLen <= 1) return arr;
  let pivot = arr[0];
  let left = []; //?
  let right = []; //?
  for (let i = 1; i < arrLen; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  left;
  right;

  return quickSort(left).concat(pivot, quickSort(right));
}

quickSort([5, 4, 4, 5, 7, 8, 3, 2]); //?
