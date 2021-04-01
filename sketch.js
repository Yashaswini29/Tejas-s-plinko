var smoke1 = [];
var smoke2 = [];
var smoke3 = [];
var smoke4 = [];

var balls = [];
var outline1;
var outline2;
var outline3;
var outline4;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var plates = [];

function setup(){
    var canvas = createCanvas(600,650);
    engine = Engine.create();
    world = engine.world;

   

    outline1 = new Outline(300,645,760,10);
    
    outline2 = new Outline(300,5,760,10);
   
    outline3 = new Outline(5,645,10,1400);
   
    outline4 = new Outline(595,645,10,1400);
    
    
    for (var i = 125; i<=width; i=i+120){
      plates.push(new Plate(i,520,10,250));
    }

    for (var i = 20; i<=width; i=i+70){
      smoke1.push(new Smoke(i,70,10,10));
    }

    for (var i = 70; i<=width; i=i+80){
      smoke2.push(new Smoke(i,130,10,10));
    }

    for (var i = 20; i<=width; i=i+70){
      smoke3.push(new Smoke(i,190,10,10));
    }

    for (var i = 70; i<=width; i=i+80){
      smoke4.push(new Smoke(i,260,10,10));
    }
    

    var render = Render.create({
      element:document.body,
      engine:engine,
      options:{
        width:600,
        height:650,
        wireframes:false
      }
    })
    
    Render.run(render)
  }

function draw(){
    background("purple");
    Engine.update(engine);
    outline1.display();
    outline2.display();
    outline3.display();
    outline4.display();

    for(var k=0;k<smoke1.length;k++){
      smoke1[k].display();
    }

    for(var l=0;l<plates.length;l++){
      plates[l].display();
    }

    for(var k=0;k<smoke2.length;k++){
      smoke2[k].display();
    }

    for(var k=0;k<smoke3.length;k++){
      smoke3[k].display();
    }

    for(var k=0;k<smoke4.length;k++){
      smoke4[k].display();
    }

   if(frameCount%40===0){
    ball = new Ball(random(10,640),20,10);
    balls.push(ball);
   }

   for(var k=0;k<balls.length;k++){
    balls[k].display();
  }
}