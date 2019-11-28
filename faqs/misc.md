# Misc Questions

### ++someVariable vs. someVariable++ in JavaScript

Same as in other languages:

- `++x` (pre-increment) means "increment the variable; the value of the expression is the final value"
- `x++` (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"

- **Source**: https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript

## Javascript, Pass by Value or Pass by Reference?

Javascript uses a pass by value strategy for primitives but uses a call by sharing for objects. Call by sharing is largely similar to pass by reference in that the function is able to modify the same mutable object but unlike pass by reference isn’t able to assign directly over it.

- **Source**: http://jasonjl.me/blog/2014/10/15/javascript/
