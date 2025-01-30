const sketchWith = 600;
const sketchHight = 600;
const extraWith = 60;
const extraHight = 60;

let boxWith;
let boxHight;

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
  
  for(let x = 0; x <= extraWith; x += 1) {
    for(let y = 0; y <= extraHight; y += 1) {
      
      boxWith = (Math.ceil(random(1, 10)));
      boxHight = (Math.ceil(random(1, 120)));   
     
      extraCanvas.fill(50, 50, random(50, 255));

      let a = Math.ceil(random(0, 5));
      if(a === 1) {
        extraCanvas.push();
        extraCanvas.rectMode(CENTER);
        extraCanvas.translate(x * Math.ceil(random(0, 5)), y * Math.ceil(random(0, 5)));
        extraCanvas.rotate(15 * Math.ceil(random(0, 7)));
        
        extraCanvas.rect(0, 0, boxWith, boxHight);
      
        extraCanvas.pop();

      }else {
        let b = Math.ceil(random(0, 2));
        if(b === 1) {
          extraCanvas.rect(x * Math.ceil(random(0, 5)), y * Math.ceil(random(0, 5)),
           boxWith, boxHight);
        }else {
          extraCanvas.rect(x * Math.ceil(random(0, 5)), y * Math.ceil(random(0, 5)),
           boxHight, boxWith);
        }  
      }
    }
  }
  
  for(let c = 0; c <= 10; c += 1) {
    for(let d = 0; d <= 10; d +=1) {
      if(c % 2 === 0 && d % 2 === 0) {
        image(extraCanvas, c * 60, d * 60);
      } else if(c % 2 != 0 && d % 2 === 0){
        push();
        scale(-1, 1);
        image(extraCanvas, c * (-60) - 60, d * 60);
        pop();
      } else if(c % 2 != 0 && d % 2 != 0){
        push();
        scale(-1, -1);
        image(extraCanvas, c * (-60) - 60, d * (-60) - 60);
        pop();
      } else {
        push();
        scale(1, -1);
        image(extraCanvas, c * 60, d * (-60) - 60);
        pop();
      }
    }
  }

  function draw() {  
  }
}