const fs = require('fs')
const path = require('path')

module.exports = (pathName, ext, cb) => {
    // const pathName = args[2]
    // const ext = args[3]

    // console.log(pathName, ext)

    let retVal = []
    fs.readdir(pathName, (err, files) => {
        if (err) return cb(err)
        files.forEach(file => {
            if(path.extname(file) === ("." + ext)) {
                retVal.push(file)
            }
        });
        cb(err, retVal)
    })
}