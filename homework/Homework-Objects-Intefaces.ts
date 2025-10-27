// Task 1
interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

//Task 2
interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

// Task 3
const person: Person  = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 30,
    email: "test@gmail.com",
    phoneNumber: 1234567890
}

// Task 4
const person2: PersonInfo = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 30,
    email: "test@gmail.com",
    phoneNumber: 1234567890,
    country: "Bulgaria",
    greeting: function() {
        return `Hello, my name is ${this.name} ${this.lastName}`;
    }
}