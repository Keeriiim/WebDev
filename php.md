
- [Intro](#intro)
- [Variables](#variables)
- [Artihmetic operators](#artihmetic-operators)
- [Get & Post](#get-&-post)
- [Database](#database)
- [Adding a product based on previous code](#adding-a-product-based-on-previous-code)
- [Connecting to the DB via PHP](#connecting-to-the-db-via-php)
- [Display prod from DB](#display-prod-from-db)
- [Go to single product](#go-to-single-product)
- 
- Go to single product
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

## Get
```bash
###### Server ######
<?php

$conn = mysqli_connect("localhost","root","","php_project")
        or die("Connection failed");

?>

###### Home page ######
This when pressed will redirect to the right product page and add URL text
<a href="single_product.php?id=<?php echo $row['product_id']; ?>"> <button class="buy-btn">Buy Now</button></a>




##### Single_prod #####
This will enable to take the valie of id = ? and use it

<?php 

include('server/connection.php'); /* Include the connection file */

if(isset($_GET['id'])){ /* If the product_id is set in the URL */

  $product_id=$_GET['id']; /* Get the product_id from the URL */

  $stmt = $conn->prepare("SELECT * FROM products WHERE product_id = ? LIMIT 1"); /* This will  */
  $stmt->bind_param("i", $product_id); /* Bind the product_id to the statement */

  $stmt->execute(); /* Execute the statement */

  $product = $stmt->get_result(); /* Get the result */
    
}
else {
    
    header("Location: index.php"); 
}
```


## Post
```bash

##### Form #####
To send information we will create a form in the single product page

  <div class="col-lg-6 col-md-12 col-12">
                <h6>Men/Shoes</h6>
                <h3 class="py-4"><?php echo $row["product_name"]?></h3>
                <h2>$<?php echo $row["product_price"]?></h2>

                <form action="cart.php" method="POST"> <!-- This form will be used to add the product to the cart -->
                  <input type="hidden" name="product_id" value="<?php echo $row['product_id']; ?>"> <!-- This will be used to get the product_id when the form is submitted -->
                  <input type="hidden" name="product_image" value="<?php echo $row['product_image']; ?>"> <!-- This will be used to get the product_image when the form is submitted -->
                  <input type="hidden" name="product_name" value="<?php echo $row['product_name']; ?>"> <!-- This will be used to get the product_name when the form is submitted -->
                  <input type="hidden" name="product_price" value="<?php echo $row['product_price']; ?>"> <!-- This will be used to get the product_price when the form is submitted -->
                  <input type="number" name ="product_quantity" value="1"/>  <!-- This will be used to get the product_quantity when the form is submitted -->
                  <button class="buy-btn" type="submit" name="add_to_cart">Add to cart</button>
                  
                </form>  
                
                <h4 class="mt-5 mb-5">Product details</h4>
                <span><?php echo $row["product_description"]?></span>
            </div> 
          
        </div> 


##### Cart #####
Now in the cart page we need to 
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

# Adding a product based on previous code
```bash
INSERT INTO `products`(`product_name`,`product_category`,`product_description`,`product_image`,`product_image2`,`product_image3`,`product_image4`,`product_price`,`product_special_offer`,`product_color`) VALUES ('Red Shoes','shoes','Red Shoes','featured1.png','featured1.png','featured1.png','featured1.png',155.0,'Red/Black'

```   
![image](https://github.com/Keeriiim/WebDev/assets/117115289/78a21ef0-aa55-4423-ac82-56180e0141be)  



# Connecting to the DB via PHP
- Go to your project folder and create a con to the DB in server/connection.php
```bash
<?php

$conn = mysqli_connect("localhost","root","","php_project")
        or die("Connection failed");

?>
```  

- Local accounts  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/55a46d49-aa62-4a0c-9fb0-3d2e534cd08a)  


- Switch html files to .php
```bash
## When .html -> .php you have to run it on apache webserver.
php -S localhost:8000
```

# Display prod from DB
```bash
<?php 
include('connection.php');

$stmt = $conn->prepare("SELECT * FROM products WHERE product_category='shoes' LIMIT 4"); /* After connection, we prepare the SQL statement which will fetch the first 4 products from the database */

$stmt->execute(); /* Execute the statement */

$featured_prod_result = $stmt->get_result(); /* Get the result */

?>
```


# Linking a product's button/img to single product page
We want to enter new page by clicking the button  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/2479e4f7-b5ee-4728-b5f4-c6446bb40e79)   
```bash
First we change .html to .php for single_product

then we go to index.php and add this code for the featured product, this will show the id in the url of the pressed button and go to single_product.php

<a href="single_product.php?id=<?php echo $row['product_id']; ?>"> <button class="buy-btn">Buy Now</button></a>

ALTERNATIVE

<a href="<?php echo "single_product.php?id=". $row['product_id']; ?>"> <button class="buy-btn">Buy Now</button></a>
                        
```

# single product page






