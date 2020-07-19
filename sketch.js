var database;
var game;
var player;
var form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game= new Game();
  game.start();

  


}

function draw(){
  background("white");
  
   
    drawSprites();
  
}

