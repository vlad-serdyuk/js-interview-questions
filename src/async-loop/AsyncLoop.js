for(var i = 0; i < 10; i++) {
  setTimeout(function() {
      console.log(i);  
  }, 1000);
}

// solutions:
for(let i = 0; i < 10; i++) {
  setTimeout(function() {
      console.log(i);  
  }, 1000);
}

for(var i = 0; i < 10; i++) {
  (function(e) {
      setTimeout(function() {
          console.log(e);  
      }, 1000);
  })(i);
}

for(var i = 0; i < 10; i++) {
  setTimeout((function(e) {
      return function() {
          console.log(e);
      }
  })(i), 1000)
}

for(var i = 0; i < 10; i++) {
  setTimeout(function(e) {
      console.log(e);  
  }, 1000, i);
}

for(var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 1000);
}