# Flattening

Write a recursive function called **flatten** which accepts an array of arrays and returns a new array with all of the values flattened

{% tabs %}
{% tab title="Examples" %}
```javascript
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
function flatten(arr) {
  if (arr.length < 1) return arr;
  if (Array.isArray(arr[0])) return flatten(arr[0]).concat(flatten(arr.slice(1)));
  return [arr[0]].concat(flatten(arr.slice(1)));
}
```
{% endtab %}
{% endtabs %}

