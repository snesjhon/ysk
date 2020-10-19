# nestedEvenSum

Write a recursive function called **nestedEvenSum.** Return the sum of all even numbers in an object which may contain nested objects.

{% tabs %}
{% tab title="Example" %}
```javascript
function nestedEvenSum () {
  // add whatever parameters you deem necessary - good luck!
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
function nestedEvenSum (obj) {
  let sum = 0;
  Object.keys(obj).forEach((e) => {
    if(Number.isInteger(obj[e]) && obj[e] % 2 === 0){
      sum += obj[e]
    } else if(typeof obj[e] === "object"){
      sum = sum + nestedEvenSum(obj[e])
    }
  })
  return sum;
}
```
{% endtab %}
{% endtabs %}

