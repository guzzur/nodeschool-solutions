const async = require("async")
const http = require("http")
const bl = require("bl")

const urls = [process.argv[2], process.argv[3], process.argv[4]]

urls.forEach(url => {
  http.get(url, async (res) => {
    res.setEncoding('utf8')
    await res.pipe(await bl((err, data) => {
      str = data.toString()
      // console.log(str.length)
      console.log(str)
    }))
  })
});
