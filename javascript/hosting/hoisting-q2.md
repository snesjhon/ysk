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
```javascript
//"original: undefined"
//"new: sushi"

// this would translate to
var food = "grapes"
var foodFun = function(){
    var food;
    console.log("original:", food); // undefined
    food = "sushi";
    console.log("new:", food); // sushi
}
foodFun();

// the function will keep its scope after hoisting and the `food` var 
// will be replaced
```

## Thoughts

* Initially I thought about the function looking beyond its local scope into the global scope and getting `grapes` but that was wrong because I didn't think that `food` was going to be hoisted in the function scope.
* This proved to be wrong because the local variables ARE indeed hoisted as the function runs it EXECUTES hoisting when the function happens.
{% endtab %}
{% endtabs %}



