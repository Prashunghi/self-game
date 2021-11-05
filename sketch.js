var player;
var lazer1, lazer2, lazer3, lazer4, lazer5, lazer6, lazer1Img,lazer2Img;
var diamond, diamondImg;
var edges,leftBoundary,rightBoundary;
var score=0;


function preload(){

//lazer1Img = loadImage("lazer1.png");
//lazer2Img = loadImage("lazer2.png");
diamondImg = loadImage("diamond.png")


}


function setup(){
    var canvas = createCanvas(600,800);

//lazer1 = createSprite(random(150,500),random(300,500),random(10,15),random(50,100));
lazer1 = createSprite(300,400,10,80);
lazer1.shapeColor = "blue"
//lazer1.addImage(lazer1Img);
//lazer1.velocityX = random(5,10);
//lazer1.velocityY= random(5,10);
lazer1.velocityX = (8+ score/3);
lazer1.velocityY= (9 + score/3)

//lazer2 = createSprite(random(25,500),random(25,500),random(10,15),random(50,100));
lazer2 = createSprite(300,400,10,80);
lazer2.shapeColor = "green"
//lazer1.addImage(lazer1Img);
lazer2.velocityX = (9+ score/3);
lazer2.velocityY= (8 + score/3)

//lazer3 = createSprite(random(75,500),random(50,500),random(10,15),random(50,100));
lazer3 = createSprite(300,400,10,80);
lazer3.shapeColor = "orange"
//lazer1.addImage(lazer1Img);
lazer3.velocityX = (8+ score/3);
lazer3.velocityY= (7 + score/3)

//lazer4 = createSprite(random(200,500),random(75,500),random(10,15),random(50,100));
lazer4 = createSprite(300,400,10,80);
lazer4.shapeColor = "pink"
//lazer1.addImage(lazer1Img);
lazer4.velocityX = (7+ score/3);
lazer4.velocityY= ( 9+ score/3)






 diamond = createSprite(400,100,40,40);
diamond.addImage(diamondImg);
diamond.scale = 0.4;
diamond.setCollider("rectangle",0,0,50,50);

diamond.debug = true;


player = createSprite(300,700,50,50);
player.shapeColor = "black";

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
  

score = 0;
stroke("black");
fill("black");
textSize(20);




}

function draw(){
    background(160);


    if(keyIsDown(RIGHT_ARROW)){
        player.velocityX = 10;
        player.velocityY = 0;
      }
      
      if(keyIsDown(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = -10;
      }
      
      if(keyIsDown(DOWN_ARROW)){
        player.velocityX = 0;
        player.velocityY = 10;
      }
      
      if(keyIsDown(LEFT_ARROW)){
        player.velocityX = -10;
        player.velocityY = 0;
      }


    if (lazer1.isTouching(player) || lazer2.isTouching(player) || lazer3.isTouching(player)|| lazer4.isTouching(player)){
         stroke(0);
         fill (0);
         textSize (24);
         text("player is caught", 120, 200);
        // lazer1.setVelocity(0,0);
         lazer1.velocityX = 0;
         lazer1.velocityY = 0;

         lazer2.velocityX = 0;
         lazer2.velocityY = 0;
         
         lazer3.velocityX = 0;
         lazer3.velocityY = 0;
         
         lazer4.velocityX = 0;
         lazer4.velocityY = 0;
         //lazer1.velocityY = 0;
       // lazer2.setVelocity(0,0);
        player.setVelocity(0,0);
        //player.velocityX = 0;
        //player.velocityY = 0;
          
      }



  edges= createEdgeSprites();
    //lazer1.collide(edges[3]);
    player.bounceOff(edges);
    lazer1.bounceOff(edges);
    lazer2.bounceOff(edges);

    lazer3.bounceOff(edges);
    lazer4.bounceOff(edges);
    //lazer1.collide(rightBoundary);
    
if(player.isTouching(diamond)){

  score= score+1;
 // diamond.visible = false;
diamond.y = Math.round(random(25, 775))
diamond.x = Math.round(random(25, 575))
}


    drawSprites();

text("Score:" + score,35,50)


}





