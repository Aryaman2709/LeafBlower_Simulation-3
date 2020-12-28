//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var leaves = [];
var edges;


function preload()
{
  //load images here
  backgroundImage = loadImage("garden.jpg");
  leafBlowerImage = loadImage("leafblower.png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  leafBlower = createSprite(175,150,50,50)
  leafBlower.addImage(leafBlowerImage);
  leafBlower.scale = 0.35

  invisible = new Invisible(leafBlower.x + 50, leafBlower.y, 175,150)
  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  if(keyDown(DOWN_ARROW)){
    leafBlower.y = leafBlower.y + 5;
  }

  if(keyDown(UP_ARROW)){
    leafBlower.y = leafBlower.y - 5;
  }

  if(keyDown(RIGHT_ARROW)){
    leafBlower.x = leafBlower.x + 5;
  }

  if(keyDown(LEFT_ARROW)){

    leafBlower.x = leafBlower.x - 5;
  }


  if (frameCount%10===0){
    leaves.push(new Leaf(random(100,700), random(100,700)))
  }

  for(var k = 0; k<leaves.length; k++){
    leaves[k].display();
  }
 
  drawSprites();
  //add styles here

  edges =  createEdgeSprites();
  leafBlower.collide(edges[0]);
  leafBlower.collide(edges[1]);
  leafBlower.collide(edges[2]);
  leafBlower.collide(edges[3]);

 // if(isTouching(invisible, leaves[length-1])){
    //Matter.Body.applyForce(leaves[length-1].body,{x:5, y:5})
 // }
  
  

}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true;
}
else {
  return false;
}
}


