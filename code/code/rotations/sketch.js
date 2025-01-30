const sketchWith = 600;
const sketchHight = 600;

let extraCanvas;

function preload(){
  // preload assets
}

function setup() {
  angleMode(DEGREES);
  
  createCanvas(sketchWith, sketchHight);

  extraCanvas = createGraphics(60, 60);
  extraCanvas.background(100, 100, random(100, 255));
  extraCanvas.noStroke();
  
  for(let x = 0; x <= 3; x += 1) {
    push();

    extraCanvas.fill(random(100, 255), random(100, 255), random(100, 255));
    extraCanvas.rectMode(CENTER);

    extraCanvas.translate(Math.floor(random(0, 7)), Math.floor(random(0, 7)));
    extraCanvas.rotate(15 * Math.ceil(random(0, 7)));

    let z = Math.ceil(random(0, 2));
    if(z === 1) {
      extraCanvas.rect(0, 0, 
        10 * Math.ceil(random(0, 3)),
        200);
    } else {
      extraCanvas.rect(0, 0, 
        200,
        10 * Math.ceil(random(0, 3)));
    }
    pop();
  }
    

    for(let a = 0; a <= 10; a += 1) {
      for(let b = 0; b <= 10; b +=1) {
        if(a % 2 === 0 && b % 2 === 0) {
          image(extraCanvas, a * 60, b * 60);
        } else if(a % 2 != 0 && b % 2 === 0){
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
  
  
  function draw() {  
  } 


  }