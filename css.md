- [Info](#info)
- [Style](#style)
- [Font](#font)
- [Css rules](#css-rules)
- [Positioning](#positioning)
- [Imgs](#imgs)
- [Border](#border)
- [Display type](#display-type)
- [Display view](#display-view)
- [Float](#float)
- [Flexbox](#flexbox)
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
## padding, border, margin, outline
![image](https://github.com/Keeriiim/WebDev/assets/117115289/58cf6963-6fe1-4998-b061-266e0177eb11)  

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

## Border
When creating a box and adding a border. The default is box-sizing:content-box - meaning box will increase if u add margin, padding and border size.
If you want a fixed size with the changes included you need. box-sizing:border-box

```bash
boarder: 30 px solid black                                      # thickness, style, color
boarder width: 1px 2px 3px 4px                                  # top, right, bottom, left  / top/bottom, right/left
```

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
Space between boarder and outside
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

## Outline
```bash
outline: 1px solid black;                            # Adds a boarder outside of margin
outline-offset: 10px;                                # Space between margin & outline
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/d1504641-fe66-4d3a-8c4c-b37b3324035b)




# Display type
- block
Divs are block elements which will take up all space. We can make them inline with
![image](https://github.com/Keeriiim/WebDev/assets/117115289/ad0fbdac-dd19-4ab8-8fc7-2488d41bc5bf)



- inline
<span> is an example of inline
```bash
div {
display: inline;            # height, width can not be applead unless changed to inline-block
border: 1px solid red;      # To see the changes before & after
```

![image](https://github.com/Keeriiim/WebDev/assets/117115289/679a0b15-e37c-4a96-b85d-a40be748f6d3)

- block-inline

```bash
div {
display: inline-block;            # height, width can not be applead unless changed to inline-block
height: 200px;
width: 200px;
border: 1px solid red;      # To see the changes before & after
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/377bf72d-de34-46b5-b056-443d7bad7c12)  



# Display view
4 ways of changing the view
1. Media query
2. Css Grid
3. Css flexbox
4. Frameworks ex bootstrap

## Media query
Add this to the css file and put the code inside for what will happen to the site. Ex below 600 px navigation bar moves for a nice look.
```bash
@media(max-width 600px)
{
display everything witin this when screen is up to 600 px wide
}
```

## Css grid
The grid comes with multiple layouts to choose from.
![image](https://github.com/Keeriiim/WebDev/assets/117115289/355fef68-b0ee-4293-ba5a-71434d01271a)  


For example we have grid layout. Notice we set the DISPLAY to grid. Before we had inline, block, inline-block.
![image](https://github.com/Keeriiim/WebDev/assets/117115289/6fe83d2d-3e2c-42cc-ac28-df4adffa8974) 

```bash
colums 1fr 1fr means that we have 2 colums of equal width.
rows 100px 200px 200px means we have 3 rows from top to bottom with the height set.

gap is like margin around all sizes.
grid-column: span 2; means that it should take the same size as 2 colums, in this case its the whole width.

```

## Css Flexbox
Another display type that can work horistonal or vertical is flexbox.
![image](https://github.com/Keeriiim/WebDev/assets/117115289/b6b84f8b-3ebe-47e5-9893-22f0db38bb38)  

```bash
card class sets the default so there are 4 boxes for the whole row
.first changes the size 2x default
.second changes the size 0.5x default
```

## Bootstrap
External css that needs to be linked. From this we can use complete layouts.  
Bootstrap is built on top of flexbox, hence col-12 which is the full width of the page/12
![image](https://github.com/Keeriiim/WebDev/assets/117115289/79be332a-c2d1-4e40-8db6-03ada906c84e)  

```bash
if we want to take up half the page we can use col-6 in the class
```












# Float
Only use float when you want to wrap text around an image!
![image](https://github.com/Keeriiim/WebDev/assets/117115289/d7a8053c-9828-4295-891c-48f11e09a261)   


Default image:
![image](https://github.com/Keeriiim/WebDev/assets/117115289/3496c4f2-8682-4861-935e-0664e3c35000)  

## left
```bash
img{
float: left;
}

```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/50118e34-bed3-4a2a-baa5-b6a5172ba597)  

## Right
```bash
img{
float: right;
}
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/4674bdb8-a107-4c09-97f8-bdddbf2ba6ca)  

## Content below
We can clear left, right or both
```bash
footer{
clear: both;
}
```




# Flexbox
Float shold only be used to edit text to a img. But not for layout. Flexbox is better for this.
![image](https://github.com/Keeriiim/WebDev/assets/117115289/20b9addd-e7c3-4f17-a0e6-9fad590a1f98)  

## Layout differnece
Table  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/273b87d7-0561-4fd2-bbdf-3d872460cfab)  

Inline-block  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/5d41a20b-c533-44a6-b62c-1384914a15fa)  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/615d9ecc-0fef-4397-a43b-1cdfdff886f9)  

Float 
![image](https://github.com/Keeriiim/WebDev/assets/117115289/c030a868-4b76-4fa7-8d3f-03d084e58722)  

Flexbox  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/e2ef9cb3-d449-4b13-88d9-4e3f7f76bb28)  

## inline-flex  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/ddb369be-741a-4f1d-a382-a55d0b377bd0)  

## display flex
![image](https://github.com/Keeriiim/WebDev/assets/117115289/9d5ded89-c65e-422e-9923-da1c0cc5db15)  

Parent: flex container
Children: flex items

[Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
```bash
.container {
display: flex;                     # Sets it to flex
gap: 10px;                         # Creates gap between elements
flex-direction: column;            # row/colum for X or Y axis

.container > *{
      flex-basis: 100px;           # HAS to be on the child, makes it fit in 100px
    }
```

## order
All items are default order 0, meaning the structure is based on what came first inside the html code. We can move a child around.

```bash
.orange {
      order: -1;           # Moves it to the first place if any other item has not a lower value.
    }

.orange {
      order: 1;           # Moves it to the last place if any other item has not a higher value.
    }
```

![image](https://github.com/Keeriiim/WebDev/assets/117115289/dfaa9326-1ebd-446d-a82e-ebf3d28d888a)  




## Wrap
This is set on the parent container itself telling how the children should behave.  
Default is nowrap - meaning: any items outside of the web width will dissapear. 
[Learn wrap](appbrewery.github.io/flex-layout/)  

To keep the item we must enable wrap
```bash
.container {
    flex-wrap: wrap;
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/4465cf91-1e0b-44b4-a32f-29041ab7513c)  

## Justify-content
This is set on the parent container itself telling how the children should behave.  
Default is flex-start - meaning: all items start from left side of main axis (X-axis). 
** This Only Affects flex-direction: row **

```bash
.container {
      color: white;
      border: 5px solid gold;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;                    # Alternative: nowrap
      justify-content: center;            # Alternatives: flex-start, flex-end, center, space-around
        <!-- Different for row / column -->
      height: 100px;                      # Adjusts the height of div, low has no effect, high stretches the content
      width: 800px;                       # Adjusts the width of div, if it's lower than child content it will space out the content
    }    


    .container > *{
      flex-basis: 100px;                  # width for row, height for column
    }
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/b689f802-72db-4548-8813-25c7d1e89b57)



## Align items
This is set on the parent container itself telling how the children should behave.  
Default is flex-start - meaning: all items start from top to bottom (Y-axis).  
** This Only Affects flex-direction: column **
[FroggyGame](https://appbrewery.github.io/flexboxfroggy/)
```bash
.container {
      color: white;
      border: 5px solid gold;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;                    # Alternative: nowrap
      lign-items: center;                 # Alternatives: flex-start, flex-end, space-around
      <!-- Different for row / column -->
      height: 100px;                      # Adjusts the height of div, to low spaces out/ aligns the content, to high has no effect
      width: 800px;                       # Adjusts the width of div, don't affect the children, only the width of parent container
    }    


    .container > *{
      flex-basis: 100px;                  # width for row, height for column
    }
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/50dea36c-bbd4-4822-bc2f-e702bea6a606)


## Align-content
align-content: end; only works if WRAP is displayed.
```bash
.container {
      color: white;
      border: 5px solid gold;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;                    # Alternative: nowrap
      lign-items: center;                 # Alternatives: flex-start, flex-end, space-around
      <!-- Different for row / column -->
      height: 100px;                      # Adjusts the height of div, to low spaces out/ aligns the content, to high has no effect
      width: 800px;                       # Adjusts the width of div, don't affect the children, only the width of parent container
      align-content: end;
    }    


    .container > *{
      flex-basis: 100px;                  # width for row, height for column
    }
```


## Flex sizing
![image](https://github.com/Keeriiim/WebDev/assets/117115289/196d35a9-bd49-4b6a-a81a-722e6c06aab3)  

### For sizing an item we have 3 things to manipulate
```bash

.item{
flex-basis            # sets the inital width of the item
flex-grow             # 1 / 0 to enable/disable
flex-shrink           # 1 / 0 to enable/disable

# The basis is default to auto meaning it will give more space to more text. If we want to equal we give it 0;
flex: 1 1 0;          # grow, shrink, basis  shortcut -> flex: 1;
}
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/7a45246a-a9c5-465e-9ae4-4eac1d73a28b)  

















# Shadow
Adding this code to a block element will cast a shadow effect.
```bash
box-shadow: 10px 10px 15px inset red;
            x    y    blur in/out color   


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



