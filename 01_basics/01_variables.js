const accountId = 12322
let accountEmail ="rastogi@google.com"
var accountPassword = "09876"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accountEmail ="rasto@gmail.com"
accountPassword = "09656"
accountCity = "goa"

/*
prefer not to use var 
because of the issue in block and functional scope

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])