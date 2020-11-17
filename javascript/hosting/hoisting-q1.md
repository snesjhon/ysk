# Hoisting Q1

{% tabs %}
{% tab title="Question" %}
```javascript
a();

function a(){
    console.log('hi');
}

function a(){
    console.log('bye');
}
```

## Thoughts

* My initial though would be that the function gets reassigned? 
* If the hoisting moves up, during the first pass?

```text
a = undefined

function a = () {
} ?

function a = () {
} ?
```

* My thought process is that because the function is hoisted up and then reassigned, then the function scope is whatever is the latest function?
{% endtab %}

{% tab title="Answer" %}
Functions are hoisted with their scope, they are also replaced \(overwritten\) if there's another declaration

```javascript
a();

function a(){
    console.log('hi');
}

function a(){
    console.log('bye');
}
```

Can be translated to during the first pass:

```javascript
a() // first function 
a() // second function

 
function a(){}
function a(){} 

///

// This means that the second declaration of the func
// would overwrite the first. 

a() // bye

```
{% endtab %}
{% endtabs %}

