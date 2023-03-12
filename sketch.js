
  
var garden,rabbit;
var gardenImg,rabbitImg;
var red2,apple,orangel
var appleImg,orangeImg,redImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  function createOrange(){
    orangel = createSprite(random(50,350),40,10,10);
    orangel.addImage(orangeImg)
    orangel.scale = 0.08;
    orangel.velocityY = 3;
    orangel.lifetime = 150;
  }
  function createAppeles(){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg)
    apple.scale = 0.08;
    apple.velocityY = 3;
    apple.lifetime = 150;
    }
    function createRed(){
      red2 = createSprite(random(50,350),40,10,10);
      red2.addImage(redImg)
      red2.scale = 0.08;
      red2.velocityY = 3;
      red2.lifetime = 150;
      }

var select_sprites = Math.round(random(1,3));
   
      
  if (frameCount % 80 ==0){
   if (select_sprites == 1) {
      createAppeles();
    } else if (select_sprites == 2) {
      createOrange();
    } else {
      createRed();
    }
  
  }


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

}
rabbit.x = World.mauseX;
