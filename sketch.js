let sirwoof=0;
let sunHeight=600;
let snack=50;
let redVal = 0;
let greenVal = 0;

function setup() {
	createCanvas(600, 400); 
}

function draw() {
  background(redVal,greenVal,0); 
  fill(255,135,5,60);
  ellipse(300,sunHeight,180);
  fill(255,100,0,100);
  ellipse(300,sunHeight,140);
  stroke(255,255,127); 
  fill(0,0,0,255); 
  ellipse(sirwoof,350,50,50); 
ellipse(snack,350,20,20);
textSize(22);
  fill(random(0,255));
  stroke(255);
  strokeWeight(5);
  text('Woof!',sirwoof,300);
  textSize(12);
  fill(random(0,255));
  stroke(255);
  strokeWeight(5);
  text('Slowpoke!',snack,330);
if (sunHeight>130) {
  sunHeight-=2;
}
if (sunHeight<480) {
  redVal+=4;
  greenVal+=1;
}
}
function mousePressed(){
if (sirwoof>=500) {sirwoof=0;} else {sirwoof=sirwoof+50;}

if (snack>=500) {snack=50;} else {snack=snack+50;}
}

