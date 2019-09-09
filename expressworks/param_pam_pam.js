const express = require('express')
const path = require('path')
const crypto = require('crypto')

const app = express()

// app.use()

// app.param('id', function (req, res, next, id) {
//   req.id = id
//   next()
// })

// app.get('/message/:id', function (req, res, next) {
//   console.log(req.id)
//   next()
// })

app.put('/message/:id', (req, res) => {
  let id = req.params.id;
  res.end(
    crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  )
})

app.listen(process.argv[2] || 3000)