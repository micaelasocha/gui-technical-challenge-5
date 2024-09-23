let d = 60;
let deg = 58;
let outline = true;

let gui;
let diameterSlider, degSlider, oulineCheckbox;



function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10)

gui = createGui();
gui.setRounding(1);
diameterSlider = createSlider("Diameter", 200, 10, 100, 20,100);
diameterSlider.onChange = diameterSliderChange;
diameterSlider.setStyle({
fillBg: color('blue'),
strokeWeight: 4
})
degSlider = createSlider("rotation", 200,40, 100,20, 0,180);
degSlider.isInteger = true;
degSlider.val = 23;
outlineCheckbox = createCheckbox("Outline", 340,10, 20,20, true);
}

function draw() {
  background(125);
  drawGui();

  if (outlineCheckbox.val){
  stroke("black");
  } else{
  noStroke();
  }


  circle(100,200,diameterSlider.val);

  push();
  translate(200,200);
  rotate(radians(degSlider.val));
  rect(0,0,60,60);
  pop();


  noStroke();
  text(diameterSlider.label, 140, 20);

}

function diameterSliderChange() {

}