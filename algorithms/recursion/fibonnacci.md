# Fibonnacci

Write a recursive function called **fib** which accepts a number and returns the \_n\_th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

{% tabs %}
{% tab title="Examples" %}
```javascript
fib(4) // 3
```
{% endtab %}

{% tab title="Solution \#1" %}
```javascript
// This was my solution, and it works, but it's not elegant. But I solved it
// myself thinking through it and working through the knowledge
function fib(num) {
  let total = 1;
  let counter = num;
  let prev = 0; 
  function helper(current, count) {
    if(count === 1) return current;
    total = prev + current; 
    prev = current; 
    return helper(total, count - 1);
  }
  helper(total, counter);
  return total;
}
/** 
For this method, I thought that it'd be the best idea to add an accumulator
Then I'd keep a "counter" that would be our baseline.
Then have a `prev` which will have a consistent carry for the current value
- Helper method
-> Using this I'd be able to have a base to return our "current" 
-> Add to the total, with prev and current
-> Switch the prev to be what's current
-> And finally return the total and minus the count.
*/
```
{% endtab %}

{% tab title="Solution \#2" %}
```javascript
// This is obviously a simpler solution that didn't occur to me
// Once I was able to see the logic behind this it was a lot clearer 
// in the way that I solved it previously and how I'm solving it now.

function fib(num){
    // If we have less than 2, then it's assumed its 1 + 1
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

/**
fib(4)

fib(4 - 1)  2                +               fib(4 - 2)
  fib(3 - 1)   +    fib(3 - 2) = 2
   1                    1 

*/
```
{% endtab %}
{% endtabs %}

