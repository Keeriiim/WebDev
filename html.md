- [Info](#info)
- [Syntax](#syntax)
- [Block element vs inline](#Block-element-vs-inline)
- [Lists](#lists)
- [Linking](#linking)
- [Id](#id)
- [Pathing](#pathing)
- [Tables](#tables)
- [Formatting](#formatting)
- [Entities](#entities)
- [Forms](#forms)
- [](#)
- [](#)
- [Cheatsheet](#cheatsheet)

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
To go from inline to block we have to type add width=100%.  
Width can be placed with % or pixels i.e 500.  
th for header, td for data. header is bold, data is not
Header has option to use the scope attribute to specify whether the header is for a row, column, or group of rows or columns.
```bash
<body>
<table border="1" width="100%">
        <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
        </tr>


</table>
</body>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/3779d62d-ea2f-480b-80a2-a8aa1431de4b)  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/fe992581-b633-4dae-8d31-a1fead81e300)  

# Formatting
Formatting can be done in two ways.

pre 
- will monospace the letters, give them the same space inbetween chars
- whitespace sensetive , space will show up
- block element formatting
```bash
<body>
<div>
        <pre>
            Let's try    this
Oo  u  tttt
        </pre>
    </div>
</body>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/fa6077f4-8161-4f55-8031-059e7ec8c17e)  


code
- will monospace the letters, give them the same space inbetween chars
- Not whitespace sensetive
- inline formatting

```bash
<body>
<div>
        <code>
            Let's try    this
O  u  tttt
        </code>
</div>
</body>
```

<div>
        <code>
            Let's try    this
O  u  tttt
        </code>
    </div>


![image](https://github.com/Keeriiim/WebDev/assets/117115289/4dfeed27-3258-4f84-b2ad-e7e3566ecee2)



# Entities
HTML entities are special codes used to represent characters in HTML. HTML entities ensure that characters are displayed correctly in web browsers without being interpreted as HTML code.  
These entities begin with an ampersand (&) and end with a semicolon (;).  
For example, &lt; represents the less-than sign (<),  
&gt; represents the greater-than sign (>),&amp; represents the ampersand (&). HTML entities ensure that characters are displayed correctly in web browsers without being interpreted as HTML code.  


# Forms
Forms are how we send data to a server.
```bash
<form method="GET"                                                              # GET which appends info to url, POST which send info
 action="somepage.html">                                                        # In this case it will append this to the url which will browse it

        <input> type="text"                                                     # Single line unput, emails or password
        <textarea name="" id="" cols="30" rows="30" ></textarea>                # Textarea for more text, decided by cols/rows. Good for address 
        <button type="submit">Submit this form</button>                         # Creates a clickable button that will take form method & action
        <selection
</form>
```

![image](https://github.com/Keeriiim/WebDev/assets/117115289/80741570-bfea-4ef9-9de7-ac3a78a9bd96)  

## Text
![image](https://github.com/Keeriiim/WebDev/assets/117115289/1c31fe02-ca5e-428e-8fee-61c0cf403ca1)  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/d3f24e32-f087-4852-aa61-3976730fb848)  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/bb106193-663c-4d55-8958-62f25095e15a)  

## Textarea
```bash
<form action=""> 
        <input type="text" value="Nothing" placeholder="Empty">
        <textarea name="name" id="id1" cols="30" rows="5" placeholder="No text?" >
        </textarea>

    </form>
```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/13a23aa8-5ee9-44db-9ad1-496721189144)  

```bash
<form action=""> 
        <input type="text" value="Nothing" placeholder="Empty">
        <textarea name="name" id="id1" cols="30" rows="5" placeholder="No text?" >
         This text will be the "value", whitespace does matter shere !         example
        </textarea>

    </form>
```  
![image](https://github.com/Keeriiim/WebDev/assets/117115289/9f4cf3ef-4919-4ea1-b1b1-acf0f30f624e)

## Select
Select creates a dropdown meny
Example 1: Preselected
```bash
<form action="/submit-form" method="post">
  <label for="car">Choose a car:</label>
  <select id="car" name="car">
    <option value="volvo">Volvo</option>
    <option value="saab" selected>Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit" value="Submit">
</form>

```
![image](https://github.com/Keeriiim/WebDev/assets/117115289/eff8c202-e83f-412c-99c6-9ca1bc72041a)  

Example 2: Multiple size
```bash
<form action="/submit-form" method="post">
  <label for="fruits">Choose your favorite fruits:</label>
  <select id="fruits" name="fruits" multiple size="3">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
    <option value="date">Date</option>
    <option value="elderberry">Elderberry</option>
  </select>
  <input type="submit" value="Submit">
</form>
```


```bash

```

```bash

```

```bash

```





# Cheat sheet
![image](https://github.com/Keeriiim/WebDev/assets/117115289/2144976b-6552-484c-8ad2-6b5e6dffeb17)  
