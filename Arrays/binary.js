/** 
BINARY
--
Given a sorted array of integers, return the index of the given key. Return -1 if not found.

ALGORITHM STEPS - ITERATIVE
---
- At every step, consider the array between low and high indices
- Calculate the mid index.
- If element at the mid index is the key, return mid.
- If element at mid is greater than the key, then reduce the array size such that high becomes mid - 1. Index at low remains the same.
- If element at mid is less than the key, then reduce the array size such that low becomes mid + 1. Index at high remains the same.
- When low is greater than high, key doesn't exist. Return -1.

INFO
---
Binary search is used to find the index of an element in a sorted array.
If the element doesn't exist, that can be determined efficiently as well.
The algorithm divides the input array by half at every step. After every step,
either we have found the index that we are looking for or half of the array can
be discarded. Hence, solution can be calculated in O(logn) time.

This problem can actually be solved in multiple ways, however, the divide and conquer solution grants us
O(logn) runtime / memory complexity along which is optimal

Because we're provided a sorted array we can do a simple comparison where we go right
down the middle and discard the side we don't actually use.

Because middle NEEDS to be in between where low and high are, that we need them to be ever changing. Can't be static

Why is it low + ((high - low) / 2)
--
"You may also wonder as to why mid is calculated using mid = lo + (hi-lo)/2 instead of the usual mid = (lo+hi)/2.
This is to avoid another potential rounding bug: in the first case, we want the division to always round down,
towards the lower bound. But division truncates, so when lo+hi would be negative, it would start rounding towards
the higher bound. Coding the calculation this way ensures that the number divided is always positive and hence always
rounds as we want it to. Although the bug doesn't surface when the search space consists only of positive integers
or real numbers, I've decided to code it this way throughout the article for consistency."
https://stackoverflow.com/questions/4534342/binary-search-middle-value-calculation


Why the While loop
--
Because we need to iterate through whatever the size of the array is going to be
We return -1 if low > high because that means we've gone through all of the halves of the array
and we haven't found what we needed.

var arr =[0,1,2,4,5,6,7];
          L     M     H
            L  M  H
                L  M  H
                  L M H

Calculating Mid
---
Because mid is an ever shrinking array, we need to make sure that mid to also shift depending on the size of the array
This is done by adding `low` to the difference between `high - low` divided by 2.

Given array, find the index of 4
var arr = [0,1,2,3,4,5,6,7,8];

**/

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

/**
 * SOLUTION
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// function binarySearch(arr, key){
//   // we're going to create an array, with a high and low index, based on the result that we get
//   let low = 0;
//   let high = arr.length - 1; // because we're in the zero index, but length starts at 1
//   while(low <= high){
//     var mid = Math.floor((low + high) / 2);
//     if(arr[mid] == key) { return mid;}
//     if(arr[mid] > key){
//       high = mid - 1; // Because we're already know that mid is higher, so go read the one below that
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1,2,3,4,5,6,7,7,8], 4));
