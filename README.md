# CS437-Low-Level-Graphics-Demo
I made a paint/drawing board.<br/>

Each webpage has a different demo showing steps it took to get to the final drawing program.

engine.js creates useful classes based on some classes in simplegame.js and concepts we talked about in class

## Mouse Class
The mouse class keeps track of the position of the mouse and whether the mouse is being clicked or not.
### Properties
```
x - the current horizontal position of the mouse
y - the current vertical position of the mouse
upX and upY - the position of the mouse when released, can be used when wanting to know ho far user has dragged.
downX and downY - the position of the mouse when clicked.
isClicked - boolean that identifies the state of a click.
```

### Methods
```
updatePos(e) - method called during updates, captures and stores the document positions of the mouse.
setX() - sets the x property of the mouse to the document objects position.
setY() - sets the y property of the mouse to the document objects position.
getX() - returns x
getY() - returns y
updateStateDown(e) - identifies if the mouse is pressed
upadteStateUp(e) - identifies if the mouse is unpressed
setState() - sets the relevent properties based on the output of updateStateDown(e) and updateStateUp(e)
```

An instance of the mouse is created when the Scene class is initialized and is used for tracking the state of the mouse.<br/>

It might be useful to add the ability to show and hide the mouse.

## Scene Class
The scene class creates an instance of the mouse class and has a canvas object that is added to the DOM.<br/>
A scene object is initialized with 

### Properties
```
width - the width of the canvas
height - the height of the canvas
mouse - An instance of the mouse class
context - the context of the canvas
```

### Methods

```
mouseState() - method that calls the various mouse update functions
setSize(width, height) - sets the width and height of the canvas
setBackground(r,g,b) - sets the background of the canvas based on RGB values
start() - method used at the end of the init() that sets the duration between update() calls, also updates the mouse for the first time
```


## Drawing Class
The drawing class takes an instance of a Scene and tracks the movements of the state of the mouse. When the mouse is clicked<br/>
the drawing class draws to the canvas. 

### Properties
```
beginX - the intial x position of the mouse when it is pressed
beginY - the initial y position of the mouse when it is pressed
scene - An instance of the scene class
```

### Methods
```
update() - used in the general update() function that controls redrawing of the canvas. Sets beginX and beginY and calls draw()
drawEllipse(context, x, y, w, h) - Draws a general ellipse using a starting position and width and height.
draw() - Sets the color of the fill based on the position of the mouse and draws a general ellipse at that position.
```

## Potential Extensions
- The ability to save drawings.
