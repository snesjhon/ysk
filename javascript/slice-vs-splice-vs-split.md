# Slice vs Splice vs Split

## Slice

This method copies a given part of an array and returns that copied array. **It doesn't change the original array.**

`array.slice(from, until)`

* **From:** Slice the array starting **from** an element index
* **Until:** Slice the array until another element index

 **The `slice()` method doesn't include the last given element**

If `end` is omitted, `slice` extracts through the end of the sequence \(`arr.length`\). 

```javascript
const arr = [1,2,3,4,5];
arr.slice(0, 1); // [1]

// These two are the same because omiting the `end` is the same as extracting 
// through the end of the list (arr.length)
arr.slice(1);    // [2,3,4,5]
arr.slice(1, 5); // [2,3,4,5]
```

