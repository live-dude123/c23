const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground
var box1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   var g1={
   isStatic:true
   }
ground = Bodies.rectangle(200,380,400,10,g1)
World.add(world,ground)
    object = Bodies.rectangle(200,100,20, 20);
    World.add(world,object);

    console.log(object);
    box1=new Box(200,200,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
   
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,10)
   rectMode(CENTER);
   rect(object.position.x,object.position.y,40,40);

 box1.display()


}