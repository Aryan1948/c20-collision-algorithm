 var fixedObject;
 var movingObject;
function setup() {
  createCanvas(800,400);
  fixedObject = createSprite(400,200,50,100);
  fixedObject.shapeColor="green";
  fixedObject.debug=true;
  movingObject = createSprite(600,200,50,100);
  movingObject.shapeColor="green";
  movingObject.debug = true;


}

function draw() {
  background("black");  
  movingObject.x=mouseX;
  movingObject.y=mouseY;
  if (movingObject.x-fixedObject.x<movingObject.width/2+fixedObject.width/2
    && fixedObject.x-movingObject.x<movingObject.width/2+fixedObject.width/2
    &&movingObject.y-fixedObject.y<fixedObject.height/2+movingObject.height/2
    &&fixedObject.y-movingObject.y<fixedObject.height/2+movingObject.height/2)


  {
     movingObject.shapeColor="blue";
     fixedObject.shapeColor="red";

    }
    else {
    fixedObject.shapeColor="green";
    movingObject.shapeColor="green";
    }
  drawSprites();
    }