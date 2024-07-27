- [Info](#info)
- [Error](#error)
- [Logic](#logic)
- [Strings](#strings)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [jQuery](#jquery)


# Info
JavaScript is primarily used to create interactive effects within web browsers.  
JavaScript enables dynamic content, control multimedia, animate images, and pretty much everything else.  


# Syntax
```bash
var name                           # Global var(iable) declaration accessable everywhere
let first                          # Local declaration
const forever                      # Unchangable value, Local declaration
```


```bash
document.getElementById(id1)                                         # Finds the reference id named id1

```

# First script
```bash
######### HTML #########
<!DOCTYPE html>
<html >
<head>
    <title>Second Page</title>
    <style>
        body {
            background-color: lightblue;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
      <h1 id="header">Hello, World!</h1>
      <button onclick="changeText()">Click Me!</button>
      <script src="script.js"></script>
    
</body>
</html>


######### script.js #########
document.getElementById("myH1").textContent = "Hello"            
````

# Error
If any error gets caught, the rest of the console will not be printed. 
![image](https://github.com/Keeriiim/WebDev/assets/117115289/9421359d-8fae-459b-accf-8e180d3cd326)  


```bash
console.warn("warning marked yellow");
console.error("Error marked red");


Glossary:

Failed to load resource Err_FILE_NOT_FOUND - Syntax error in <script src="somethin.js">
```



# Logic

## Loops
```bash
###### for ######
for(let i = 0; i <= 2; i++){
console.log(i);
}






###### while ######
let userName = "";

while(username ===""){
username = window.prompt("Enter ur name")
}

console.log($userName)


###### Do while ######
let userName;

do {
username = window.prompt("Enter ur name")
}while(username ==="")

console.log($userName)
```

## Operators
```bash

###### Operators ######
AND = &&
OR = ||
NOT = !

==  - comparing if values are equal
=== - comparing if values and datatype are equal
!=
!==


###### Ternary ######
let age = 15;
let message = age>= 18 ? "Your an adult" : "Your not an adult";


###### Switch ######
let day =1;
switch(day){

    case 1:
        console.log("It is Monday!");
        break;
    case 2;
        console.log("It is Tuesday!");
        break;
    default:
        console.log("Not a day!");
```


# Strings
```bash

let userName = "broC0de";
console.log(userName.charAt(0));                                # Prints char at index 0

console.log(userName.indexOf("o"));                             # Returns first idenx of "o"

console.log(userName.lenght);                                   # Returns lenght of string

Dicitionary:

.trim                                                           #Removes all whitespaces
.toLowerCase                                                    # lowe case
.toUpperCase                                                    # upper case
.startsWith()                                                   # Checks if the string starts with ()
.endssWith()                                                    # Checks if the string ends with ()
.replaceAll("-","")                                             # Replaces all - with nothing
.padStart(15,"0")                                               # Adds 0 to the beginning untill it reaches 15 chars
.padEnd(15,"0")                                                 # Adds 0 to the end untill it reaches 15 chars
```

## Slicing
```bash

let userName = "bro C0de";
let user = userName.slice(0,3);
let name = userName.slice(4,8);                   # Can also write (4) meaning from 4 to end
console.log(name);                                # Print previous


let fullName = "John Doe";
let first = fullName.slice(0,fullName.indexOf(" "));       # char 0 to first "space"
let last = fullName.slice(fullName.indexOf(" ")+1);        # char first "space" + 1 to end

```


# Arrays
```bash

let fruits=["apple","pear","banana"];

Dictionary:

##### Managing #####
.push("cocunut")                       # Adds cocunut to the beginning    
.pop()                                 # Removes last element
.unshift("mango")                      # Adds to the beginning
.shift()                               # Deletes the first
##### SORTING #####

.sort()                                # Sorts
.sort().reverse()                      # Sorts in reverse


#### Looping ####
for(let fruit of fruits){              # Prints all fruits
console.log(fruit);
}
```

## Spread operator
```bash
                    ...  allows an iterable such as an array or string to be exapnded into separate elements

let name = "John Doe";
let letters = [...name];

console.log(letters);
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/873e0681-9d63-4ea5-b9d1-9620747431fb)
  

```bash
                    ... allows an iterable such as an array or string to be exapnded into separate elements

let name = "John Doe";
let letters = [...name].join("-");

console.log(letters);
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/14838aa6-d956-4cee-ad04-7b98095f0478)  

```bash
                    ... allows an iterable such as an array or string to be exapnded into separate elements

let name = ["John Doe", "Sirius Black"];
let last = ["Doe John ", "Black Sirius "];
let combined = [...name,...last,last];

console.log(combined);
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/c5025974-33a1-4b51-a221-e02a61b95f58)  












# Functions
```bash
funcion example(abc, efg){                        # Defines a method with parameters
return abc + efg;
}


example(2,4)                                      # Order is important of the numbers!
```



# jQuery
Eliminates the need for different browse support for you javascript. It is a library, not a framework.

## Tip
h1.customClass#customID + tab enter -> <h1 class="customClass" id="customId"></h1>

## Installation
[Download](https://jquery.com/download/)  

### CDN
Content Delivery Network -> fetches from the closest server to your location. Enables caching -> faster download.

## Syntax

```bash
$(SELECTOR)  .EVENT  (CALL_BACK_FUNC(){} );                      

###### Dictionary ######
.html(<p>Hello</p>);                            # Add html code
.text("new");                                   # Change current output to new
.css("color","blue");                           # Change css

 ### input ###
.val();                                         # Empty is to GET the value, add something to change

.append();                                      # Adds something after  (inside an element, h,section,p, etc)
.prepend();                                     # Adds something before (inside an element, h,section,p, etc)
.after();                                       # Adds something before (outside an element, input)
.before():                                      # Adds something before (outside an element, input)


 ### Deleting ###
.remove();                                      # Removes
```

