function preload(){
  // preload assets
}
function setup() {
  createCanvas(800, 400);
  noLoop();
  noStroke();
}

function draw() {
  background(30);

  // Base colors for the facade
  let lightGray = color(200, 200, 200);
  let darkGray = color(50, 50, 50);

  // Draw the building base
  for (let i = 0; i < 8; i++) {
    let yOffset = i * 40;
    let heightFactor = 300 - i * 25; // Tiered structure
    fill(lerpColor(lightGray, darkGray, i / 8)); // Gradient for depth
    rect(100 + yOffset, 100 + yOffset, width - 200 - yOffset * 2, heightFactor, 10);
  }

  // Add facade stripes
  for (let x = 120; x < width - 120; x += 20) {
    for (let y = 140; y < 320; y += 20) {
      if ((x + y) % 40 === 0) {
        fill(60);
      } else {
        fill(180);
      }
      rect(x, y, 10, 10); // Small repeating windows
    }
  }

  // Add horizontal beams
  stroke(120);
  strokeWeight(3);
  for (let i = 0; i < 5; i++) {
    let yBeam = 120 + i * 50;
    line(100 + i * 20, yBeam, width - 100 - i * 20, yBeam);
  }
}

