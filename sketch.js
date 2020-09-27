const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var slingshot;  
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  ground = new Ground(400, 350, 300, 20);
  block1 = new Box(300, 330, 30, 40);
  block2 = new Box(330, 330, 30, 40);
  block3 = new Box(360, 330, 30, 40);
  block4 = new Box(390, 330, 30, 40);
  block5 = new Box(420, 330, 30, 40);
  block6 = new Box(450, 330, 30, 40);
  block7 = new Box(480, 330, 30, 40);
  block8 = new Box(330, 290, 30, 40);
  block9 = new Box(360, 290, 30, 40);
  block10 = new Box(390, 290, 30, 40);
  block11 = new Box(420, 290, 30, 40);
  block12 = new Box(450, 290, 30, 40);
  block13 = new Box(360, 250, 30, 40);
  block14 = new Box(390, 250, 30, 40);
  block15 = new Box(420, 250, 30, 40);
  block16 = new Box(390, 210, 30, 40);
  polygon = new Box(50, 200, 50, 50);
  slingshot = new SlingShot(polygon.body, {x:100, y:200});
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  slingshot.display();
}
function mouseDragged() {
  polygon.body.position.x = mouseX;
  polygon.body.position.y = mouseY;
}
function mouseReleased() {
  slingshot.fly();
}