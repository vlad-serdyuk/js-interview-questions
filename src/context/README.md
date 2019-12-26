# Context


## How `this` works 

In JS value of `this` depends on how the function is called. If it's called by an object reference, then the value of `this` is set to that object, otherwise the value of this is set to the global context.

## Global context

```
this
```

When using `this` in global scope, it will simply refer to the global object.
`window` in a browser
`global` in Node.js

## Calling a function

```
foo();
```

Here, `this` will again refer to the global object.

## Calling a method

```
obj.foo(); 
```

In this example, `this` will refer to `obj`.

## Calling a constructor

```
new Foo();
```

A function call that is preceded by the `new` keyword acts as a constructor. Inside the function, `this` will refer to a newly created Object.


## Common pitfalls

```
Foo.method = function() {
    function test() {
        // this is set to the global object
    }
    test();
}
```

A common misconception is that `this` inside of test refers to Foo; while in fact, it does not.


```
Foo.doAfterTimeout = function() {
    console.log(this);
}
Foo.someMethod = function() {
    setTimeout(this.doAfterTimeout, 100); // output is global object
    test();
}
```

The method `setTimeout` is a little special: it sets `this = global object` for the function call. So for `console.log(this)` it tries to get `window` in a browser. In other similar cases, usually `this` just becomes undefined.

It's posiible to invoke `setTimeout` via `window.setTimeout` it would be the same thing.

