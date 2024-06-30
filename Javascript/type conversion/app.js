// type conversion = changing the data type of a value to another data type (e.g. string to number, number to string, etc.)


let age  = window.prompt("What is your age?");

// age = Number(age); // convert the value of age to number (if it is not a number, it will return NaN - Not a Number)
age+=1;         // if not converted to number, it will concatenate the value of age and 1

console.log(age); 


let x;
let y;
let z;

console.log("Empty")

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof (x));
console.log(y, typeof (y));
console.log(z, typeof (z));

console.log("char/string")
let a = "a";
let b = "b";
let c = "c";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof (a));
console.log(b, typeof (b));
console.log(c, typeof (c));

console.log("number")
let d = "55";
let e = "55";
let f = "55";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log(d, typeof (d));
console.log(e, typeof (e));
console.log(f, typeof (f));


// Don't repeat the same variable name over and over again, it will cause error
