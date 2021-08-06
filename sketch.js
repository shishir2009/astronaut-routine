var bg,background_iss;
var astronaut;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;

function preload() {
  bg= loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}


function setup() {
  createCanvas(400, 400);

  background_iss=createSprite(400,400);
  background_iss.addImage(bg);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  
}

function draw() {
  background(220);

  textSize(10);
  fill(255);
  text("Instructions: ",20,30);
  text("Up arrow= brushing",20,50);
  text("Down arrow= gymming",20,70);
  text("left arrow= eating",20,90);
  text("right arrow= bathing",20,110);
  text("m key= moving",20,130);

  edges=createEdgeSprites();
  astronaut.collide(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=200;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=250;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=190;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=200;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }
}