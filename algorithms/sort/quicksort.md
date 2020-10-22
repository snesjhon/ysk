# quickSort

{% tabs %}
{% tab title="Plain Text" %}
```text

```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
function qs(arr) {
  const arrL = arr.length;
  if (arrL <= 1) return arr;
  let left = [];
  let right = [];
  const pivot = arr[0];
  for (let i = 1; i < arrL; i++) {
    arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return qs(left).concat(pivot, qs(right));
}
```
{% endtab %}
{% endtabs %}

