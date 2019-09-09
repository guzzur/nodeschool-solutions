const http = require('http')
const url = require('url')

const padZeros = (num) => {
  return num < 10 ? "0" + num : num;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'applicatiojn/json'})

  if(req.url.startsWith("/api/parseTime") && req.method === "GET") {
    let q = url.parse(req.url, true).query;
    let date = new Date(q.iso)
    let retVal = {
      "hour": padZeros(date.getHours()),
      "minute": padZeros(date.getMinutes()),
      "second": padZeros(date.getSeconds())
    }
    console.log(retVal)

    res.write(JSON.stringify(retVal))
    res.end()
  }
  if(req.url.startsWith("/api/unixtime") && req.method === "GET") {
    let unixtime = {"unixtime": (Date.now()).toString()}
    console.log(unixtime)

    res.write(JSON.stringify(unixtime))
    res.end()
  }
})

server.listen(process.argv[2]);