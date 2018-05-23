const FREEZE_TIME = 1000
const boardWidth = 800
const boardHeight = 400
const players = []

function setup() {
  createCanvas(boardWidth, boardHeight);

    const guy = new Vehicle()
    guy.decide = () => {
      guy.seek(createVector(mouseX, mouseY))
    }
    players.push(guy)
    target = createVector(width / 2, 50);

    //
    // HOW TO ADD YOUR VEHICLE
    //
    dtrejo = new Vehicle(Math.random() * boardWidth, Math.random() * boardWidth)
    window.dtrejo = dtrejo
    dtrejo.decide = function dtrejoDecide(listOfPlayers, boardWidth, boardHeight, areYouIt) {
      // console.log('dtrejoDecide', listOfPlayers, boardWidth, boardHeight, areYouIt);

      //
      // start example algorithm
      dtrejo.seek(createVector(mouseX, mouseY))
      // end example algorithm
      //

      // keep the vel that is set by the example algorithm
      return dtrejo.vel
    }
    players.push(dtrejo)
}

// TODO: collisions.
// Easy way: before drawing, check if it is already colored in,
// then freeze the player whose color it is. all players need unique colors.
function draw() {
  background(0);
  fill(255, 70)
  ellipse(mouseX, mouseY, 40, 40);

  let areYouIt = false
  let i, player, newVel
  let playerData = players.map(({ location, vel, acc, freeze }) => {
    return { location, vel, acc, freeze }
  })
  for (let i = 0; i < players.length; i++) {
    player = players[i]
    if (!player.decide) {
      continue
    }
    if (player.freeze && player.freeze > Date.now() - FREEZE_TIME) {
      continue
    }
    newVel = player.decide(playerData, boardWidth, boardHeight, areYouIt)
    player.vel = newVel
    player.update()
    player.display()
  }
}
