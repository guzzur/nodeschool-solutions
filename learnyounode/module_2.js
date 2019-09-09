const moduled = require('./module_1');
moduled(process.argv[2], process.argv[3], (err, data) => {
    if (data)
    data.forEach(element => {
        console.log(element)
    });
})