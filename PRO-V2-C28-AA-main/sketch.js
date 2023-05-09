const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var backgroundImg;
var torre,torreImg;

var cannon;
var angle=20;

function preload() {
  
backgroundImg = loadImage("./assets/background.gif")
torreImg = loadImage("./assets/tower.png")


}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  torre = Bodies.rectangle(160,350,160,310,options)
  World.add(world,torre)

  cannon = new Cannon(180,110,130,100,angle)

}
 

function draw() {

 background("darkblue")
 image(backgroundImg,0,0,1200,601)
 

  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push ();
  imageMode(CENTER);
  image(torreImg,torre.position.x,torre.position.y,160,310)
  pop ()

  cannon.display ();

}

