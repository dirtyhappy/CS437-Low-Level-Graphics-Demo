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
	//state, clicked or not
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
	
	
	this.start = function(){
		this.intID = setInterval(localUpdate, 50);
		document.onmousemove = this.mouse.updatePos;
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

