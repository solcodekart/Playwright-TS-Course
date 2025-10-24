// interface declaration
interface Car {
    make: string;
    model: string;
    color: string;
    horsePower: number;
}

// Object declaration
const car: Car = {
    make: "BMW",
    model: "X5",
    color: "Black",
    horsePower: 400
}

console.log(car.horsePower);

// interface Person Object
interface Person {
    name: string;
    lastName: string;
    age: number;
    address: string;
    hobbies: string[];
    greeting: () => string;
}

// object with method
const person: Person = {
    name: "Ivan",
    lastName: "Ivan",
    age: 28,
    address: "Sofia, Bulgaria",
    hobbies: ["Reading", "Traveling", "Gaming"],
    greeting: function() {
        return `Hello, my name is Ivan`;
    }
}
console.log(person);

//properties access
person.name
person.greeting()

// propoties redeclaration
person.age = 29;
console.log(person.age);

// explicit object type
const mouse: {name: string, favFood: string, age: number } = {
    name: "Jerry",
    favFood: "Cheese",
    age: 2
}


// interfaces optional parameters, read only and string literal types
interface User {
    name: string;
    readonly email: string;
    // 
    role: "admin" | "user" | "guest";
    // optional property
    job?: string;
    password?: string | number;
}

const user: User = {
    name: "Pesho",
    email: "test@gmail.com",
    role: "admin",
    job: "developer"
}

interface UserPermission extends User {
    persmissions: string;
}

const secondUser: UserPermission = {
    name: "Pesho",
    email: "test@gmail.com",
    role: "admin",
    job: "developer",
    persmissions: "read-write"
}