
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,stone,boyIMG,boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,chain,score,tries;
var gameState;
function preload()
{
	boyIMG = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);
	
	score = 0;
	gameState = "play";
	tries = 0;

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(400,600,100,200);
	boy.addImage("person",boyIMG);
	boy.scale = 0.15;

	//Create the Bodies Here.
	ground = new Ground();
	tree = new Tree(950,370,400,640);
	stone = new Stone(325,525,35);

	mango1 = new Mango(970,200);
	mango2 = new Mango(900,350);
	mango3 = new Mango(1020,320);
	mango4 = new Mango(935,280);
	mango5 = new Mango(1030,240);
	mango6 = new Mango(860,270);
	mango7 = new Mango(890,200);
	mango8 = new Mango(1035,160);

	chain = new Chain(stone.body,{x:325,y:525});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  drawSprites();

  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  console.log(score);
  
  if(score === 8){
	gameState = "end";
	textSize(60);
	text("You Win!",570,300);
  }

  textSize(20);
  text("Score: "+score,950,50);
  text("Attempts: "+tries,1050,50);

  Engine.update(engine);
 
}

function mouseDragged() {
	if(gameState === "play"){
		Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
}

function mouseReleased() {
	if(gameState === "play"){
		chain.fly();
		tries++;
	}
}

function keyPressed() {
	if(keyCode === 32&&gameState === "play") {
		chain.attach(stone.body);
		Body.setPosition(stone.body,{x:325,y:525});
	}
}

function detectCollision(object1,object2) {
	pos1 = object1.body.position;
	pos2 = object2.body.position;

	var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);
	if(distance<=object1.r+object2.r){
		Body.setStatic(object2.body,false);
		if(object2.gameState === "attached"){
			score++;
			object2.gameState = "not attached";
		}
	}
}