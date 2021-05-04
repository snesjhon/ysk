# Radix Sort

{% tabs %}
{% tab title="JavaScript" %}
```javascript
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
```
{% endtab %}
{% endtabs %}

## BigO

This algorithm's best, worst, and average would be `O(wn)` because `w` is only the count of the longest word. Even though we have a nested loop we're not just growing and counting for every number in the list. But rather we take the loop ONLY by the amount of the longest digit count.

## Notes

* Because we're sorting numbers based on the amount of characters how do we know which characters we need to know from the beginning? 
* We'd have to at least traverse through the array once to denote the amount of characters that we need in order to start moving them through buckets? 
* Wouldn't we also need to do a nested loop as we move through the buckets?

### Radix Sort Helpers

* We need something that gets the appropriate digit based on the digits provided and the current view location

```javascript
getDigit(12345, 0) // 5
getDigit(12345, 1) // 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 5) // 0
```

* We take the items based on it's location, but we can do it based on Math information

```javascript
function getDigit(num, i){
    return Math.floor(num / Math.pow(10, i)) % 10;
}
```

