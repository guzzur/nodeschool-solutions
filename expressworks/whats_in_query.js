const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const query = express.query

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(query);

app.get('/search', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})

app.listen(process.argv[2] || 3000)