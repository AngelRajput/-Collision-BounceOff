var fixedRect,movingRect;
var wall,car;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  wall = createSprite(950,200,40,90);
  wall.shapeColor = "pink";

  car = createSprite(200,200,30,30);
  car.shapeColor = "red";
  car.velocityX = 6;


}
function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log (movingRect.x - fixedRect.x);
  
  if (isTouching(car,wall)){
    car.shapeColor = "yellow";
  }

  BounceOff(car,wall);
  drawSprites();
}