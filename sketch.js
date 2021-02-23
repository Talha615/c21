var movingrect
var fixedrect
var rect1,rect2
function setup() {
  createCanvas(800,400);
movingrect= createSprite(400, 200, 50, 50);
fixedrect=createSprite(200, 200, 50, 50);
rect1=createSprite(300,400,50,50)
rect2=createSprite(300,200,50,50)
rect1.velocityY=-2
rect2.velocityY=2
}


function draw() {
  background("lightblue");  
  movingrect.x=mouseX
  movingrect.y=mouseY
if(isTouching(fixedrect,movingrect)){
fixedrect.shapeColor="red"
movingrect.shapeColor="red"
}
else{
fixedrect.shapeColor="green"
movingrect.shapeColor="green"
}
bounceoff (rect1,rect2)
  drawSprites();
}

