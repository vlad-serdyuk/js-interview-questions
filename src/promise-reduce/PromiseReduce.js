function asyncFunc(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(e), e * 1000);
  });
}

const arr = [1, 2, 3];

function findAsyncSum(arr) {
  return arr.reduce((promise, item) => {
    return promise
      .then(value => {
        return asyncFunc(item).then(result => {
          value += result;
          return value;
        });
      })
      .catch(console.error);
  }, Promise.resolve(0));
}

findAsyncSum(arr)
  .then((final) => console.log(`The final result is ${final}`));