/**
 * SOCK MERCHANT
 * ---
 * Find pairs of integers from an array given `n = array length` && `arr = unsorted array of integers`
 *
 * Resources
 * - https://dev.to/adyngom/javascript-sock-merchant-challenge-solution-2-2b39
 * - https://www.hackerrank.com/challenges/sock-merchant/
 */

// Solution 1?
function sortAndCount(n, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let pairs = 0;
  for (let i = 0; i < n - 1; ++i) {
    if (sorted[i] === sorted[i + 1]) {
      ++pairs;
      i += 1;
    }
  }
  return pairs;
}

sortAndCount(7, [1, 2, 1, 2, 1, 3, 2]); //?
