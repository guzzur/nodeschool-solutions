'use strict';
let log = console.log;

var qhttp = require("q-io/http")
qhttp.read('http://localhost:1337') // don't ask me how I know it
  .then(response => JSON.parse(response))
  .then(log)
