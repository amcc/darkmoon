// let xOff = 0;
// let yOff = 1;
// let zOff = 2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('assets/nasastar-med.jpg');
}

function draw() {
  background(255);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  
  // ambientLight(50);
  
  // pointLight(0, 0, 255, locX, locY, 250);
  
  push()
  noStroke();
  texture(img);
  translate(0, 0, height/2);
  rotateY(millis() / 40000);
  sphere(300);
  pop();
  
  push();
  pointLight(10, 10, 10, 10, -40, 0);
  fill(0);
  // stroke(0,255,0);
  noStroke();
  translate(0, 0, height/4);
  rotateY(millis() / 40000);
  // ambientMaterial(250);
  specularMaterial(250);
  sphere(200, 24,24);
  pop();
  
//   xOff+=0.001;
//   yOff+=0.001;
//   zOff+=0.001;
}