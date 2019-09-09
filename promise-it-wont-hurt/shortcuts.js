'use strict';

let log = console.log;

// let promise = new Promise((res, rej) => {
//   rej('I AM REJECTED')
// });

let promise = Promise.reject(new Error('I AM REJECTED'))

promise.then(log).catch(log);
