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
	this.updateStateDown = function(e){
		this.down = true;
		this.mouseDownX = e.pageX;
		this.mouseDownY = e.pageY;
		this.clicked = true;
	}
	this.updateStateUp = function(e){
		this.down = false;
		this.mouseUpX = e.pageX;
		this.mouseUpY = e.pageY;
		this.clicked = false;
	}
	this.setState = function(){
		this.isClicked = document.clicked;	
		this.isDown = document.down;
		this.downX = document.mouseDownX;
		this.upX = document.mouseUpX;
		this.downY = document.mouseDownY;
		this.upY = document.mouseUpY;
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
	this.canvas.width = screen.width;
	this.canvas.height = screen.height;
	
	this.mouseState = function(){
		document.onmousemove = this.mouse.updatePos;
		document.onmousedown = this.mouse.updateStateDown;
		document.onmouseup = this.mouse.updateStateUp;
	}	

	this.start = function(){
		this.intID = setInterval(localUpdate, 5);
		this.mouseState();
	} // end start
	
	//set the background color using r,g,b values
	this.setBackground = function(r,g,b){
		var color = 'rgb('+r+','+g+','+b+')';
		this.canvas.style.backgroundColor = color;
	}
	

	
	
} //end Scene

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Drawing class that stores the data of a drawing and updates based on the mouse 

function Drawing(scene){
	this.beginX = null;
	this.beginY = null;
	this.scene = scene;	
	this.update = function(){
			this.beginX = this.scene.mouse.x;
			this.beginY = this.scene.mouse.y;
			this.draw();	
			}
		
	this.drawEllipse = function(context, x, y, w, h){
		var kappa = .5522848;
		ox = (w/2) * kappa; //horizontal offset point
		oy = (h/2) * kappa; //vertical offset point
		xe = x + w; // x-end
		ye = y + h; // y-end
		xm = x + (w/2); //x-mid
		ym = y + (w/2); //y-mid
		context.beginPath();
		context.moveTo(x,ym);
		context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
		context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
		context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
		context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
		context.fill();	
	}

	this.draw = function(){
		context = this.scene.canvas.getContext('2d');
		r = this.beginX%255;
		g = this.beginY%255;
		b = this.beginY-this.beginX%255;
		color = "rgb("+r+","+g+","+b+")";
		context.fillStyle = color;
		this.drawEllipse(context, this.beginX, this.beginY, 15, 15);
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// localUpdate function that calls the user's update function once per frame
function localUpdate(){
	update();
}

