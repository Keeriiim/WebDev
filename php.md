
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


![image](https://github.com/Keeriiim/WebDev/assets/117115289/3fdc00b8-6a19-45a2-b3d2-0896f491540e)  

- Connect to the database, you can find users in  User accounts on phpMyAdmin
```bash
<?php

$conn = mysqli_connect("localhost","root","","php_project")
        or die("Connection failed");

?>
```

- Add SQL code to create the DB tables in phpMyAdmin, press on Go when done
```bash
CREATE TABLE IF NOT EXISTS `order_items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(108) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UX_Constraint` (`user_email`)
) ENGINE=InnoDB CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_cost` decimal(6,2) NOT NULL,
  `order_status` varchar(100) NOT NULL DEFAULT 'on_hold',
  `user_id` int(11) NOT NULL,
  `user_phone` int(11) NOT NULL,
  `user_city` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `order_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_category` varchar(108) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_image2` varchar(255),
  `product_image3` varchar(255),
  `product_image4` varchar(255),
  `product_price` decimal(6,2) NOT NULL,
  `product_special_offer` int(2),
  `product_color` varchar(108),
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB CHARSET=latin1;
```

- Go to your project folder, switch your .html files to php

```bash
## When .html -> .php you have to run it on apache webserver.
php -S localhost:8000
```






