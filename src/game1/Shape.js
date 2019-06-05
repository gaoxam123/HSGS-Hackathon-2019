function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(102);
  star(100, 100, 10, 24, 5);
  circle(200,100,35);
  square(285,84,32);
  star(400,100,18,21,6);
  star(500,100,15,21,4);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
