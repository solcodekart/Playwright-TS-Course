// // class Person {

// //     constructor(public name: string, public age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }

// //     introduction(): void {
// //         console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
// //     }
// // }

// // const person1 = new Person("Alice", 30);

// // person1.introduction(); //Hi, I am Alice and I am 30 years old.

// // Read only person data class
// class ReadOnlyPerson {
//   readonly name: string;
//   readonly age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   intro(): void {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// const person2 = new ReadOnlyPerson("Bob", 25);

// console.log(person2.name); // Bob
// console.log(person2.age); // 25

// // Read only person data class
// class PrivatePerson {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   private displatSecredMessage(): string {
//     return `This is a secret message for ${this.name}`;
//   }

//   intro(): void {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//     console.log(this.displatSecredMessage());
//   }
// }

// const person3 = new PrivatePerson("Bob", 25);
// person3.intro(); // Error: Property 'displatSecredMessage' is private and only accessible within class 'PrivatePerson'.

// Class inheritance

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  intro(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class UserDetails extends User {
  constructor(name: string) {
    super(name);
  }

  showDetails(): void {
    console.log(`User Details: Name - ${this.name}`);
  }
}

const user = new UserDetails("Charlie");
console.log(user.name); // Charlie
user.intro(); // Hello, my name is Charlie

export {};

// protected modifier

class ProtectedPerson {
  constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }

  getProtectedInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Employee extends ProtectedPerson {
    private grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    studentIntro(): void {
        console.log(this.getProtectedInfo());
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}

const protectedPerson = new Employee("David", 20, 3);

protectedPerson.studentIntro();