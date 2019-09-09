const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
  const filename = path.join(__dirname, process.argv[3])
  console.log(filename)
  fs.readFile(filename, (data) => {
    res.json(data)
  })
})

app.listen(process.argv[2] || 3000)