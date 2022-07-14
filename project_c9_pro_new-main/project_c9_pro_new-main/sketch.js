var backyground;
var  greenwall;
var  redwall;
var  waterwall;
var  yellowwall;
var box;

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "purple";
}

function draw() 
{
  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
    backyground = "right";
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    backyground = "left";
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    backyground = "up";
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    backyground = "down";
  }

  /*if(keyIsDown(S)){
    box.y -= 3;
  }

  if(keyIsDown(W)){
    box.y += 3;
  }

  if(keyIsDown(A)){
    box.x -= 3;
  }

  if(keyIsDown(D)){
    box.x += 3;
  }
  
  drawSprites(); esse código não funciona por algum motivo, eu iria usar ele como base pro movimento da box 
  para inserir as walls que foram declaradas no começo, mas como não deu acabei não inserindo*/
}

