let args = process.argv.slice(2)
let arg;

let ans = '';

args.forEach(arg => {
  ans += arg[0]
});

let full = `[${args.join(',')}] becomes "${ans}"`;

console.log(full)
