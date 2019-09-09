const fs = require('fs')
const path = require('path')
const pathName = process.argv[2]
const ext = process.argv[3]

fs.readdir(pathName, (err, files) => {
    if (err) throw err
    files.forEach(file => {
        // console.log(path.extname(file))
        if(path.extname(file) === ("." + ext)) {
            console.log(file)
        }
        // console.log(file)
    })
})