// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMessage: string = "Hello, TypeScript!";
// welcomeMessage = "Hello, JavaScript!"; // Error: Cannot assign to 'welcomeMessage' because it is a constant.

// string
let message: string = "Hello, TypeScript!";

let messageLength: number = message.length;
console.log(`Message: ${message}, Length: ${messageLength}`);

// string inrerpolation
let welcomeMessageDetails: string = `Welcome to TypeScript! The message is: ${message}`;
console.log(welcomeMessageDetails);

// number and number operations
let num1: number = 10;
let num2: number = 20;

let add: number = num1 + num2;
let subtract: number = num2 - num1;

// union types
let id: string | number;

id = "10";
id = 10;

let result: number | boolean | null;

result = 100;
result = true;
