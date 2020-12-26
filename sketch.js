var Twilight, kid1, coin;
var TwilightImage, kid1Image, coinImage, welcomeImage;

var gameState= "start";
textSize(20);
var Tscore= 0;
var Kscore= 0;

function preload () {
TwilightImage= loadImage ("");
kid1Image= loadImage ("");
coinImage= loadImage ("");
welcomeImage= loadImage ("");

}

function setup () {
  var canvas= createCanvas (400,400);
  Twilight= createSprite(104,318,20,20);
 //Twilight.setAnimation("Twilight.jfif_1");
 Twilight.scale= 0.8;

 kid1= createSprite(346,50,20,20);
//kid1.setAnimation("kid_36_1");
kid1.scale= 0.3;
kid1.visible= false;

 coin= createSprite(216,138,20,20);
//coin.setAnimation("coin_gold_1");
coin.scale= 0.7; 

welcome= createSprite(200,200,400,400);
welcome.scale=1.8;
Twilight.visible= false;


}
function draw() {
  background("White");
  fill("purple");
 text(Tscore,10,220);
 text(Kscore,10,190);

if (gameState=== "start"){
  // welcome.setAnimation("Welcome");
 
  
          text("Hey welcome to my game", 70,376);
      text("Press 'f' to start", 110,396);
}

if(keyDown("f")){
  welcome.visible= false;
  gameState="serve";
}

if (gameState==="serve"){
  
    text("PRESS's'TO SERVE",80,185);
    Twilight.visible= true;
    kid1.visible= true;
  
}

  if(keyDown("s")&&gameState==="serve"){
    gameState="play";
//Twilight.visible= true;
//kid1.visible= true;
//welcome.visible= false;
  coin.velocityX=+2;
  coin.velocityY=-2;
  
  }

//kid1.bounceOff(coin);

    
  Twilight.x= coin.x;

kid1.x= World.mouseX;
  
  
  
createEdgeSprites();
coin.bounceOff(leftEdge);
coin.bounceOff(rightEdge);
 coin.bounceOff(kid1);
  coin.bounceOff(Twilight);

if (coin.y>400 || coin.y<0 ) {
  coin.x= 200;
  coin.y= 200;
  coin.velocityY= 0;
  coin.velocityX= 0;

  if (coin.y>400) {
    
  Kscore++;
  }
  else {
    
    Tscore++;
  }
  gameState="serve";
}
if (Tscore===3){
  
    //Twilight.setAnimation("Fluttershy...jfif_1");
    Twilight.addImage (FluttershyImage);
  }
if (Tscore===6){
    
 // Twilight.setAnimation("Rarity.jfif_1");
 Twilight.addImage (RarityImage);
  }
if (Tscore===9){
    
 // Twilight.setAnimation("Pinkie pie.jfif_1");
 Twilight.addImage (PinkiepieImage);
  }
  if (Tscore===12){
      
  //Twilight.setAnimation("applejack.jfif_1");
  Twilight.addImage (applejackImage);
  }
  if (Tscore===15){
     
 // Twilight.setAnimation("ranbow dasn.jfif_1");
 Twilight.addImage (ranbowdasnImage);
  }
  
  if(Tscore===18){
  gameState= "end";  
  }
  
  if(gameState==="end"){
    
    // welcome.setAnimation("Welcome");
welcome.addImage (welcomeImage)
      text("Game Over", 70,76);
      text("Press 'r' to start", 70,96);
    
  }
  
  if(keyDown("r")&&gameState==="end"){
    gameState="serve";
    Tscore=0;
    Kscore=0; 
  }
  
  drawSprites();
  
}
