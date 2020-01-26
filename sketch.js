var bgValue = 0;
var fillValue = 255;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background(bgValue);
  noStroke();
  fill(fillValue);
  var dotDim = 1;
  
  for (var x = 0; x <= width; x += 25) {
    for (var y = 0; y <= height; y += 25) {
    ellipse(x, y, dotDim, dotDim);
    }
    dotDim = dotDim + 1;
  }
}