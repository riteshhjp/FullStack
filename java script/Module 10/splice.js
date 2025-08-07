let fruit = ['Mango', 'Grapes', 'Guava', 'DragonFruit','Apple'];

fruit.splice(2, 1);
// first is for choosing index and second one is
//  for deleting elements

console.log(fruit);


fruit.splice(1,0,'Litchi', 'Apricot');
// Last argument to add elements

console.log(fruit)
