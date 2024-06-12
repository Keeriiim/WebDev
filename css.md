- [Info](#info)
- [Style](#style)
- [Font](#font)
- [Css rules](#css-rules)
[](#)


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




