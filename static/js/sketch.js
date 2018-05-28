let guys = []
const numOfVehicles = 10;
const boardWidth = 800
const boardHeight = 400;

function setup() {
  createCanvas(boardWidth, boardHeight);
    
  for (let x=0; x< numOfVehicles; x++){
    // pick a random x,y
    let x = random(width)
    let y = random(height)
    guys.push(new Vehicle(x, y))
  }
    target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  fill(255, 70)
  ellipse(mouseX, mouseY, 40, 40);

  for (let x=0; x< numOfVehicles; x++){
    let guy = guys[x]
    // send a sample of what this guy can see to him
    // then call yourdesiredvector = guy.decide(listOfPlayers, boardWidth, boardHeight, areYouIt);
    guy.seek(createVector(mouseX, mouseY))
    guy.update()
    guy.display()
  }
  
}