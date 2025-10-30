// forEach method
const nums: number[] = [1, 2, 3, 4, 5];

nums.forEach((n: number, index: number) => {
    console.log(`Index ${index}: ${n}`);
})

// forEach sum numbers
let sum: number = 0;
nums.forEach((n: number) => {
    sum += n;
});
console.log(`Sum: ${sum}`);

// forEach example nr2
interface User { id: number; name: string; isActive: boolean };

const users: User[] = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true },
];

const activeUserNames: string[] = [];

users.forEach((user: User) => {
    if (user.isActive) {
        activeUserNames.push(user.name);
    }
});

console.log("Active Users:", activeUserNames);