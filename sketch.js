const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var pig;
var log;
var box3;
var box4;
var pig2;
var box5;
var log3;
var bird;


function setup(){
    var canvas = createCanvas(2600,1400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(2000,1100,50,100);
    box2 = new Box(2300 ,1100,50,100);
    ground = new Ground(1300,1200,2600,20);
    pig = new Pig(2150,1100);
    log = new Log(2150,1050,400,PI/2);
    log2 = new Log(2150,800,400,PI/2);
    box3 = new Box(2000,1000,50,100);
    box4 = new Box (2300,1000,50,100);
    pig2 = new Pig (2150,1000);
    box5 = new Box (2150,750,58,100);
    log3 = new Log (2100,750,200,PI/7);
    log4 = new Log (2180,750,200,-PI/7);
    bird = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}