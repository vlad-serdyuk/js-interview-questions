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

The issue is that the anonymous function keeps a reference to i. At the time console.log gets called, the for loop has already finished, and the value of i has been set to 10.

In order to get the desired behavior, it is necessary to create a copy of the value of i.
