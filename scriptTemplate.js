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
<<<<<<< HEAD
=======
var clearCanvas = function()
{
   stroke(255, 255, 255);
   fill(255, 255, 255);
   rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};
>>>>>>> f8bd8fcb8390b431fc150f48a2cbe7c69fcbbdfc

void keyPressed()
{
   keysDown[keyCode] = true;
};

void keyReleased()
{
   keysDown[keyCode] = false;
};


<<<<<<< HEAD
void mousePressed(){
   
}

void mouseReleased() {
   
}

void setup() {	
=======
void mousePressed()
{
   
}

void mouseReleased(){
   
   
}

void setup()
{	
>>>>>>> f8bd8fcb8390b431fc150f48a2cbe7c69fcbbdfc
   size(CANVAS_WIDTH, CANVAS_HEIGHT);
   frameRate(FRAMERATE);
};

<<<<<<< HEAD
void draw() {
   
=======
void draw()
{
   clearCanvas();
>>>>>>> f8bd8fcb8390b431fc150f48a2cbe7c69fcbbdfc
};
