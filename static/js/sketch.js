let guy

function setup() {
  createCanvas(800, 400);
 
    guy = new Vehicle()
  target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  fill(255, 70)
  ellipse(mouseX, mouseY, 40, 40);
  guy.seek(createVector(mouseX, mouseY))
  guy.update()
  guy.display()
}