'use strict';

let log = console.log;

let promise = new Promise((res, rej) => {
  res('MANHATTAN')
});

let attachTitle = (firstargument) => {
  return 'DR. ' + firstargument;
}

promise.then(attachTitle).then(log);
