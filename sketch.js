var s = 1;
var r = 0;
var t = 0;
var shine = 1;
var ly = 0;
var ty = 0;
var sz = 50;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  translate(width/2, height/2);
  r = r + 10;
  if(t > 300) {
    shine = 0;
    ly = random(0, height/10);
    ty = random(height/2);
  }

  if (t < -200) {
    shine = 1;
    ly = random(0, height/10);
    ty = random(height/2);
  }
  if(shine == 1) {
  sz++;
} else {
  sz--;
}
  translate(t, ty);
  rotate(r);
  scale(s);
  println(t);
  line(0, ly, sz, 100);

}
