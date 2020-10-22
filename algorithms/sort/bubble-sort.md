# Bubble Sort

Sort an array using bubble sort

{% tabs %}
{% tab title="Example" %}
```javascript
bubbleSort([4,3,2,1]) // [1,2,3,4]
```
{% endtab %}

{% tab title="Solution \#1" %}
This is the brute force way. Two for loops that continuously swap regardless of length

```javascript
function bubbleSort(){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

This is a very naive way of sorting because we're having to continously loop through the array multiple times. The `i` goes through the whole array and continues until the end of the array. `j` goes through the array and also continues until the end of the array but we compare `j` and \`j
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
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



