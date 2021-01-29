const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(100,100,100,10);
  hero = new Hero(300,300,500,200);
  fly = new Fly(hero.body,{x:100, y:100});


}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  mouseDragged();
  ground.display();
  hero.display();
  fly.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}