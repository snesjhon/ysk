# twoStringSearch

Compare two strings and get a counter of the amount of instances that are available.

{% tabs %}
{% tab title="Examples" %}
```javascript
naiveString("zomgomgzomgmong", "omg"); // 3
```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
// Naive Solution
function naiveString(longString, shortString) {
  let counter = 0;
  for (let i = 0; i < longString.length; i++) {
    // if we match the first item, then iterate through the rest of the shortString
    if (longString[i] === shortString[0]) {
      let tempCounter = 0;
      for (let j = 0; j < shortString.length; j++) {
        if (longString[i + j] === shortString[j]) {
          tempCounter++;
        } else {
          break;
        }
      }
      if (shortString.length === tempCounter) {
        counter++;
      }
    }
  }
  return counter;
}
```
{% endtab %}
{% endtabs %}

