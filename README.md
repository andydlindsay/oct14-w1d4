# W1D4 - Callbacks!

### To Do
- [x] Functions as values
- [x] Nested scope and "scope chain"
- [x] Function calling vs passing
- [x] Callback functions and Higher Order functions
- [x] Intro to anonymous functions
- [x] Arrow Functions
- [x] Implementing our own forEach and/or our own filter

### What is a callback?
- A callback is a function that gets passed to another function to be executed by that function
- Callback functions are used all over the place in JavaScript
- They encapsulate reusable code that can be passed around like any other JS variable

### Functions are Values
- Just like everything else in JavaScript, functions are values
- As a result, they can be stored in variables just like any other value

```js
const myFunction = function() {
  // do something
};
```

- They can also be passed around just like any other variable

```js
const myFunction = function() {
  // do something
}
const myVar = myFunction;
myVar(); // equivalent to calling myFunction()
```

- And they can be passed to other functions as arguments

```js
const myFunction = function() {
  // do something
}
const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
}
myHigherOrderFunction(myFunction);
```

- We call the function that we pass as an argument a **callback**
- We call the function that accepts a function as an argument a **higher order function**

### Anonymous Functions
- We can pass callback functions _inline_ to a higher order function rather than storing the callback in a variable first

```js
const myHigherOrderFunction = function(callback) {
  callback();
}
myHigherOrderFunction(function() {
  // do something
});
```

- Anonymous functions are simply functions that do not have a name
- [Naming things is hard](https://martinfowler.com/bliki/TwoHardThings.html)

### Arrow Functions
- Arrow functions give us a syntactic alternative to using the `function` keyword

```js
// function keyword
const myFunc = function() {
  // do something
};

// arrow function
const myArrowFunc = () => {
  // do something
};
```

- There are some _gotchas_ around using the `this` keyword inside an arrow function, but if you aren't using `this`, arrow functions can be used interchangeably with "regular" functions
- Arrow functions are often used as callbacks because they are shorter/cleaner to type

```js
arr.forEach(function(element) {
  // do something
});

// vs
arr.forEach((element) => {
  // do something
});
```

### Useful Links
* [Wikipedia: Callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Python Tutor](http://pythontutor.com/javascript.html#code=const%20marks%20%3D%20%5B'Zuckerberg',%20'Wahlburg',%20'Ruffalo'%5D%3B%0A%0Aconst%20filter%20%3D%20function%28arr,%20callback%29%20%7B%0A%20%20const%20results%20%3D%20%5B%5D%3B%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20if%20%28callback%28arr%5Bi%5D%29%29%20%7B%0A%20%20%20%20%20%20results.push%28arr%5Bi%5D%29%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%3B%0A%20%20return%20results%3B%0A%7D%3B%0A%0Aconst%20test%20%3D%20%28name%29%20%3D%3E%20%7B%0A%20%20return%20name%20!%3D%3D%20'Zuckerberg'%3B%0A%7D%3B%0A%0Aconst%20newMarks%20%3D%20filter%28marks,%20test%29%3B%0Aconsole.log%28newMarks%29%3B&curInstr=26&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)
