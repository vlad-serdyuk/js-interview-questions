# Eval

The eval function will execute a string of JavaScript code.


## Why not to use `eval`

### Context issue

```
var number = 1;
function test() {
    var number = 2;
    eval('console.log(this)');
    eval('console.log(number)');
    return number;
}
test(); // 3
number; // 1
```

What do you think would be in a console ?

`eval('console.log(this)');` returned a global object like we would invoke it like this: `function() { console.log(this); }`

And now, as we saw before `eval('console.log(number)');` should return `1` because `this` in `eval` is the global scope...

and I got `2` the variable from the local scope. Surprise!

I execute `eval('console.log(this.number)');` in the body of `test` function and it would return `1` the variable from the global scope. Here it work as I expected.


### Security issue

`eval` also is a security problem, because it executes any code given to it. It should never be used with strings of unknown or untrusted origins.

## Conclution

The use of `eval` should be avoided. 99.9% of its "uses" can be achieved without it.