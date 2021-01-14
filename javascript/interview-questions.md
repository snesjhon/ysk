# Interview Questions

{% tabs %}
{% tab title="Question" %}
### What is hoisting in javascript?
{% endtab %}

{% tab title="Answer" %}
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope \(to the top of the current script or the current function\).

**Hoisting** is the mechanism of moving the variables and functions declaration to the top of the function scope \(or global scope if outside any function\).

* [https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/](https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/)
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Question" %}
### Write a function to reverse a hashmap/object. so set the values as properties and properties as values
{% endtab %}

{% tab title="Answer" %}
```javascript
const j = {
 a: "a1",
 b: "b2",
 c: "c3"
}

const y = Object.keys(j).reduce((a, c) => {
 a[j[c]] = c;
 return a;
}, {});
```
{% endtab %}
{% endtabs %}

