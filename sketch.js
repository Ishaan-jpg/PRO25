
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var box
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,200,40)
	ground = new Ground(width/2,390,width,20)
	box = new Box(850,400,100,20)
	box2 = new Box(885,395,20,150)
	box3 = new Box(815,395,20,150)
	
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(255);
 
 
 box2.display()
 box3.display()
 box.display()
 ground.display()
 paper.display()
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85});
	}
}


