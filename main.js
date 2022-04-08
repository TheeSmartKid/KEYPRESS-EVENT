canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener( "keydown" , my_keydown );

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		aplhabetkey();
		console.log(aplhabetkey);
	if(keyPressed >=48 && keyPressed<=57)
	{
		numberkey();
		console.log(numberkey);
	}
	if(keyPressed >=37 && keyPressed<=40)
	{
		arrowkey();
		console.log(arrowkey);
	}
	if((keyPressed ==17)|| (keyPressed==18)|| (keyPressed ==27))
	{
		specialkey();
		console.log(specialkey);
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	document.getElementById("d1").innerHTML="You pressed an alphabetical key";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	document.getElementById("d1").innerHTML="You pressed an numerical key";
	add();
}
function arrowkey()
{
	img_image="arrkey.png";
	document.getElementById("d1").innerHTML="You pressed an arrow key";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	document.getElementById("d1").innerHTML="You pressed an special key";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	document.getElementById("d1").innerHTML="You pressed symbol or other key";
	add();
}
	
