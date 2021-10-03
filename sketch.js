var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bg;
var astronaut;
var bkground;
var bath;

function setup() {

  createCanvas(1000, 600);
  bkground = createSprite(500, 300);
  bkground.addImage(bg);
  bkground.scale = 0.3;
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(0);
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;


  }
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;


  }
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;


  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;


  }

  if (keyDown("m")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    
    astronaut.velocityX = 2;
    astronaut.velocityY = 2;


  }

  




  
  drawSprites();
}

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");


}