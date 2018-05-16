class Vehicle {
 
//   PVector location;
//   PVector velocity;
//   PVector acceleration;
// Additional variable for size
//   float r;
//   float maxforce;
//   float maxspeed;
 
  constructor (x, y) {
    this.acc = createVector(0,0);
    this.vel = createVector(0,0);
    this.location = createVector(x,y);
    this.r = 10.0;
    this.maxspeed = 4;
    this.maxforce = 0.1;
  }
 
// Our standard “Euler integration” motion model
   update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.location.add(this.vel);
    this.acc.mult(0);
  }
 
// Newton’s second law; we could divide by mass if we wanted.
  applyForce(force) {
    this.acc.add(force);
  }
 
// Our seek steering force algorithm
seek(target) {
    const desired = target.sub(this.location);
    desired.normalize();
    desired.mult(this.maxspeed);
    const steer = desired.sub(this.vel);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }
 
 display() {
// Vehicle is a triangle pointing in the direction of velocity; since it is drawn pointing up, we rotate it an additional 90 degrees.
    const theta = this.vel.heading() + PI/2;
    const r = this.r
    fill(175);
    stroke(0);
    push();
    translate(this.location.x,this.location.y);
    rotate(theta);
    beginShape();
    vertex(0, -r*2);
    vertex(-r, r*2);
    vertex(r, r*2);
    endShape(CLOSE);
    pop();
  }
}