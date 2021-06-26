const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;

var divisions=[];
var plinkos=[];
var particle=[];

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,590,800,10);

  for(var i=10;i<800;i=i+87.1){
    divisions.push(new Ground(i,470,10,250));
  }
  
  for(var i=75;i<750;i=i+50){
      plinkos.push(new Plinko(i,50,10))
    }

  for(var i=25;i<800;i=i+50){
    plinkos.push(new Plinko(i,125,10))
  }

  for(var i=75;i<750;i=i+50){
    plinkos.push(new Plinko(i,200,10))
  }
  for(var i=25;i<800;i=i+50){
    plinkos.push(new Plinko(i,275,10))
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();


  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(50,750),0,10));
  }

  for(var i=0;i<particle.length;i++){
    particle[i].display();
  }

}