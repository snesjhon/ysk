# Pass by Value vs Reference

## Pass by Value

* Primitives are immutable in JS, therefore when reassigning a variable that's been assigned to a primitive you'll have to create a different copy of that variable. Because we're not able to mutate that variable because of it's primitive value.

```javascript
var a = 1;
var b = a;
b = 5

console.log(a); // 1;
console.log(b); // 5;
```

The above works because we're passing by value. We're passing the value down to `b` and b is a new address in memory. So when we change `b` and assign it a different value, it doesn't change `a`'s value.

## Pass by Reference

* An object is n

## In Javascript, Pass by Value or Pass by Reference?

Javascript uses a pass by value strategy for primitives but uses a call by sharing for objects. Call by sharing is largely similar to pass by reference in that the function is able to modify the same mutable object but unlike pass by reference isn’t able to assign directly over it.

* **Resource**: [http://jasonjl.me/blog/2014/10/15/javascript/](http://jasonjl.me/blog/2014/10/15/javascript/)

