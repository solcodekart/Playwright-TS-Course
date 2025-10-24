// Function
function displayPersonInfo(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}

// console.log(displayPersonInfo("Alice", 30));

const personalData: string = displayPersonInfo("Peter", 25);

// console.log(personalData); // Returns: undefined

function divideNumber(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}

// arrow function
const sumNums = (a: number, b: number): number => a + b;
//console.log(sumNums(5, 10));

function greeting(name: string, age?: number) {
    if (age) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    }
    console.log(`Hello, ${name}.`);
}

greeting("John");
greeting("Jane", 28);

//default parameter

function substractNums(a: number = 5, b: number = 2) {
    console.log(a - b);
}

substractNums(50);
substractNums(50, 30);

// function with parameter of union type
function printId(id: number | string) {
    console.log(`Your ID is: ${id} and is a type of ${typeof id}`);
}

printId(101);
printId("#10");