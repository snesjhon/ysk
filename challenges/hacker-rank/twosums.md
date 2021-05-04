# twoSums

Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

Input: [3,2,4], 6
Output: [1,2]
```
{% endtab %}

{% tab title="Brute" %}
```javascript
var twoSum = function(nums, target) {
  // BRUTE
  // for(var i = 0; i <= nums.length - 1; i++){
  //     for(var j = 1; j <= nums.length - 1; j++){
  //         if(nums[i] + nums[j] === target){
  //             return [i, j]
  //         }
  //     }
  // }
  // return result;

  // TWO POINTER
  // let sortedNums = nums.sort((a, b) => a - b);
  // let i = 0;
  // let j = nums.length - 1;
  // while(i < j){
  //     let result = nums[i] + nums[j];
  //     if(result === target){
  //         return [i, j]
  //     }
  //     if(result > target){
  //         j--;
  //     }
  //     if(result < target){
  //         i++;
  //     }
  // }
  // return -1;

  // HASHMAP
  let available = {};
  for (var i = 0; i <= nums.length - 1; i++) {
    const val = target - nums[i]; //?
    if (typeof available[val] !== "undefined") {
      return [available[val], i];
    } else {
      available[nums[i]] = i;
    }
  }
  return -1;
};
```
{% endtab %}
{% endtabs %}

## Resources

[https://www.youtube.com/watch?v=I58Kw-9tHgY](https://www.youtube.com/watch?v=I58Kw-9tHgY)

