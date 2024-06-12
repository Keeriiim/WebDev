- [Info](#info)
- [Style](#style)
- [Font](#font)
- [Css rules](#css-rules)
- [Positioning](#positioning)
- [Imgs](#imgs)
- [Border](#border)
- [Display type](#display-type)
- [Shadow](#shadow)
- [Opacity](#opacity)
- 
- [Extra](#extra)
- [](#)
- [](#)
- [](#)


# Info
Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be displayed on screen, paper, or in other media.
There are three forms om CSS:
- Inline:
```bash
<!DOCTYPE html>
<html >
<head>
    <title>Inline</title>
</head>
<body>
<p style="color:red">Paragraph </p>
</body>
</html>
```

- Internal
```bash
<!DOCTYPE html>
<html >
<head>
    <title>Internal</title>
    <style>
        body {
            background-color: lightblue;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body> </body>
</html>
```

- External
```bash
<!DOCTYPE html>
<html >
<head>
    <title>External</title>
    <link rel="stylesheet" href="style.css">
</head>
<body> </body>
</html>
```

# Style
## Tools
[Palette](https://colorhunt.co/)

[Color mixer](https://www.csfieldguide.org.nz/en/interactives/rgb-mixer/)

```bash
p[draggable]{
color:red
}

```

## Syntax
```bash
selector {
property: value;
}
```

## Class 
The <style> enables you to write custom css class edits that can be called for text.
```bash
<!DOCTYPE html>
<html >
<head>
    <title>Second Page</title>
</head>
<body>
    <style>
        .className {
                        style padding="20px;
                        color: white;
                        background-color: black;
                    }
    </style>

    <div class="className">

    <!-- To add multiple classes, have speace between them. -->
    <!-- div class="className uppercase class3 class4 etc.."-->
    
    This text will be padded, have whit text and black background  
    </div>
</body>
</html>
```

## Id
Id's are customable with css using the class <style> function. But id must be unique and one can be called only.
id="id1 id2" is wrong!
```bash
<!DOCTYPE html>
<html >
<head>
    <title>Second Page</title>
</head>
<body>
    <style>
        .className {
                        style padding="20px;
                        color: white;
                        background-color: black;
                    }
        #idName {
                    boarder 15 px; solid red;
                }
    </style>

    <div class="className">

    <!-- To add multiple classes, have speace between them. -->
    <!-- div class="className uppercase class3 class4 etc.."-->
    
    This text will be padded, have whit text and black background  
    </div>
    <div id="idName">
        This will create a red boarder around my text
    </div>
</body>
</html>
```

# Font
## Size
There are 4 font sizes

- px
This is 1/96 inch and is the smallest size

- pt
This is 1/72 inch and is the size when chaning in Word, for example 12,14 or 20.

- em
This size will multiply the default you set. If you have 12 px then 1em is 12. 2em will be 24px.

- rem
100% of default/root size. If the default is 5 px, 1 rem is 5, 2rem will be 10. If we change rootsize to 20xp then the rem will not be affected.


## Weight
- normal bold
Normal keyword bold

- lighter / bolder
Added to change the bold eiter +100 or -100

- number 1-900
Change the bold amount

## Font family
Way to change the text style sans-serif for example


# Margin, padding, boarder
![image](https://github.com/Keeriiim/WebDev/assets/117115289/58cf6963-6fe1-4998-b061-266e0177eb11)  

## Boarder
```bash
boarder: 30 px solid black                                      # thickness, style, color
boarder width: 1px 2px 3px 4px                                  # top, right, bottom, left  / top/bottom, right/left

```

## Padding
Space between content & boarder
```bash
<!DOCTYPE html>
<html >
<head>
    <title>Second Page</title>
</head>
<body>
    <div style padding="20px; color: white; background-color: black;">
    This text will be padded, have white text and black background  
    </div>
</body>
</html>
```

## Margin
Space between boarder and outside
```bash
<!DOCTYPE html>
<html >
<head>
    <title>Second Page</title>
</head>
<body>
    <p style="padding:20px; border: 30px solid black; margin: 100px; color:red; background-color: blueviolet; ">Hello world</p>
</body>
</html>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/9363b5c1-3cb9-4192-a3c2-db83957f34ee)  



# Css rules
Order is as follows
1. inline style
2. Internal style in head tag
3. External style in .css file

![image](https://github.com/Keeriiim/WebDev/assets/117115289/09b9d14f-8af2-46d3-8bbb-49807b9fd877)  

Override any rule
![image](https://github.com/Keeriiim/WebDev/assets/117115289/d9ffa2d3-71cc-49dd-9585-aa5ed0cd4e4d) 

## Selectors

```bash
.test > p{
  color:darkgreen;        # This will go one level deep, not further
}
.test p{
  color: purple           # This will go through all levels
}

p#specific {              # Chaining
  color: darkblue;
}
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/75154a5d-0adf-4548-b4c5-ce8c526a0633)  

# Positioning
There are 4 ways an object can be positioned
![image](https://github.com/Keeriiim/WebDev/assets/117115289/edff81d6-59ba-476d-a154-4d6af4589354)  

## Static
Static is the default that does not need to be coded. 
This means it won't follow when scrolling and place can not be choosen.
```bash
position: static;
top: 50px                # Does not mater
left: 50px               # Does not mater
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/9d63cbff-dd75-4e51-8892-fc26a66d88af)  


## Relative
Position will be relative to default position. 
Default is top left corner if it does not have a parent div that has been moved.
```bash
position: relative;
top: 50px                
left: 50px               
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/f49482b8-c42e-4e10-90d2-c0f9d21fc51a)  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/a850bf69-8110-4e34-a3c5-44d2d15cc5c1)  

## Absolute
Position relative to nearest positioned ancestor, or top left corner of webpage.
The ancestor needs to be in relative position for this to work.
```bash
position: absolute;
top: 50px                
left: 50px               
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/0f247138-a47e-4c68-b5c6-d16cd1798d7f)


## Fixed
Position relative to top left corner of browser window. Will stay the same when scrolling.
```bash
position: fixed;
top: 50px                
left: 50px               
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/5199144e-e949-46ad-9f23-44e3073b956b)


## Z-index
Every object has default z-index: 0;   # Can be -1 or 1
This is responsbile for moving object on top/behind each other


# Imgs
```bash
div {
background-image: url("image.png");
background-size: contain;                       # Replace with cover, 
background-repeat: no-repeat;                   # Won't duplicate the image if its smaller than the div
background-position: center center;             # Will place it on center
```


# Border
```bash
.main {
            background-color: red;
            position: relative;
            height: 200px;
            width: 200px;

            border-width: 15px;
            border-style: solid;
            border-color: black;

           /* border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 500px;
            */

            border-radius: 50px 50px 50px 50px;

        }
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/39f561e8-757e-4f7a-8eb4-9c35950b53c3)  

## Margin
```bash
  #box {
            margin: 10px 10px 10px 10 px            # top, right, bottom, left
            margin: auto                            # Moves box to center of page
            margin-top: 10px
            margin-bottom: 10px

            ## Alternative ##
            margin: 10px auto 10px auto;

            ## Alternative ##
            margin: 10px auto;
       }
```



# Display type
Divs are block elements which will take up all space. We can make them inline with
```bash
div {
display: inline;            # height, width can not be applead unless changed to inline-block
border: 1px solid red;      # To see the changes before & after
```

# Shadow
Adding this code to a block element will cast a shadow effect.
```bash
box-shadow: 10px 10px 15px inset red;
            x    y    blur in/out color   
```

# Opacity
Seethrough
```bash
#box{
        display: block;
        width: 200px;
        height: 200px;
        margin: 50px auto;
        background-color: rgba(0,0,0,0.5)              # This will only affect the box, not the text in the box
        color: red;                                    # text
        text-align: center;                            # text
        opacity: 0.5;                                  # 50% seethrough, will affect anything inside the box
}
```





# Extra
```bash
  box{
        max-width: 500px;            # Changes for example an inline text to go to next row when the specified amount is reached.
     }
```



```bash
  
```



