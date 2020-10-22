# Bubble Sort

Sort an array using bubble sort

{% tabs %}
{% tab title="Example" %}
```text
bubbleSort([4,3,2,1]) // [1,2,3,4]
```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
/**
Here is my initial solution

*/

function bubbleSort(arr){
 // first we create a base condition
 if(arr.length < 1) return arr; 
 
 // create the first loop at the end of the array that decrements
 // This "starts" at the end of the loop based on it's arr.length. 
 // it's arr.length instead of `arr.length` because we're not comparing equality
 // but rather if it's less than (not less than or equal)
 for(var i = arr.length; i > 0; i--){
  // create a second loop that the start of the array that increments 
  // until we react the position of i
  for(var j = 0; j < i; j++){
   // Let's compare the value of `j` and `j + 1` to get a lookahead
   // This will go until i 
   if(arr[j] >= arr[j+1]){
    // swap the values if true
    var temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
   }
  }
 }
 // return the sorted array;
 return arr;
}
```
{% endtab %}
{% endtabs %}

