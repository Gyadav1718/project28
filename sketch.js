
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObj,groundObj	
var  myWorld, myEngine;
var ballImage,loncher;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	dustbinObj=new dustbin(1200,680);
	
	paperObj=new paper(200,450,40);
    loncher= new Loncher(paperObj.body,{x:200, y:300})
	groundObj=new ground(width/2,670,width,20);
		

	var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(myEngine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  groundObj.display();
  paperObj.display();
  dustbinObj.display();
  loncher.display();
  
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY});
	}
	function mouseReleased(){
		loncher.fly();
	}
	

