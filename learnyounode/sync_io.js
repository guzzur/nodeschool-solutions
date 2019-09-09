const fs = require('fs')
const filePath = process.argv[2]


fs.readFile(filePath, {}, (err, buf) => {
    if(err) throw err
    let data = buf.toString()
    console.log(data.split('\n').length - 1)

})