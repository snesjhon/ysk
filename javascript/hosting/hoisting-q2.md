# Hoisting Q2

What would this print out?

{% tabs %}
{% tab title="Question" %}
```javascript
var food = "grapes"
var foodFun = function(){
    console.log("original:", food);
    var food = "sushi";
    console.log("new:", food);
}
foodFun();
```
{% endtab %}

{% tab title="Answer" %}
```bash
"original: undefined"
"new: sushi"
```

## Thoughts

* Initially I thought about the function looking beyond its local scope into the global scope and getting `grapes` but that was wrong because I didn't think that `food` was going to be hoisted in the function scope.
* This proved to be wrong because the local variables ARE indeed hoisted as the function runs it EXECUTES hoisting when the function happens.
{% endtab %}
{% endtabs %}



