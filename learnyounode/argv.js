let sum = 0;

// console.log(process.argv)
for(let i = 2; i < process.argv.length; i++) {
    sum += parseInt(process.argv[i])
    // console.log(i)
}

console.log(sum)