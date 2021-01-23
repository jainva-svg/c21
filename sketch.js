var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect= createSprite(200,200,50,50)
 fixedRect.shapeColor="orange"
 movingRect.shapeColor="yellow"
 fixedRect.velocityX=-2
 movingRect.velocityX=+2
}

function draw() {
  background(0,0,0); 
  //movingRect.x = mouseX
  //movingRect.y = mouseY
 bounceoff(fixedRect,movingRect);
   if (isTouching(fixedRect,movingRect)) {
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
   } else{
    fixedRect.shapeColor="orange"
    movingRect.shapeColor="yellow"
   }
  
  drawSprites();
}
