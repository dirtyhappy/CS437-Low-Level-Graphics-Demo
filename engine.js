//Dumbed down engine 

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scene object that holds a canvas


function Scene(){
	this.canvas = document.createElement('canvas');
	this.canvas.style.backgroundColor = "black";
	document.body.appendChild(this.canvas);
	this.context = this.canvas.getContext("2d");

	this.start = function(){
		this.intID = setInterval(localUpdate, 50);
	} // end start
	
	//set the width and height of the canvas
	this.setSize = function(width,height){
		this.width = width;
		this.height = height;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	} //end setSize


	//set the top left corner of the canvas
	this.setPos = function(left, top){
		this.left = left;
		this.top = top;
		this.canvas.style.MozTransform = "translate(" + left + "px, " + top + "px)";
		this.canvas.style.WebkitTransform = "translate(" + left + "px, " + top + "px)";
		this.canvas.style.OTransform = "translate(" + left + "px, " + top + "px)";
	} //end setPos
	
	//set the background color using r,g,b values
	this.setBackground = function(r,g,b){
		var color = 'rgb('+r+','+g+','+b+')';
		this.canvas.style.backgroundColor = color;
	}

	this.setSize(500,500);
	this.setPos(0,0);
	
	
} //end Scene

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// localUpdate function that calls the user's update function once per frame
function localUpdate(){
	update();
}
