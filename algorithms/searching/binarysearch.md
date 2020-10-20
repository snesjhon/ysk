# binarySearch

Write a function called **binarySearch** which accepts a **sorted** array and a value and returns the index at which the value exists. Otherwise return -1

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

