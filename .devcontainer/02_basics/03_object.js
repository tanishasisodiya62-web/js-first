// singleton
//Object.create

// object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "tanisha",
   "full name": "tanisha sisodiya",
    mySym: "mykey1",
    age: 18,
    location: "ujjain",
    email: "tanisha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
 
JsUser.email = "tanisha@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "tanisha@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());