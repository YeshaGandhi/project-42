var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
  

}

function draw() {
  background(255,255,255); 
  translate(400,400);
  rotate(-90);
  hr=hour()
  mn=minute()
  sc=second()

hrAngle=map(hr%12,0,12,0,360)
mnAngle=map(mn,0,60,0,360)
scAngle=map(sc,0,60,0,360)

push();
rotate(scAngle);
strokeWeight(7);
stroke("red");
line(0,0,100,0);
pop();

push();
rotate(mnAngle);
strokeWeight(7);
stroke("blue");
line(0,0,80,0);
pop();

push();
rotate(hrAngle);
strokeWeight(7);
stroke("green");
line(0,0,70,0);
pop();

noFill();
stroke("red")
arc(0,0,300,300,0,scAngle);

noFill();
stroke("blue")
arc(0,0,200,200,0,mnAngle);

noFill();
stroke("green")
arc(0,0,100,100,0,hrAngle);





  drawSprites();
}