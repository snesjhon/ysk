# This

{% hint style="info" %}
`this` is the object that the function is a property of
{% endhint %}

`this` can also be thought of as whatever to the left of  `.` is referring to. 

In the `Global` context this will refer to the `Window` object. 

## Examples

{% tabs %}
{% tab title="Question" %}
```javascript
// What would `a()` print out
const a = function(){
    console.log(this);
    const b = function() {
        console.log(this);
        const c = {
            hi: function(){
                console.log(this);
            }
        }
        c();
    }
}
a();
```
{% endtab %}

{% tab title="Answer" %}
```javascript
// It would print out:
window // a
window // b
{hi: f() } // c
```

## Explanation

```javascript
// This scope chain 
const a = function(){
    const b = function() { }
    b();
}
a();

// is equavilent to 
window.a(b())

// When `c` is called then it looks like
window.a(b(c.hi()))
```

Since `this` is the object that the function is a property of. That means that `window` is the only thing that has called BOTH `a` and `b` therefore the `this` keyword only refers to `window` at this point. 

When it goes down to `c.hi()` then `c` is the `object that the function is a property of` Therefore `this` will refer to `c` because it's the _thing_  that has made the `hi()` call.
{% endtab %}
{% endtabs %}

