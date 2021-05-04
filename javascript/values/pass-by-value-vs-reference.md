# Accessing by value and reference

{% hint style="info" %}
When you assign a value to a variable, the JavaScript engine will determine whether the value is a primitive or reference value.
{% endhint %}

## Access by Value

* If the value is a primitive value, when you access the variable, you manipulate the **actual value** stored in that variable. In other words, the variable that stores a primitive value is **accessed by value**.

### Copying Primitive Values

* When you assign a variable that stores a primitive value to another, the value stored in the variable is created and copied into the new variable

```javascript
var a = 1;
var b = a;
b = 5

console.log(a); // 1;
console.log(b); // 5;
```

The above works because we're accessing by value. We're copying the value to `b` and b is a new address in the stack. `a` and `b` have no relationship, when you change the value stored in the `b` variable, the value of the `a` variable doesn't change.

## Access by Reference

* Unlike a primitive value, when you manipulate an object, you work on the **REFERENCE** of that object, rather than the actual object. 
* It means that a variable that stores an object is **ACCCESSED BY REFERENCE**

### **Copying by reference value**

* When you assign a reference value from one variable to another, the value stored in the variable is also copied in the location of the new variable.
* **THE DIFFERENCE** is that the value stored in **BOTH** variables now are the **ADDRESS** of the actual object stored in the heap!

{% tabs %}
{% tab title="Example" %}
```javascript
var a = {a: "a"}
var b = {b: "b"}
a = b;
b.b = "c";

console.log(a); // what would this print out?
```
{% endtab %}

{% tab title="Answer 1" %}
```javascript
var a = {a: "a"}
var b = {b: "b"}
a = b;
b.b = "c";

console.log(a); // {b: "c"}
```

When we copy `a` to `b` we're merely pointing to the same address location in the heap. When we change modify `b` we're modifying the location in memory. Therefore when we log `a` , since it's pointing to the same location, it'll have the modified object.
{% endtab %}
{% endtabs %}

**Resource:** [https://www.javascripttutorial.net/javascript-pass-by-value/](https://www.javascripttutorial.net/javascript-pass-by-value/)

