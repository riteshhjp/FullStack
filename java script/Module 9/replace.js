let str = "apple, apple, apple, apple"

console.log(str.replace("apple", "orange"));

// This will replace the first apple

console.log(str.replaceAll("apple", "orange")) 

// This will replace all the apple

console.log(str.replace(/apple/g, "orange"));

// global regular expression