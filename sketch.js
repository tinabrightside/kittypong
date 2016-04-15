var catA, catB, ball, wallTop, wallBottom;
var MAX_SPEED = 10;

var fatcat;
var hitcat;
var yarn;

//var fatcat_sprite_sheet;
//var hitcat_sprite_sheet;

//var fatcat_animation;
//var hitcat_animation;

function preload() {
  //fatcat_sprite_sheet = loadSpriteSheet('images/fatcat.png', 123, 112, 8);
  //hitcat_sprite_sheet = loadSpriteSheet('images/hitcat.png', 124, 116, 10);
  
  fatcat = loadImage("images/fatcat.png");
  hitcat = loadImage("images/hitcat.png");
  yarn = loadImage("images/yarn.png");
  
}

function setup() {
  createCanvas(800,400);
  //frameRate(6);
  
  catA = fatcat(30, height/2, 10, 100);
  catA.immovable = true;
  
  catB = hitcat(width-28, height/2, 10, 100);
  catB.immovable = true;
  
  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;
  
  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;
  
  ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED;
  
  catA.shapeColor = catB.shapeColor =ball.shapeColor = color(255,255,255);
  
  ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
  background(0);
  
  catA.position.y = constrain(mouseY, catA.height/2, height-catA.height/2);
  catB.position.y = constrain(mouseY, catA.height/2, height-catA.height/2);
  
  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  
  if(ball.bounce(catA)) {
    var swing = (ball.position.y-catA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }
  
  if(ball.bounce(catB)) {
    var swing = (ball.position.y-catB.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
  }
  
  if(ball.position.x<0) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 0);
  }
  
  if(ball.position.x>width) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 180);
  }
  
  drawSprites();
  
}
