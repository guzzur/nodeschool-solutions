var qhttp = require("q-io/http")

let log = console.log;

qhttp.read('http://localhost:7000')
  .then(response => response.toString())
  .then(response => {
    qhttp.read(`http://localhost:7001/${response}`)
      .then(JSON.parse)
      .then(log)
})