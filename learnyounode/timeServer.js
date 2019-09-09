const PORT = process.argv[2]

const net = require('net')  
          
var server = net.createServer(function(socket) {
  const date = new Date()
  // "YYYY-MM-DD hh:mm"
  let month = date.getMonth() + 1
  let day = date.getDate()
  month = month < 10 ? "0" + month : month
  day = day < 10 ? "0" + day : day

  const dateStr = `${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}`
  socket.write(`${dateStr}\r\n`);
  socket.end()
	// socket.pipe(socket);
});

server.listen(PORT, '127.0.0.1');