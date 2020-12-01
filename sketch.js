const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;
var BackgroundImage;

function preload(){
    BackgroundImage=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    

    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,350,50,50);
    box2 = new Box(900,350,50,50);
    box3 = new Box(900,270,50,50)
    box4 = new Box(700,270,50,50);
    box5 = new Box(800,200,50,50);
    pig1 = new Pig(800,350);
    pig2 = new Pig(800,270)
    log1 = new Log(800,300,250,PI/2);
    log2 = new Log(800,250,250,PI/2);
    log3 = new Log(740,200,120,PI/4)
    log4 = new Log(860,200,120,-PI/4) 

    bird1 = new Bird(500,200)
}

function draw(){
    background(BackgroundImage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}