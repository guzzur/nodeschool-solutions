const express = require('express')
const stylus = require('stylus');
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, process.argv[3] || 'public')))
app.use(stylus.middleware(path.join(__dirname, process.argv[3] || 'public')))

app.listen(process.argv[2] || 3000)
