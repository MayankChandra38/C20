var a,movingRectangle;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
  a.debug = true;
  movingRectangle = createSprite(500,200,50,50);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;
}

function draw() {
  background(255,255,255);  

  if(a.x-movingRectangle.x<movingRectangle.width/2+a.width/2&&
    movingRectangle.x-a.x<movingRectangle.width/2+a.width/2&&
    movingRectangle.y-a.y<movingRectangle.height/2+a.height/2&&
    a.y-movingRectangle.y<movingRectangle.height/2+a.height/2) {
    a.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    movingRectangle.shapeColor = "green";
  }


  movingRectangle.y = mouseY;
  movingRectangle.x = mouseX;

  drawSprites();
}