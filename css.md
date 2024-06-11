- [Info](#info)
- [Style](#style)
- [](#)
- [](#)
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

## Padding
There is 
![image](https://github.com/Keeriiim/WebDev/assets/117115289/58cf6963-6fe1-4998-b061-266e0177eb11)

```bash
<!DOCTYPE html>
<html >
<head>
    <title>Second Page</title>
</head>
<body>
    <div style padding="20px; color: white; background-color: black;">
    This text will be padded, have whit text and black background  
    </div>
</body>
</html>
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
