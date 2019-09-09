var fs = require('fs')  

let filePath = process.argv[2];

// fs.readFile(filePath, "utf8", (err, data) => {
//     console.log(data.split('\n').length + 1)
// })

let buf = fs.readFileSync(filePath)
let data = buf.toString()

// console.log(buf)
// console.log(data)
// console.log(data.split('\n'))
console.log(data.split('\n').length - 1)