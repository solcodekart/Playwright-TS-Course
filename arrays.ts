// method map
let positiveNumbers: number[] = [1, 2, 3, 4, 5];

// method filter
let filterArr: number[] = positiveNumbers.filter((num: number) => num > 3)
console.log(filterArr); // Output: [4, 5]

// method sort
let sortNumbers: number[] = [5, 3, 8, 1, 2];
sortNumbers.sort();
console.log(sortNumbers); // Output: [1, 2, 3, 5, 8]

// method push
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);

// method pop
let vegetables: string[] = ["Carrot", "Broccoli", "Spinach"];
let lastVegetable = vegetables.pop();
console.log(lastVegetable);

// method shift
let colors: string[] = ["Red", "Green", "Blue"];
let shiftedColor = colors.shift();
console.log(shiftedColor);

// method unshift
let animals: string[] = ["Dog", "Cat"];
animals.unshift("Elephant");
console.log(animals);