'use strict';

let log = console.log;

let promise = new Promise((res, rej) => {
  res(1)
});

let alwaysThrows = () => { throw new Error('OH NOES').message }

let iterate = (arg) => {
  log(arg);
  return arg + 1;
}

promise
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(log);
