const text = "Hello, World!";
console.log(text.slice(7, 12));  // "World"
console.log(text.slice(7));      // "World!"
console.log(text.slice(-6));     // "World!"
console.log(text.slice(-6, -1)); // "World"



const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));  // [2, 3, 4]
console.log(arr.slice());      // [1, 2, 3, 4, 5] — full shallow copy
console.log(arr.slice(-2));    // [4, 5]
console.log(arr.slice(2, -1)); // [3, 4]
