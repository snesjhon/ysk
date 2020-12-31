# Pass by value

{% hint style="info" %}
JS passes ALL arguments to a function **BY VALUE**
{% endhint %}

Any change that you make to the arguments inside the function DOES NOT affect the passing variables outside of the function.

In other words, the changes made to the arguments are not reflected outside of the function.

## Passing Primitives

{% tabs %}
{% tab title="Example" %}
```javascript
function square(x) {
    x = x * x;
    return x;
}
var y = 10;
var result = square(y);

// what would these print out?
console.log(y);
console.log(result);
```
{% endtab %}

{% tab title="Solution" %}
```javascript
function square(x) {
    x = x * x;
    return x;
}
var y = 10;
var result = square(y);

// what would these print out?
console.log(y); // 10
console.log(result); // 100
```

Because we're passing by value of primitives, the variables inside the function are within the scope of ONLY the function, therefore none of the outside variables change. So when the `y` is logged, it's still in its original value.
{% endtab %}
{% endtabs %}

**Resource:** [https://www.javascripttutorial.net/javascript-pass-by-value/](https://www.javascripttutorial.net/javascript-pass-by-value/)

## Passing Objects

* When you pass an object to a function, you are passing the reference of that object, not the actual object. 
* Therefore, the function can modify the properties of the object via its reference.
* **BUT** the function CANNOT change the reference variable to reference another object. 

{% tabs %}
{% tab title="Example" %}
```javascript
const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); 
console.log(string);
console.log(obj1.value);
```
{% endtab %}

{% tab title="Solution" %}
```javascript
const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); // 100
console.log(string); // Jay
console.log(obj1.value); // a
```

* Because variables are PASSED BY VALUE in functions they won't have an affect outside of its scope. 
* Therefore when inside of the `change` function the following happens
  * `number` is a param of the function and therefore ONLY assigns a value to the `number` variable inside its scope. 
  * The same with `string`
  * Both of these have no affect outside their scope
* Also, the objects are passed by value, HOWEVER:
  * The values that are passed is the REFERENCE to each of the objects.
  * A function CANNOT change an object's reference, but ONLY modify the properties of the object via its REFERENCE
* Thus:
  * `obj1 = obj2` doesn't affect anything outside of the scope of that function. Because we're not able to change the object's reference
  * `obj2.value` DOES affect the variable outside its scope because it's accessing the property via the reference!
{% endtab %}
{% endtabs %}

* **Resource**: [https://www.javascripttutorial.net/javascript-pass-by-value/](https://www.javascripttutorial.net/javascript-pass-by-value/)

