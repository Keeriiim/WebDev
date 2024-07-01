- [Info](#info)
- [Error](#error)
- [Logic](#logic)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)
- [](#)


# Info
JavaScript is primarily used to create interactive effects within web browsers.  
JavaScript enables dynamic content, control multimedia, animate images, and pretty much everything else.  


# Syntax
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



# Logic
```bash

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


