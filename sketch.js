var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
}
function setup() {
  createCanvas(800, 400);
  
  ground = createSprite(400,350,800,10);
  ground.visible = false;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  ground = createSprite(800,400,800,20);
  ground.x = ground.width /2;
  
  if (ground.x < 0){
      ground.x = ground.width/2;}
  
if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8

  if(FoodGroup.isTouching(monkey)){
    score = score+2;
    FoodGroup.destroyEach();
  }
    if(monkey.isTouching(obstacleGroup)){
      obstacleGroup.setVelocityXEach(0)
    }
  
  monkey.collide(ground);
  
  fruits();
  obstacles();
  
  drawSprites();
  
  stroke("white");
textSize(20);
fill("white");
  text("Score: " + score, 500, 50);
}

function fruits()
{
 if(World.frameCount%80 === 0)
 {
   var banana = createSprite(300,120);
   banana.y = Math.round(random(300,100));
   banana.addImage(bananaImage);
   banana.velocityX = -6;
   banana.scale = 0.1;
   banana.lifetime = 300;
   FoodGroup.add(banana);
 }
}

function obstacles()
{
 if(World.frameCount%90 === 0)
 {
  var obstacle = createSprite(800,350,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.lifetime = 300;
   obstacle.scale = 0.2;
   obstacleGroup.add(obstacle);
 }

}






