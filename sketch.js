var fixedRect, movingRect;

function setup() {
  createCanvas(2000,2000);
  fixedRect = createSprite(300, 200, 100, 50);
  movingRect = createSprite(1000, 200, 100, 50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  movingRect.velocityX = -10;
  fixedRect.velocityX = 10;

  fix = createSprite(200, 800, 100, 50);
  move = createSprite(200, 200, 100, 50);
  move.shapeColor = "red";
  fix.shapeColor = "red";

  move.velocityY = 10;
  fix.velocityY = -10;

  
}

function draw() {
  background(0);
    
  bounce(movingRect,fixedRect);

  bounce(move,fix);
  
  drawSprites();
}


