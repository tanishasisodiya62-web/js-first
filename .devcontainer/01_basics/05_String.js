const name = "tanisha"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`tanisha-ts`)

//console.log(gameName[0]);
//console.log(gameName.__Proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "   tanisha   "
console.log(newStringOne.trim());


const url = "https://tanisha.com/tanisha%14sisodiya"

console.log(url.replace('%14', '_'))

console.log(url.includes('sundari'))

console.log(gameName.split('_'));