const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
  console.log(req.body)
  res.end(
    req.body.str.split('').reverse().join('')
  )
})

app.listen(process.argv[2] || 3000)
