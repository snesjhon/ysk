# binarySearch

Given a sorted array of integers, return the index of the given key. Return -1 if not found.

{% tabs %}
{% tab title="Example" %}
```javascript
binarySearch([1,2,3,4,5,], 2)
```
{% endtab %}

{% tab title="Solution" %}
```javascript
function binarySearch(arr, target) {
  // Have to pointers, one at the start of the array one at the end of the array
  // Once we have those two pointers, we while look start less than or equal to end
  // THEN choose a median point. 
  // If the target is bigger than the median then move the starting point + 1
  // if the target is less than the median then move the end point + 1
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
   // Math.round to always have a _round_ number to index by. No products
    let med = Math.round((start + end) / 2);
    if (arr[med] === target) {
      return med;
    } else if (target > arr[med]) {
      // this means that the answer is on the right
      start = med + 1; // we do a plus one since we're already compared the median
    } else if (target < arr[med]) {
      end = med - 1; // We do a minus one since we've already compared the median
    }
  }
  return -1 
}
```
{% endtab %}
{% endtabs %}

## ALGORITHM STEPS - ITERATIVE

* At every step, consider the array between low and high indices
* Calculate the mid index.
* If element at the mid index is the key, return mid.
* If element at mid is greater than the key, then reduce the array size such that high becomes mid - 1. Index at low remains the same.
* If element at mid is less than the key, then reduce the array size such that low becomes mid + 1. Index at high remains the same.
* When low is greater than high, key doesn't exist. Return -1.

Binary search is used to find the index of an element in a sorted array. If the element doesn't exist, that can be determined efficiently as well. The algorithm divides the input array by half at every step. After every step, either we have found the index that we are looking for or half of the array can be discarded. Hence, solution can be calculated in `O(log n)` time.

This problem can actually be solved in multiple ways, however, the divide and conquer solution grants us `O(log n)` runtime / memory complexity along which is optimal

Because we're provided a sorted array we can do a simple comparison where we go right down the middle and discard the side we don't actually use.

Because middle NEEDS to be in between where low and high are, that we need them to be ever changing. Can't be static

## Questions

### Why is it low + \(\(high - low\) / 2\)

"You may also wonder as to why mid is calculated using mid = lo + \(hi-lo\)/2 instead of the usual mid = \(lo+hi\)/2.This is to avoid another potential rounding bug: in the first case, we want the division to always round down, towards the lower bound. But division truncates, so when lo+hi would be negative, it would start rounding towards the higher bound. Coding the calculation this way ensures that the number divided is always positive and hence always rounds as we want it to. Although the bug doesn't surface when the search space consists only of positive integers or real numbers, I've decided to code it this way throughout the article for consistency."

[https://stackoverflow.com/questions/4534342/binary-search-middle-value-calculation](https://stackoverflow.com/questions/4534342/binary-search-middle-value-calculation)

### Why the While loop

Because we need to iterate through whatever the size of the array is going to be. We return -1 if low &gt; high because that means we've gone through all of the halves of the array and we haven't found what we needed.

```javascript
var arr =[0,1,2,4,5,6,7];
          L     M     H
            L  M  H
                L  M  H
                  L M H
```

### Calculating Mid

Because mid is an ever shrinking array, we need to make sure that mid to also shift depending on the size of the array. This is done by adding \`low\` to the difference between \`high - low\` divided by 2.

Given array, find the index of 4

`var arr = [0,1,2,3,4,5,6,7,8];`

Write a function called **binarySearch** which accepts a **sorted** array and a value and returns the index at which the value exists. Otherwise return -1

