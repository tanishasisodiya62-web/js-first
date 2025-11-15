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