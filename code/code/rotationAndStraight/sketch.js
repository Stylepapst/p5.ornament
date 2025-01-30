const sketchWith = 600;
const sketchHight = 600;
const extraWith = 60;
const extraHight = 60;

let extraCanvas;

function preload(){
  // preload assets
}

function setup() {
  angleMode(DEGREES);
  
  createCanvas(sketchWith, sketchHight);

  extraCanvas = createGraphics(extraWith, extraHight);
  extraCanvas.background(100, 100, random(100, 255));
  extraCanvas.noStroke();
  
  for(let x = 0; x <= 10; x += 1) {
    extraCanvas.push();

    extraCanvas.fill(50, 50, random(50, 255));

    let y = Math.ceil(random(0, 4));
    if(y === 1) {
      extraCanvas.rectMode(CENTER);
      extraCanvas.translate(extraWith / Math.ceil(random(0, 4)), 
      extraHight / Math.ceil(random(0, 4)));
      extraCanvas.rotate(15 * Math.ceil(random(0, 7)));
      
  
      let z = Math.ceil(random(0, 2));
      if(z === 1) {
        extraCanvas.rect(0, 0, 
          10 * Math.ceil(random(0, 2)),
          200);
      } else {
        extraCanvas.rect(0, 0, 
          200,
          10 * Math.ceil(random(0, 5)));
      }
      extraCanvas.pop();
    } else {
      extraCanvas.fill(50, 50, random(50, 255));
      extraCanvas.rect(10 * Math.floor(random(0, 6)),
        10 * Math.floor(random(0, 6)),
        10 * Math.ceil(random(0, 4)),
        sketchWith / Math.ceil(random(0, 2)));
    }
   
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
  