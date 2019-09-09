function getDependencies(tree, arr) {
  if(!arr) arr = []
  Object.keys(tree).forEach(element => {
    // console.log(tree[element], typeof tree[element])
    if(typeof tree[element] === 'object') {
      // console.log(tree[element], typeof tree[element])

      if(tree[element].version)
        arr.push(element + "@" + tree[element].version)

      getDependencies(tree[element], arr)
    }
  });
  return arr.sort();
}

module.exports = getDependencies

// var loremIpsum = {
//   "name": "lorem-ipsum",
//   "version": "0.1.1",
//   "dependencies": {
//     "optimist": {
//       "version": "0.3.7",
//       "dependencies": {
//         "wordwrap": {
//           "version": "0.0.2"
//         }
//       }
//     },
//     "inflection": {
//       "version": "1.2.6"
//     }
//   }
// }

// let arr = getDependencies(loremIpsum)
// console.log(arr)
