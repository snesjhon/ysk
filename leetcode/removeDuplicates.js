/**
 * REMOVE DUPLICATES
 * ---
 * Given a sorted array nums, remove the duplicates in-place such that each element appear
 * only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying the input
 * array in-place with O(1) extra memory.
 *
 * Input: [1,1,2]
 * Output: 2
 *
 * Input: [0,0,1,1,1,2,2,3,3,4]
 * Output: 5
 *
 * Resources
 * - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * - https://www.youtube.com/watch?v=zIHe2V5Py3U
 */

function removeDuplicates(arr) {
  // We want to start at 1 because the first element of the array will ALWAYS be unique no matter t
  // the length of the array.
  let index = 1;

  // We then go through the array and figure out the input
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[index++] = arr[i + 1];
    }
  }

  return index;
}

// let nums = [1, 1, 2];
// let len = removeDuplicates(nums); //?

// for(let i = 0; i < len; i++){

// }
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
