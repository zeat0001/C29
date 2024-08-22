const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImg;
var canvas;
var angle, cannon;
var cannonBall;
function preload(){
  backgroundImg = loadImage("./assets/background.gif");
}

function setup() {
  //createCanvas(400,400);
  canvas = createCanvas(1200,600)

  engine = Engine.create();
  world = engine.world;

  angle = -PI/4
  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,100,50,angle);
  cannonBall = new CannonBall(cannon.x, cannon.y)

  /*rectMode(CENTER);
  ellipseMode(RADIUS);*/
}

function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  tower.display();
  cannon.display();
  cannonBall.display();
   
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    cannonBall.shoot();
  }
}