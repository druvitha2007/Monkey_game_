
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var jungle
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas(550,500)
  jungle = createSprite(200,200,400,600);
  jungle.addImage(jungleImage);
  //jungle.scale = 2
  jungle.velocityX = -5
  
  monkey = createSprite(80,390,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.15
  
  ground = createSprite(400,440,900,10);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  ground.visible = false;
  
}


function draw() {
background(225)
  
  if(keyDown("space")){
   monkey.velocityY = -15;
  }
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(jungle.x<0){
    jungle.x = jungle.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.9;
  
  monkey.collide(ground);
  
  
  spawnFood();
 spawnObstacles();
 drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black")
  text("survival Time: "+ survivalTime,100,50)
  survivalTime = Math.round(frameCount/frameRate());
  
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(200,200);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //add each cloud to the group
    //FoodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(300,390,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.25;
   obstacle.velocityX = -5;
   obstacle.lifetime = 400;
   
   //obstaclesGroup .add(obstacle);
 }
}






