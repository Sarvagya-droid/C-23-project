var helicopterSprite, packageSprite;
var ground;
//var box1, box2, box3;
var key1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var world, body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var package_options={
		isStatic:true
	}

	packageSprite=Bodies.circle(width/2, 80, 10, package_options, {restitution:0.5});
	packageSprite.visible = false;
	World.add(world, packageSprite);

	key1 = 0;

	helicopterSprite=Bodies.rectangle(width/2, 200, 10,10);
	World.add(world, helicopterSprite);

	ground=Bodies.rectangle(width/2, height-35, width,10);
	ground.shapeColor=color(255)
	World.add(world, ground);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	ellipseMode(CENTER);
	ellipse((packageSprite.body.position.x , packageSprite.body.position.y , 10, 10));
	rectMode(CENTER);
	rect(helicopterSprite.position.x, helicopterSprite.position.y, helicopterSprite.width, helicopterSprite.height);
	rect(ground.position.x, ground.position.y, ground.width, ground.height);
    background(0);

  //packageSprite.position.x = helicopterSprite.position.x;	
  if(key1 === 0){
	  keyPressed();
  }
  if (keyCode === RIGHT_ARROW) {
	helicopterSprite.velocityX = helicopterSprite.velocityX+0.1;
  }  

  if (keyCode === LEFT_ARROW) {
	helicopterSprite.velocityX = helicopterSprite.velocityX-0.1;
  } 
  console.log(key1,packageSprite.position.x,packageBody.position.x,helicopterSprite.position.x)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	//packageSprite.position.x = helicopterSprite.position.x;
	packageSprite.visible = true;
	packageSprite.position.x = helicopterSprite.position.x;
	key1=1;
  }
  else if(keyWentUp(DOWN_ARROW)){
	//packageBody.position.x=packageSprite.position.x;
	key1 = 1;
  }
}



