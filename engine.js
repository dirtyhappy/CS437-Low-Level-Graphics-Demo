//Basics of an engine  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mouse objec that tracks that state of the mouse
function Mouse(){
	this.updatePos = function(e){
		this.mouseX = e.pageX; //document
		this.mouseY = e.pageY; //document
	}
	this.setX = function(){
		this.x = document.mouseX;	
	}
	this.setY = function(){
		this.y = document.mouseY;	
	}
	this.getX = function(){
		return this.x;
	}
	this.getY = function(){
		return this.y;
	}
	
	//state of the mouse
	this.isClicked = false;
	this.down = false;
	this.updateStateDown = function(){
		this.down = true;
		this.clicked = true;
	}
	this.updateStateUp = function(){
		this.down = false;
		this.clicked = false;
	}
	this.setState = function(){
		this.isClicked = document.clicked;	
	}
	this.getState = function(){
		return this.isClicked;
	}
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene object that holds a canvas


function Scene(){
	this.canvas = document.createElement('canvas');
	this.mouse = new Mouse();
	this.canvas.style.backgroundColor = "black";
	document.body.appendChild(this.canvas);
	this.context = this.canvas.getContext("2d");
	this.canvas.width = 700;
	this.canvas.height = 500;
	
	this.mouseState = function(){
		document.onmousemove = this.mouse.updatePos;
		document.onmousedown = this.mouse.updateStateDown;
		document.onmouseup = this.mouse.updateStateUp;
	}	

	this.start = function(){
		this.intID = setInterval(localUpdate, 50);
		this.mouseState();
	} // end start
	
	//set the background color using r,g,b values
	this.setBackground = function(r,g,b){
		var color = 'rgb('+r+','+g+','+b+')';
		this.canvas.style.backgroundColor = color;
	}
	

	
	
} //end Scene

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// localUpdate function that calls the user's update function once per frame
function localUpdate(){
	update();
}

