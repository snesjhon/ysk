# Apply

What does `Array.apply` do in this method?

```javascript
Array.apply(null, {length: 100}).map(Function.call, Math.random)
```

As you probably know, `Function.prototype.apply` allows you to provide arguments to a function in the form of an array.

So calling `Array.apply` \(which just inherits its `.apply()` method from Function's prototype\)

{% hint style="info" %}
Any function that is an Instance of Function would allows you to inherit the `.apply` mrethods
{% endhint %}

## Resources

* [https://stackoverflow.com/questions/25512771/what-is-array-apply-actually-doing](https://stackoverflow.com/questions/25512771/what-is-array-apply-actually-doing)

