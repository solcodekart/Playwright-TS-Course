// Task 1
let fruitsArray: string[] = ["Apple", "Banana", "Cherry"];
fruitsArray.push("Date");
console.log(fruitsArray);

// Task 2
let numbers: number[] = [10, 20, 30, 40, 50];
numbers.shift();
console.log(numbers);

// Task 3
let newArray: number[] = [1, 2, 3, 4, 5];
let dividedNumbers = newArray.map((num) => num / 2);
console.log(dividedNumbers);

// Task 4
let mixedNumbers: number[] = [3, 7, 1, 9, 12, 4];
let filteredNumbers = mixedNumbers.filter((num) => num > 5);
console.log(filteredNumbers);

// Task 5
let unsortedNUmbers: number[] = [9, 3, 7, 2, 8, 5];
unsortedNUmbers.sort((a, b) => a - b);
console.log(unsortedNUmbers);

// Task 6
let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let extractedFruits = fruits.slice(0,3);
console.log(extractedFruits);

// Task 7
let vehicles: string[] = ["car", "bike", "bus", "train", "boat"];
let removedVehicle = vehicles.splice(1, 2);
console.log(vehicles);

// Task 8
function findLargest(a: number, b: number, c: number) {
    if (a > b && a > c) {
        return a;
    } else if(b > a && b > c) { 
        return b;
    }
    return c;
}
console.log(findLargest(1, 6, 12));

// Task 9
function convertToCentimeters(inches: number = 10) {
    let inchToCm = inches * 2.54;
    return inchToCm;
}
console.log(convertToCentimeters()+'cm');
console.log(convertToCentimeters(15)+'cm');

// Task 10
function calculateArea(width: number, height?: number) {
    if (height) {
        return width * height;
    }
    return width * width;
}
console.log(calculateArea(5,8));