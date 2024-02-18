//primitive datatypes
// 7 types: String, number, boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);


// non primitive or reference types
// Arrays, Objects, functions

const heros =[ "batman", "superman", " doga"]

let myObje = {
    name: "suryansh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}





//************************************************

// stack(primitive), heap (non-primitive)


let myName = "Suryansh"

let anothername = myName
anothername = "Rastogi"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: " abc@ybl"
}

let userTwo = userOne

userTwo.email = "sus@google.com"

console.log(userOne.email);
console.log(userTwo.email);