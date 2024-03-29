const path = require('path')
const express = require('express')
const app = express()

// app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, process.argv[3] || 'templates'))
app.set('view engine', 'pug')

app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2] || 3000)
