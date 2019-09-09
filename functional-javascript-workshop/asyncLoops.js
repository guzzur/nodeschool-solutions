function loadUsers(userIds, load, done) {
  var users = [];
  var count = 0;
  userIds.forEach((id, idx) => {
  	load(id, function(data) {
  		users[idx] = data;
  		++count;
  		if(count === userIds.length) return done(users);
  	})
  }) 
}

module.exports = loadUsers

