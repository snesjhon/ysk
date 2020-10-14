# sameFrequency

Write a function called `sameFrequency` Given two positive integers, find out if the two numbers have the same frequency of digits. 

Your solution MUST have the following complexities.

Time: `O(N)` 

{% tabs %}
{% tab title="Examples" %}
```javascript
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
```
{% endtab %}

{% tab title="Solution" %}
```javascript
function sameFrequency(num1, num2) {
  const arr1 = num1.toString().split("");
  const arr2 = num2.toString().split("");
  if (arr1.length !== arr2.length) return false;

  let freq = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] in freq) {
      freq[arr1[i]] += 1;
    } else {
      freq[arr1[i]] = 1;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] in freq) {
      if (freq[arr2[j]] === 1) {
        delete freq[arr2[j]];
      } else {
        freq[arr2[j]] -= 1;
      }
    } else {
      return false;
    }
  }
  return Object.keys(freq).length === 0 ? true : false;
}
```
{% endtab %}
{% endtabs %}

