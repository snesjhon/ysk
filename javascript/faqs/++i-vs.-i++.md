# ++i vs. i++

## `++i` vs. `i++` in JavaScript

Same as in other languages:

* `++i` \(pre-increment\) means "increment the variable; the value of the expression is the final value"
* `i++` \(post-increment\) means "remember the original value, then increment the variable; the value of the expression is the original value"

## Increment vs Post-increment in an array

I was confused as to what `arr[index++]` does in the [removeDuplicates](https://github.com/snesjhon/cs/tree/e0121b714018febf2f30465f26b64b2d948011c0/faqs/leetcode/removeDuplicates.js) question

```javascript
let index = 1;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    arr[index++] = arr[i + 1];
  }
}
```

**Answer:**

`arr[index++]` is the same as:

```javascript
arr[index];
index = index + 1;
```

So in the loop above the would reference `arr[1]` and then assign the right hand value. AND THEN increment.

## **Resource**:

* [Variable Difference](https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript) \| [Difference in i in loops](https://stackoverflow.com/questions/22084653/is-there-a-difference-between-i-and-i-in-this-loop)
* [https://stackoverflow.com/questions/34797524/js-while-loop-arrayi-how-does-it-work](https://stackoverflow.com/questions/34797524/js-while-loop-arrayi-how-does-it-work)

