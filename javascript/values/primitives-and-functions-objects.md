# Primitive vs Reference

{% hint style="info" %}
In JavaScript, a variable may store two types of values:

**Primitives** and **Reference**
{% endhint %}

## 7 Primitives \(Data Types\)

* **Undefined**:
  * Only one value, undefined.
* **Null**: 
  * Only one value, null.
* **Booleans**: 
  * Two values: true and false.
* **Numbers**:
  * One value for each  [floating point math](https://el2.convertkit-mail.com/c/8kuk429m8li3ul03z6hk/7df7h2up57xel8/aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRG91YmxlLXByZWNpc2lvbl9mbG9hdGluZy1wb2ludF9mb3JtYXQ=)  number.
* **BigInts**:
  * One value for every conceivable integer.
* **Strings**:
  * One value for every conceivable string.
* **Symbols**:
  * More on this later

The size of a primitive value is fixed, therefore, JS stores the primitive value on the stack

## Objects \(Reference Type\)

* One value for every object literal we execute
* A non-data type
* Structural Type

The size of a reference value is DYNAMIC so JS stores the reference value on the heap

**Resource**: [https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)

## Functions

* One value for every function expression we execute.
* Structural Type

