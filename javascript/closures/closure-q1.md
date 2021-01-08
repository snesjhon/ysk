# Closure Q1

## What would this print out?

{% tabs %}
{% tab title="Question" %}
```javascript
var arr = [1,2,3,4];

function closure(){
    for(var i = 0; i < arr.length; i++){
        setTimeout(function(){
            console.log(i)
        }, 100)
    }
}

closure()
```
{% endtab %}

{% tab title="Answer" %}
```javascript
var arr = [1,2,3,4];

function closure(){
    for(var i = 0; i < arr.length; i++){
        setTimeout(function(){
            console.log(i)
        }, 100)
    }
}

closure();
```

It would print out:

```javascript
4
4
4
4
```

This is because the function gets called and the loop happens, but the `setTimeout` isn't called until later \(because of the timeout\) and at that point, the `i` is at `4` because the loop has already ran. This happens because `var i` is not blocked scoped, but rather function scoped
{% endtab %}
{% endtabs %}

## How would you fix this?

{% tabs %}
{% tab title="Question" %}
```javascript
var arr = [1,2,3,4];

function closure(){
    for(var i = 0; i < arr.length; i++){
        setTimeout(function(){
            console.log(i)
        }, 100)
    }
}

closure()
```
{% endtab %}

{% tab title="Answer" %}
There are a couple of ways to fix this closure problem.

### Using Let

```javascript
var arr = [1,2,3,4];

function closure(){
    for(let i = 0; i < arr.length; i++){
        setTimeout(function(){
            console.log(i)
        }, 100)
    }
}

closure()
```

This would be the quickest way because using `let` allows you to use BLOCK SCOPING. This means that instead of using a `var` which uses FUNCTION SCOPING, the `let` is recreated \(and uses the previous value\) every time the for loop runs. That means that when `setTimeout` is executed, the `closure` value of `i` is persisted in memory because it a new `let` is created and incremented from the previous value

### Using IIFE

```javascript
var arr = [1, 2, 3, 4];

function closure() {
  for (var i = 0; i < arr.length; i++) {
    (function (item) {
      setTimeout(function () {
        console.log(item);
      }, 100);
    })(i);
  }
}

closure();
```

And IIFE is immediately invoked, at the iteration during which it passes the current value of the `i` so that \(because of closures\) the `item` param is then able to be referenced when the callback function is called with `setTimeout`

### Using \`bind\`

```javascript
var arr = [1,2,3,4];

function closure(){
    for(var i = 0; i < arr.length; i++){
        setTimeout(function(item){
            console.log(item)
        }.bind(null, i), 100)
    }
}

closure()
```

Using `bind` is another way of passing and encapsulating a variable's content based on when it was called. So when setTimeout is invoked then it's "bounded" to what the variable `i` was at the time it was called.
{% endtab %}
{% endtabs %}

## Resources

* [https://stackoverflow.com/questions/59170277/javascript-understanding-let-scope-inside-for-loop](https://stackoverflow.com/questions/59170277/javascript-understanding-let-scope-inside-for-loop#:~:text=let%20defines%20variables%20that%20have,in%20the%20for%20loop%20statement.)

