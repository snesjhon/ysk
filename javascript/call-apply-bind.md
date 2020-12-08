# call, apply, bind

## Call

```javascript
function a(){
    console.log('a');
}

// These two are the same
a() === a.call() 
```

## Questions

{% tabs %}
{% tab title="Example" %}
```javascript
var b = {
    name: 'jay'
    say(): {
        console.log(this)
    }
}

var c = {
    name: 'jay'
    say(): {
        return function() {
            console.log(this)
        }
    }
}

var d = {
    name: 'jay'
    say(): {
        return () => console.log(this)
    }
}

// What would each return?
b.say() 

c.say()()

d.say()()
```
{% endtab %}

{% tab title="Answer" %}
```javascript
var b = {
    name: 'jay'
    say(): {
        console.log(this)
    }
}
b.say()
```

`b.say()` would return `{name: "jay", say: fn()}`  
Because the `say()` function is "bounded" to the `b` object

```javascript
var c = {
    name: 'jay'
    say(): {
        return function() {
            console.log(this)
        }
    }
}
c.say()()
```

This would return `window` that's because the function isn't bounded to anything. As in it's `.` is not called by anything. 

`c.say()` is run, and it'd equal something like `var temp = c.say()` and then `temp()`would then be executed. And since `temp` isn't bounded to anything it'd just be the window object.

```javascript
var d = {
    name: 'jay'
    say(): {
        return () => console.log(this)
    }
}
d.say()()
```

This would return `{name: 'jay', say: fn}` Although it might look the same as `c` the main difference is that arrow function is lexically scopes the function
{% endtab %}
{% endtabs %}



