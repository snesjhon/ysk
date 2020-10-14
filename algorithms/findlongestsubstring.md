# findLongestSubstring

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters

{% tabs %}
{% tab title="Examples" %}
```javascript
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
```
{% endtab %}

{% tab title="Solution" %}
```javascript
function findLongestSubstring(str) {
  let a_pointer = 0;
  let b_pointer = 0;
  let max = 0;
  const hash = new Set();

  while (b_pointer < str.length) {
    if (!hash.has(str[b_pointer])) {
      hash.add(str[b_pointer]);
      b_pointer++;
      max = Math.max(hash.size, max);
    } else {
      hash.delete(str[a_pointer]);
      a_pointer++;
    }
  }
  return max;
}
```
{% endtab %}
{% endtabs %}

