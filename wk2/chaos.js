function setup() {
  createCanvas(800, 800);
  frameRate(1000)
  background('#CCFFFF');

  aslider = createSlider(0.8, 0.9, 0.9, 0.001);
  bslider = createSlider(-0.7, -0.6, -0.6013, 0.001);
  cslider = createSlider(1.9, 2.1, 2.0, 0.001);
  dslider = createSlider(0.4, 0.5, 0.5, 0.001);

  aslider.position(10, 10);
  aslider.size(80);
  bslider.position(10, 40);
  bslider.size(80);
  cslider.position(10, 70);
  cslider.size(80);
  dslider.position(10, 100);
  dslider.size(80);
}

let x = -0.72
let y = -0.64

function x_f(x, y, a, b) {
  return x**2 - y**2 + a*x + b*y
}

function y_f(x, y, c, d) {
  return 2*x*y + c*x + d*y
}


let scale = 500;
let xshift = 500;
let yshift = 500;

function draw() {
  
  strokeWeight(5);

  let a = aslider.value();
  let b = bslider.value();
  let c = cslider.value();
  let d = dslider.value();

  let xN = x_f(x,y,a,b);
  let yN = y_f(x,y,c,d);

  x = xN;
  y = yN;

  let xplot = scale*(x/2) + xshift;
  let yplot = scale*(y/2) + yshift;
  
  let colorvalue = '#'
  
  let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  let randomIndex = Math.floor(Math.random() * letters.length);
  let letter = letters[randomIndex];
  colorvalue += str(round(xplot/3-67)).padStart(3, letter);
  colorvalue += str(round(yplot/3-63)).padStart(3, letter);
  
  
  
  stroke(colorvalue);
  
  point(xplot, yplot);

  //console.log(x, y);
  console.log(xplot, yplot);
  console.log(colorvalue)
}
