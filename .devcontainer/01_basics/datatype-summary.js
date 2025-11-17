// primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol BigInt 

const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32567424454512n



// Reference (Non primitive)

// Array, object, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "tanisha",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// **********************************************************

// Stack (primitive), Heap(non-primitive) 

let myYoutubename = "tanisha@14"

let anothername = myYoutubename
anothername = "chai or code"

console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tanish@14"


console.log(userOne.email);
console.log(userTwo.email);