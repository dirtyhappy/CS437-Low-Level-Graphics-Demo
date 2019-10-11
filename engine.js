//Basics of an engine  

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////
