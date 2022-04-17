var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10)
}

function draw() 
{
  background("black");
  if(keyDown("right")){
    ball.x+=2
    background("yellow")
  }
drawSprites()
}




