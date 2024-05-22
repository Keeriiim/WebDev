- [Info](#info)
- [Syntax](#syntax)
- [Block element vs inline](#Block-element-vs-inline)
- [Lists](#lists)
- [Linking](#linking)
- [Id](#id)
- [Pathing](#pathing)
- [Tables](#tables)
- [](#)
- [](#)
- 

# Info
- !Doctype tells the browser to render the page as a html 5 file.
- Whitespacing does not mater,              typing like this wont add the space to the browser.

# Syntax
## First
![image](https://github.com/Keeriiim/WebDev/assets/117115289/42fc3fb9-8f6b-4ed4-a796-ff65954d1e47)  

```bash
<element></element>                          # Tag
title="Testing"                              # Attribute
Hello World!                                 # Inner Content
```

## Nested
Parent is the outside, child is the inner
```bash
<div>
        <h1>My First Heading</h1>
        <div>  
            <h2>My nested Heading</h2>
            <p>My first paragraph.</p>
        </div>

</div>
```

## Text formatting
u is deprecated, new way is to add 
<span style="text-decoration: underline;>" </span>
```bash
<div>
    <p>
            <b>This will be printed in bold</b>
            <i>This will be printed in italic</i>
            <u>This will be printed with underline</u>
        </p>
        <p>
            <b> 
                <i>
                    <u>This will be printed in bold, italic and underline</u>
                </i>
            </b>
        </p>

</div>
```



# Block element vs inline
Div, paragraph, header etc are a blockelement. They take up the whole line on the page.  
Bold,italic,underline are inline meaning they only affect the inclosed text.  

![image](https://github.com/Keeriiim/WebDev/assets/117115289/5cf39779-5fc0-4e25-a444-14f7639e416c)  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/972d0f30-25b7-405e-af20-b338a9e94582)  

## Horisontal rule and line breaks
Horisontal break
```bash
<img 
        src="image.png" 
        width="800" 
        height="500"
>
<hr>                                  # block element 
<img 
        src="image2.png" 
        width="800" 
        height="500"
        alt="unable to load image, go back to first page"
>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/b04fd4a7-0da3-4c39-92bb-f4bc02da73da)  

linebreak
```bash
<div>
        <p>
            I want to separate this sentance. With this sentance
        </p>
        <p>
            I want to separate this sentance. <br> With this sentance
        </p>
</div>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/e76cd032-898b-4524-8fe5-0568700693fe)

# Lists
## Sorted & Unsorted list
```bash
<div>
<h3>Lists</h3>
<ol>
<li>Item mr1</li>
<li>Item nmr2</li>
</ol>

<ul>
<li>Bulletpoint mr1</li>
<li>Bulletpoint nmr2</li>
</ul>

</div>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/43aff442-3541-4abc-8901-4d89c854312a)  



# Linking
Absolute link:
```bash
<div>
    <a href="https://google.com">This is a link to google</a>

</div>
```

Relative link:
```bash
<div>
    <a href="second_page.html">This is a link to my second page</a>

</div>
```

## Target
Adding a target forces the browser to open it in a new tab
```bash
<div>
    <a href="second_page.html" target="_blank">
        This is a link to my second page
    </a>

</div>
```
## Favicon        
Creates a tiny favicon on top of browser tab
```bash
<head>
    <title>Document</title>
    <link rel="icon" href="favicon.png" type="image/png">
</head>
```
If the file is missing ->
![image](https://github.com/Keeriiim/WebDev/assets/117115289/2aeedcc1-ae1f-4b6a-8c63-3f260d4fd809)  


## Images
href will enable linking if the user presses on the img
```bash
<a href="first_page.html">
        <img 
            src="image.png" 
            width="800" 
            height="500"
            >
<a/>
        <p></p>
        <img 
            src="image.pngg" 
            width="800" 
            height="500"
            alt="This is an image that is missing"
        >
```

![image](https://github.com/Keeriiim/WebDev/assets/117115289/f8542893-9ff6-4cf0-b5c3-e05f43ed2705)  


# Id
```bash
<div id="top">
        <a href="bottom">
        Press here to go to the bottom of the page
        </a>
</div>
<div id="bottom">
        <a href="top">
        Press here to go to the top of the page
        </a>
</div>
```


# Pathing
If you add a folder into the project, for example images to hold your image picture1
```bash
<link rel="icon" href="images/picture1.png type="image/png"     # Links

<img src="images/picture2.png                                   # images
```


## Browse your folder outside folder
```bash
<a href="../home.html" target="_self">Back to Home</a>        # Up a folder to home.html

```

# Tables
```bash
<body>
<table>
        <tr>
                <td>
                </td>
        </tr>


</table>
</body>
```




# Cheat sheet
![image](https://github.com/Keeriiim/WebDev/assets/117115289/2144976b-6552-484c-8ad2-6b5e6dffeb17)  
