function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    console.log("goodUsers", goodUsers)
    console.log("submittedUsers", submittedUsers)
    // return submittedUsers.every((user) => user.id > 0)
    // submittedUsers.every((user) => goodUsers.some(goodUser => user.id === goodUser.id))
    return submittedUsers.every((user) => goodUsers.some(goodUser => user.id === goodUser.id))
  };
}

let allUsersValid = checkUsersValid([
  {id: 1},
  {id: 2},
  {id: 4},
  {id: 5},
])

console.log(allUsersValid([{id: 1}]))
console.log(allUsersValid([{id: 1}, {id: 2}]))
console.log(allUsersValid([{id: 6}, {id: 2}]))

module.exports = checkUsersValid