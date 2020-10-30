# Radix Sort

## Notes

* Because we're sorting numbers based on the amount of characters how do we know which characters we need to know from the beginning? 
* We'd have to at least traverse through the array once to denote the amount of characters that we need in order to start moving them through buckets? 
* Wouldn't we also need to do a nested loop as we move through the buckets?

### Radix Sort Helpers

* We need something that gets the appropriate digit based on the digits provided and the current view location

```javascript
getDigit(12345, 0) // 5
getDigit(12345, 1) // 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 5) // 0
```

* We take the items based on it's location, but we can do it based on Math information

```javascript
function getDigit(num, i){
    return Math.floor(num / Math.pow(10, i)) % 10;
}
```





