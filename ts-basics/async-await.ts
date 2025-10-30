// basic async operation

// console.log("Start");

// setTimeout(() => {
//     console.log("Async Operation Complete");
// }, 2000);

// console.log("End");

// multiple async function
// function setTimeouts() {
//     setTimeout(() => {
//         console.log("3 seconds delay");
//     }, 3000);

//     setTimeout(() => {
//         console.log("1 second delay");
//     }, 1000);

//     setTimeout(() => {
//         console.log("2 second delay");
//     }, 2000);
// }

// setTimeouts();

// async await example

// function delay(ms: number) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function demo() {
//     await delay(2000);
//     console.log("2 seconds delay");

//     await delay(3000);
//     console.log("3 seconds delay");
// }
// demo();

// get product data
interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

async function getData(): Promise<void> {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data: Product = await response.json();
    console.log(data);
  } catch (error: unknown) {
    console.error(error);
  }
}

getData();

// console.log(`Product Title: ${data.title}`);
// console.log(`Product Price: ${data.price}`);
// console.log(`Product Category: ${data.category}`);

// try catch finally example with async await
// try {
//     const jsonData = JSON.parse('{"name": "John", "age": 30}');
//     console.log("Parsed JSON Data:", jsonData);
// } catch (err) {
//     console.error("An error occurred:", err);
// } finally {
//     console.log("Execution completed.");
// }

// try catch finally

// function dividedNumbers(num1: number, num2: number) {
//     try {
//         if (num2 === 0) {
//             throw new Error("Division by zero is not allowed.");
//         } else {
//         const result: number =  num1 / num2;
//         console.log(`Result: ${result}`); }
//     } catch (err: unknown) {
//         console.error("An error occurred:", err);
//     } finally {
//         console.log("Execution completed.");
//     }
// }

// dividedNumbers(10, 0);
