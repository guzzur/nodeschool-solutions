'use strict';

let log = console.log;

let promise = new Promise((res, rej) => {
  try {
    // parsePromised()
    res()
  } catch (err) {
    rej(err)
  }
});

let parsePromised = () => {
  try {
    JSON.parse(process.argv[2])
  } catch(err) {
    throw err.message
  }
}

promise
.then(parsePromised)
.then(null, console.log);