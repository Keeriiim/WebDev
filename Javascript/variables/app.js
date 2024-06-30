

 // Variable = container that stores data
 // let = keyword to declare a variable, the variable can be number, string, boolean, object, function, array
 // js is not indent sensitive

 let x;
        	        x = 5;

                    console.log(x); // 5



// js is sensitive to  ` '' and "", the first will print placeholders
console.log(`My age is ${x} and my sisters age is ${x}`); // My age is 5
console.log(`My age is $${x}`); // Will print $ sign aswell

console.log('My age is ${x}'); // My age is ${x}
console.log("My age is ${x}"); // My age is ${x}

console.log('My age is a ' + typeof(x)); // Prints variable type








// const = keyword to declare a constant variable, meaning it cannot be changed

const y = 10;
const z = 10;
y++;

console.log(y); // Error, y is a constant variable

console.log(z); // 10
