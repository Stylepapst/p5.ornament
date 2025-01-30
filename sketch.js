let color1;
let color2;

let boxHight;
let boxWith;

let sketchWith;
let sketchHight;

function preload(){
  // preload assets
}

function setup() {

  sketchWith = 1000;
  sketchHight = 600;
  
  color1 = color(20, 20, (10 * random(2, 25.5)));
  createCanvas(sketchWith, sketchHight);

  background(color1);
  noStroke();
  
  for(let x = 0; x <= sketchWith / 10; x += 1) {
    for(let y = 0; y <= sketchHight / 10; y += 1) {
      
      color1 = color(100, 100, random(100, 255));
      fill(color1);

      boxWith = (Math.ceil(random(1, 60))) * 10;
      boxHight = (Math.ceil(random(1, 60))) * 10;

      rect(
        x * (10 * (Math.ceil(random(1, 10)))),
         y * (10 * (Math.ceil(random(1, 5)))), boxWith, boxHight);
    }
  }

  
}

function draw() {
  
  
  
} 