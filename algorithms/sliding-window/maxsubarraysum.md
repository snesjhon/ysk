# maxSubArraySum

* Given an array of integers and a number, write a function called **maxSubarraySum**, which finds the maximum sum of a subarray with the length of the number passed to the function.
* Note that a subarray must consist of consecutive elements from the original array. In the first example below, \[100, 200, 300\] is a subarray of the original array, but \[100, 300\] is not.

{% tabs %}
{% tab title="Data" %}
```javascript
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([100,200,300,400], 2) // 700
```
{% endtab %}

{% tab title="Solution" %}
This is a sliding window problem. Run two for loops, one getting your initial `sum` and assigning to a `maxSum` then you should be able to determine a difference and update the `maxSum` as needed.

```javascript
function maxSubarraySum(arr, num){ 
    // Get your initial sum
    let sum = 0;
    for(let i = 0; i < num; i++){
        sum += arr[i]
    }    
    // Assign an initial maxSum based on the window above.
    let maxSum = sum

    // A secondary for loop, that starts at the `num` because we've already
    // ran through the initial window. Now continue through the window
    for(let j = num; j < arr.length; j++){
        // update the sum,
        sum += arr[j - num] - arr[j];
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return isNaN(maxSum) ? null : maxSum;
}
```
{% endtab %}
{% endtabs %}

