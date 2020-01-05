# Misc Questions

## `++i` vs. `i++` in JavaScript

Same as in other languages:

- `++i` (pre-increment) means "increment the variable; the value of the expression is the final value"
- `i++` (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"

- **Resource**: [Variable Difference](https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript) | [Difference in i in loops](https://stackoverflow.com/questions/22084653/is-there-a-difference-between-i-and-i-in-this-loop)

<br />

---

## In Javascript, Pass by Value or Pass by Reference?

Javascript uses a pass by value strategy for primitives but uses a call by sharing for objects. Call by sharing is largely similar to pass by reference in that the function is able to modify the same mutable object but unlike pass by reference isn’t able to assign directly over it.

- **Resource**: http://jasonjl.me/blog/2014/10/15/javascript/

<br />

---

## Increment vs Post-increment in an array

I was confused as to what `arr[index++]` does in the [removeDuplicates](removeDuplicates.js) question

```js
let index = 1;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    arr[index++] = arr[i + 1];
  }
}
```

**Answer:**

`arr[index++]` is the same as:

```js
arr[index];
index = index + 1;
```

So in the loop above the would reference `arr[1]` and then assign the right hand value. AND THEN increment.

- **Resource:** https://stackoverflow.com/questions/34797524/js-while-loop-arrayi-how-does-it-work

<br />

---

## In-place Algorithm

An algorithm which transform input with no auxilary data structure. The input is usually overwritten by the output as the algorithm executes. In place algorithm updates input sequence only through replacement or swapping of elements.
