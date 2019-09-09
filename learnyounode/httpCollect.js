const http = require("http")
const bl = require("bl")
const url = process.argv[2]

let count = 0;
let str = '';

http.get(url, (res) => {
  res.setEncoding('utf8')
  res.pipe(bl((err, data) => {
    str = data.toString()
    // console.log(str.length)
    console.log(str)
  }))
})
