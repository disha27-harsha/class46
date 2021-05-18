var background,backgroundImg;
var boy,boyImg;
var girl,girlImg;
var scoreboard,scoreboardImg;
var ball,ballImg;

function preload(){
backgroundImg =loadImage("background2.png");
boyImg =loadImage("boy.png");
girlImg =loadImage("girl.png");
scoreboardImg =loadImage("score.PNG");
ballImg =loadImage("ball.png");
}

function setup(){
canvas = createCanvas(displayWidth,displayHeight)
 backgroundsprite = createSprite(700,370,20,20)
 backgroundsprite.addImage(backgroundImg)
 backgroundsprite.scale=1.3
 
 boysprite=createSprite(700,55,10,10)
 boysprite.addImage(boyImg)
 boysprite.scale=0.6

 girlsprite=createSprite(700,530,50,50)
 girlsprite.addImage(girlImg)
 girlsprite.scale=2.0

 ball=createSprite(700,280,10,10)
 ball.addImage(ballImg)
 ball.scale=0.06

 
}

function draw(){
background("white")

if(keyDown("space")){
   ball.velocityX=Math.round(random(2,5))
   ball.velocityY=Math.round(random(5,8))
}

if(keyDown("left")){
   girlsprite.x=girlsprite.x-5
}

if(keyDown("right")){
    girlsprite.x=girlsprite.x+5
}
 
drawSprites();
}

