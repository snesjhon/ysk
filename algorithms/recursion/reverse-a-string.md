# Reverse a String

Using recursion reverse a string

{% tabs %}
{% tab title="Example" %}
```javascript
reverse('jhon') // nohj
```
{% endtab %}

{% tab title="Solution" %}
```javascript
// I figured this one by myself! Although I had to look up how to omit the last
// character in a string. 

function reverse(str){
    if(str.length <= 1) return str;
    return str.charAt(str.length - 1) + reverse(str.slice(0, -1));
}

/**
 Initially I though that it'd be having to use a helper method, but using a
 familiar version of recursion I was able to notice that you can 
 reverse using a `charAt` and `slice` to return the available characters
*/
```
{% endtab %}
{% endtabs %}

