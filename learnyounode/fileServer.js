const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const pathName = process.argv[3];
  res.writeHead(200, { 'content-type': 'text/plain' })
  const rs = fs.createReadStream(pathName, "utf-8")
  rs.pipe(res)
})
server.listen(process.argv[2])