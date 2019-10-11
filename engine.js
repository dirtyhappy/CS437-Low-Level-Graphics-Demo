//Basics of an engine  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mouse objec that tracks that state of the mouse
function Mouse(){
	this.updatePos = function(e){
		this.x = e.pageX;
		this.y = e.pageY;
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
	this.canvas.style.backgroundColor = "black";
	document.body.appendChild(this.canvas);
	this.context = this.canvas.getContext("2d");
	this.canvas.width = 700;
	this.canvas.height = 500;
	
	
	this.start = function(){
		this.intID = setInterval(localUpdate, 50);
		document.onmousemove = this.updateMousePos;
	} // end start
	
	//set the background color using r,g,b values
	this.setBackground = function(r,g,b){
		var color = 'rgb('+r+','+g+','+b+')';
		this.canvas.style.backgroundColor = color;
	}
	
	this.updateMousePos = function(e){
		this.mouseX = e.pageX; //document mouseX
		this.mouseY = e.pageY; //document mouseY
		console.log(e.pageX,e.pageY);
	}

	
	
} //end Scene

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// localUpdate function that calls the user's update function once per frame
function localUpdate(){
	update();
}

