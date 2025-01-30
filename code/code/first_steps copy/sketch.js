let color1; 
let color2;
let color3;
let color4;
let boxWith;
let boxHight;


function preload(){
  // preload assets
}

function setup() {
  color1 = color(random(0, 255), 50, 50);
  color2 = color(random(0, 255), 50, 50);
  color3 = color(random(0, 255), 50, 50);
  color4 = color(random(0, 255), 50, 50);
  color5 = color(random(0, 255), 50, 50);
  boxWith = (300);
  boxHight = (100);
  createCanvas(400, 400);
}

function draw() {
  background(color5);

  noStroke();

  fill(color1);
  rect(0, 0, boxWith, boxHight);
  
  fill(color2);
  rect(0, 100, boxWith, boxHight);

  fill(color3);
  rect(0, 200, boxWith, boxHight);

  fill(color4);
  rect(300, 0, boxHight, boxWith);
  

}
