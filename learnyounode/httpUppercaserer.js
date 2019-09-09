const http = require('http')

function upperIt(str) {
  return str.toUpperCase();
}

http.createServer((req, res) => {
  if(req.method === "POST") {

    let body = ''
    req.on('data', data => {
      body += data;
    })
    req.on('end', () => {
      console.log(body)
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(upperIt(body))
    })
  }
}).listen(process.argv[2])