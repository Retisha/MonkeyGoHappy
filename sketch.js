
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstaclesImage
var FoodGroup, ObstaclesGroup
var score,gameState = "play"

function preload(){
  
  monkey_running =                 loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,350,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(200,390,800,20)
  ground.velocityX = -3;
  
  FoodGroup = new Group();
  ObstaclesGroup = new Group();
}


function draw() {

  background("green")
  
  if(gameState === "play"){

  if(ground.x < 0 ){
    ground.x = 300
  }
  
  if(keyDown("space")&& monkey.y > 250){
    monkey.velocityY = -10;
  }
  monkey.velocityY+=0.5
  monkey.collide(ground)
  
  Spawnfoods();
  Spawnobstacles();
  
  if(ObstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityX = 0;
    ObstaclesGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    ObstaclesGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
    gameState = "end";
  }
  }
  
  drawSprites();
}
function Spawnfoods(){
  if(frameCount%100 === 0){
    banana = createSprite(400,230,20,20)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -3
    banana.lifetime = 300
    banana.y = Math.round(random(100,250))
    FoodGroup.add(banana)
  }
}

function Spawnobstacles(){
  if(frameCount%150 === 0){
    obstacles = createSprite(400,360,20,20)
    obstacles.addImage(obstaclesImage)
    obstacles.scale = 0.1
    obstacles.velocityX = -3;
    obstacles.lifetime = 300
    ObstaclesGroup.add(obstacles)
  }
}




