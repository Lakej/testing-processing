var pos = {
  x: 200,
  y: 100
};

            
function setup() {
    createCanvas(1080, 500);
}

var value = 0;

function movimiento(){
  if(keyIsPressed && key === 'w'){
     pos.y -= 5;
  }else if(keyIsPressed && key === 's'){
    pos.y += 5;
  }else if(keyIsPressed && key === 'a'){
    pos.x -= 5;
  }else if(keyIsPressed && key === 'd'){
    pos.x += 5;
  }
}

function draw() {
  background('#B3374D');
  fill(value);
  rect(pos.x, pos.y, 50, 50);
  movimiento();
  
}
  
  
  
