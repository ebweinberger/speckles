let button;
let original_width;
let original_height;
let BACKGROUND_COLOR = 0;
let CIRCLE_RADIUS = 1;
let TRANSPERENCY = .5;
let GROWTH_RATE = 1;
let DEATH_TIME = 10000; //milliseconds
let FRAME_RATE = 30
let active = [];
function setup() {
  //CANVAS SETUP
  //Make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  //save the original dimensions of the canvas so that you can set it to this when exiting fullscreen
  original_height = windowHeight;
  original_width = windowWidth;
  //make a button that will call toggle_fullscreen when clicked
  button = createButton('Fullscreen');
  button.position(19, 19);
  button.mousePressed(toggle_fullscreen);

  background(BACKGROUND_COLOR);

  frameRate(FRAME_RATE);


}

function draw() {
  //set the background color to gray
  background(BACKGROUND_COLOR);

  let randX = Math.floor(Math.random() * windowWidth);
  let randY = Math.floor(Math.random() * windowHeight);

  let randR = Math.floor(Math.random() * 255);
  let randG = Math.floor(Math.random() * 255);
  let randB = Math.floor(Math.random() * 255);

  let new_dot = new dot(Date.now(), randX, randY, CIRCLE_RADIUS, randR, randB, randG);
  active.push(new_dot);

  noStroke();
  for(let i = 0; i < active.length; i++){
    active[i].dead = active[i].die();
    active[i].radius_grow();
    if(active[i].dead){
      active.splice(i, 1);
    }
    fill(rgba_string(active[i].r, active[i].g, active[i].b));
    ellipse(active[i].x, active[i].y, active[i].radius, active[i].radius)
  }


}

//toggles the fullscreen setting
function toggle_fullscreen(){
  let fs = fullscreen();
  fullscreen(!fs);
  if(fs == undefined){
    resizeCanvas(displayWidth, displayHeight);
  }else{
    resizeCanvas(original_width, original_height);
  }

  background(BACKGROUND_COLOR);
}

class dot{
  constructor(birth, x, y, radius, r, g, b){
    this.birth = birth
    this.dead = false;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  die(){
    if(Date.now() - DEATH_TIME > this.birth){
      return true;
    }else{
      return false;
    }
  }

  radius_grow(){
    this.radius = this.radius + GROWTH_RATE;
  }
}

function rgba_string(r, g, b){
  let str = "rgba(" + r + ", " + g + ", " + b + ", " + TRANSPERENCY + ")";
  return str;
}
