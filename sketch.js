var backgroundImage,backgroundImg ;

function preload () {

backgroundImage = loadImage("Background.jpg");


}

function setup (){
createCanvas (1200,800);
backgroundImg = createSprite (0,300,1200,600);
backgroundImg.addImage ("background",backgroundImage);
backgroundImg.scale=3;
//backgroundImg.x=backgroundImg.width/2;
backgroundImg.velocityX = -2;


  



}

function draw (){

background (255)

    


    if (backgroundImg.x<200){

//backgroundImg.x = backgroundImg.width/2;
backgroundImg.x = 400



}






drawSprites()



}