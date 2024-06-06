
- [Intro](#intro)
- [Variables](#variables)
- [Artihmetic operators](#artihmetic-operators)
- [Get & Post](#get-&-post)
- [](#)
- [Database](#database)



# Variables
```bash
$name = "J Doe";                      # Creating the variable
$pizza ="4.99";

echo"My name is {$name}<br>"          # Printing, <br> is html tag
echo"My pizza costs \${$pizza}<br>"   # \ before to print the character $
```

# Artihmetic operators
```bash
$x = 10;
$y = 3;
$z = null;

# Operators:
+ - * / **(^power) %
$z = $x + $Y
echo '$z'

# Increment / Decrement
$counter++;
$counter--;
```

# Get & Post
```bash

```

# Variables
$_GET $_POST = special variables used to collect data from an HTML form,  
data is sent to the file in the action attribute <form action="file.php" method="get">
```bash
$_GET
- Appended data to the url
- Not secure
- char limit
- Bookmark is possible with values
- Better for search page

$_POST
- Data is packaged inside the body of the HTTP request
- More Secure
- No data limit
- Cannot bookmark
- Get requests are not cached
- Better for submitting credentials

```

# Variables
```bash

```

# Database
- Start XAMPP Control Panel
- Start Apache & MySql server
- Type localhost in browser
- Click on phpMyAdmin
- Create DB
![image](https://github.com/Keeriiim/WebDev/assets/117115289/d980d6df-e266-4c8c-a9e6-c13b73731d59)

Connect to the database, you can find users in  User accounts on phpMyAdmin
```bash
<?php

$conn = mysqli_connect("localhost","root","","php_project")
        or die("Connection failed");

?>
```



