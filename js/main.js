import doSomething from "./doSomething.js";
import { squareValue, halfOf, yourName } from "./lib.js";

console.log(squareValue(11));
console.log(halfOf(10));
doSomething();
console.log(yourName);


//let -It will allow you to change the value after initialization
//const -It will not allow you to change the value after initialization
let myName="Lee";
console.log(myName);
myName = "kidd";
console.log(myName);