# Async loop

```
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);  
    }, 1000);
}
```

The above will not output the numbers 0 through 9, but will simply print the number 10 ten times.

```
9
9
9
9
9
9
9
9
9
9
```

The issue is that the anonymous function keeps a reference to `i`. At the time console.log gets called, the for loop has already finished, and the value of `i` has been set to 10.

In order to get the desired behavior, it is necessary to create a copy of the value of `i`.

In order to copy the value of the loop's index variable, it is best to use an anonymous wrapper.

```
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);  
        }, 1000);
    })(i);
}
```
or 
```
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}
```

The other popular way to achieve this is to add an additional argument to the setTimeout function, which passes these arguments to the callback.

```
for(var i = 0; i < 10; i++) {
    setTimeout(function(e) {
        console.log(e);  
    }, 1000, i);
}
```

There's yet another way to accomplish this by using `.bind`, which can bind a `this` context and arguments to function. It behaves identically to the code above

```
for(var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}
```

The ES6 and newer versions of Javascript can make it in the most elegant way:

```
for(let i = 0; i < 10; i++) {
    setTimeout(console.log(i), 1000);
}
```

ECMAScript 6's `let` is supposed to provide block scope without hoisting headache. `i` gets a new binding for every iteration of the loop.
Since when the `let` expression is used, every iteration creates a new lexical scope chained up to the previous scope. This has performance implications for using the let expression