'use strict';

let log = console.log;
let promise1 = new Promise((res, rej) => {
  res()
});

let promise2 = new Promise((res, rej) => {
  res()
});

let all = (prom1, prom2) => {
  let counter = 0;
  let promise = new Promise((res, rej) => {
    prom1.then(() => {
      counter++;
      prom2.then(() => {
        counter++;
        res(counter)
      })
    })
  })
  return promise;
}

all(promise1, promise2).then(log)