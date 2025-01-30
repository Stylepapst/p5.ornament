
function preload(){
  // preload assets
}

function setup() {
  squareSize = random(4, 80);

  sketchWith = squareSize * (2 * Math.floor(random(1, 11)) - 1);
  sketchHight = squareSize * (2 * Math.floor(random(1, 11)) - 1); 

  spacing = squareSize * 2; 
  columns = Math.ceil(sketchWith / spacing);
  rows = Math.ceil(sketchHight / spacing);

  color1 = color(100, 100, random(100, 255));
  color2 = color(100, 100, random(100, 255));
  createCanvas(sketchWith, sketchHight);
}

function draw() {
  
  background(color1);
  noStroke();
  fill(color2);
  
  for(let x = 0; x <= columns; x += 1) {
    for(let y = 0; y <= rows; y += 1) {
      //scolor1 = color(100, 100, random(100, 255));
      square(spacing * x, spacing * y, squareSize);
    }
  }
} 