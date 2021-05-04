# minSubArrayLen

Write a function called **minSubArrayLen** which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a **contiguous** subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

{% tabs %}
{% tab title="Data" %}
```javascript
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
```
{% endtab %}

{% tab title="Solution" %}
```javascript
function minSubArrayLen(arr, target){
  let i = 0; // start
  let j = 0; // end
  let sum = 0;
  let ret = Infinity;

  while(i < arr.length){
      if(sum < target && j < arr.length){
          // Our solution isn't in the current target, so add up the current
          // window and store it in the sum, and increment our window.
          sum += arr[j];
          j++
      } else if( sum >= target){
          // We have found our initial(and on going solution) in the current
          // block, so therefore add it to the `ret` variable in order to 
          // keep track of the return value
          // j - i would be the different of indexes 
          ret = Math.min(ret, j - i); 

          // We found the solution in the current window, so decrement and 
          // remove the index from the sum 
          // try to find the target sum in a subsequent window
          sum -= arr[i];
          i++
      } else {
          break;
      }
  }

  // Infinitiy is the target because we'd need to compare the `positive` integer
  // that needs to be GREATER than what we'd sumup
  return ret === Infinity ? 0 : ret;
}
```
{% endtab %}
{% endtabs %}

## Notes

* The subarray doesn't have to be a specific length. I found this curious because in the previous versions of the sliding window problem I'd have to at least know the size of the window before I started iterating. 

