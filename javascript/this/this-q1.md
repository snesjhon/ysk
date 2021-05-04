# This - Q1

{% tabs %}
{% tab title="Example" %}
```javascript
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW());
```
{% endtab %}

{% tab title="Solution" %}
## Using .bind

```javascript
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};

const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW());
```

Using `bind` works because we're directly `binding` the object into the function. Thus it directly references the `this` in what object it was passed

## Using Arrow Functions

```javascript
const character = {
  name: "Simon",
  getCharacter() {
    return () => {
      return this.name;
    };
  },
};

const giveMeTheCharacterNOW = character.getCharacter()

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW());
```

Using an arrow function we can lexically scope the function to ONLY reference the object in which it was called. You'll have to call the function twice though, but that way we're guaranteed to always have the expected `this`
{% endtab %}
{% endtabs %}

