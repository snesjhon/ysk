# Standard Objects

Standard objects are Objects that are native \(or included\) in JavaScript. Things like `Math, Infinity, Boolean, String`

Although JS has the primitives types these are not able to have properties attached to them like object would. So these Standard object actually work behind the scene to help the developer extend the use of primitives. 



{% tabs %}
{% tab title="Plain Text" %}
This is valid JS. Although this shouldn't be possible because the primitive `boolean` shouldn't have any object properties.

```javascript
true.toString()
```

What JS is doing behind the scenes is:

```javascript
Boolean(true).toString()
```

This then provides the appropriate object properties to turn the boolean into a string.
{% endtab %}
{% endtabs %}

