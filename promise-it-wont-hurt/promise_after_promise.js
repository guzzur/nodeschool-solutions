'use strict';

let log = console.log;

let promise = new Promise((res, rej) => {
  res('VAL')
});

promise.then(val => first(val).then(secret => second(secret).then(log)))
