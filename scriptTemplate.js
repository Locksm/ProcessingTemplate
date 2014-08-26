/*----
  Name of your program!
  Programmed by You!
  Documentation!
  ----*/

//Globals
var keysDown = []; //Map of which keys are being pressed

//Constants
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400
var FRAMERATE = 30;
var W = 87;
var A = 65;
var S = 83;
var D = 68;

//Classes

//Functions

void keyPressed()
{
   keysDown[keyCode] = true;
};

void keyReleased()
{
   keysDown[keyCode] = false;
};


void mousePressed(){
   
}

void mouseReleased() {
   
}


void setup()
{	
   size(CANVAS_WIDTH, CANVAS_HEIGHT);
   frameRate(FRAMERATE);
};

   
void draw()
{
   clearCanvas();
};
