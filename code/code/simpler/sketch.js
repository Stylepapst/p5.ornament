let color1;
let color2;

let boxHight;
let boxWith;

const sketchWith = 600;
const sketchHight = 600;

let extraCanvas;

function preload(){
  // preload assets
}

function setup() {
  
  color1 = color(20, 20, (10 * random(2, 25.5)));
  createCanvas(sketchWith, sketchHight);

  extraCanvas = createGraphics(60, 60);
  extraCanvas.background(0, 0, 255);
 
  extraCanvas.noStroke();
  decodeURIComponent
  for(let x = 0; x <= 6; x += 1) {
    for(let y = 0; y <= 6; y += 1) {
      
      color1 = color(100, 100, random(100, 255));
      extraCanvas.fill(color1);

      boxWith = (10 * (Math.ceil(random(1, 6))));
      boxHight = (10 * (Math.ceil(random(1, 6))));

      extraCanvas.rect(
        x * ((Math.ceil(random(1, 10)))),
         y * ((Math.ceil(random(1, 10)))), boxWith, boxHight);
    }
  }

  for(let a = 0; a <= 10; a += 1) {
    for(let b = 0; b <= 10; b +=1) {
      if(a % 2 === 0 && b % 2 === 0) {
        image(extraCanvas, a * 60, b * 60);
      } 
      else if(a % 2 != 0 && b % 2 === 0){
        push();
        scale(-1, 1);
        image(extraCanvas, a * (-60) - 60, b * 60);
        pop();
      } else if(a % 2 != 0 && b % 2 != 0){
        push();
        scale(-1, -1);
        image(extraCanvas, a * (-60) - 60, b * (-60) - 60);
        pop();
      } else {
        push();
        scale(1, -1);
        image(extraCanvas, a * 60, b * (-60) - 60);
        pop();
      }
    }
  }
}

function draw() {  
} 