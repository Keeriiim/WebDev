- [Info](#info)
- [Error](#error)
- [](#)
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

# Syntax
If any error gets caught, the rest of the console will not be printed. 

