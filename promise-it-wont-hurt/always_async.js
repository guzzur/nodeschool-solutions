'use strict';

let log = console.log;

let promise = new Promise((res, rej) => {
  res('PROMISE VALUE');
})

promise.then(log);
log('MAIN PROGRAM')