/*
Inspired by a quote from the astronaut Michael Collins (see down below)

https://github.com/amcc/darkmoon

Some helpful pages if you want to understand whats going on:
https://p5js.org/examples/form-3d-primitives.html
https://p5js.org/examples/3d-multiple-lights.html
https://p5js.org/examples/3d-textures.html
*/

let rotationSpeed = 40000;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('assets/nasastar-med.jpg');
}

function draw() {
  background(255);
  
  // create the starfield sphere
  push()
  
  noStroke();
  // stroke(0,255,0);
  texture(img);
  translate(0, 0, height/2);
  rotateY(millis() / rotationSpeed);
  sphere(300);
  pop();
  
  // create the dark sphere
  push();
  pointLight(10, 10, 10, 10, -40, 0);
  fill(0);
  noStroke();
  // stroke(0,255,0);
  translate(0, 0, height/4);
  rotateY(millis() / rotationSpeed);
  specularMaterial(250);
  sphere(200, 24,24);
  pop();
}

/*
"I don’t mean to deny a feeling of solitude. It is there, reinforced by the fact that radio contact with the earth abruptly cuts off at the instant I disappear behind the moon. I am alone now, truly alone, and absolutely isolated from any known life. I am it. If a count were taken, the score would be three billion plus two over on the other side of the moon, and one plus God only knows what on this side. I feel this powerfully—not as fear or loneliness—but as awareness, anticipation, satisfaction, confidence, almost exultation. I like the feeling. Outside my window I can see stars—and that is all. Where I know the moon to be, there is simply a black void; the moon’s presence is defined solely by the absence of stars." (from "Carrying the Fire: An Astronaut's Journeys" by Michael Collins)
*/