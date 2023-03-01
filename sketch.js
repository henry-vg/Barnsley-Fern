const speed = 1000,
  coefficients = [[[0, 0, 0], [0, 0.16, 0]], [[0.85, 0.04, 0], [-0.04, 0.85, 1.6]], [[0.2, -0.26, 0], [0.23, 0.22, 1.6]], [[-0.15, 0.28, 0], [0.26, 0.24, 0.44]]],
  probabilities = [0.01, 0.85, 0.07, 0.07];
let cPoint;

function setup() {
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));

  cPoint = createVector(0, 0);

  noFill();
  stroke(0, 150, 0, 100);
  strokeWeight(1);

  background(255);
}

function draw() {
  translate(0, height);
  for (let i = 0; i < speed; i++) {
    point(map(cPoint.x, -2.1820, 2.6558, 0, width), -map(cPoint.y, 0, 9.9983, 0, height));
    cPoint = getNextPoint(random());
  }
}

function getNextPoint(prob) {
  let x, y;
  if (prob < probabilities[0]) {
    x = coefficients[0][0][0] * cPoint.x + coefficients[0][0][1] * cPoint.y + coefficients[0][0][2];
    y = coefficients[0][1][0] * cPoint.x + coefficients[0][1][1] * cPoint.y + coefficients[0][1][2];
  }
  else if (prob < probabilities[0] + probabilities[1]) {
    x = coefficients[1][0][0] * cPoint.x + coefficients[1][0][1] * cPoint.y + coefficients[1][0][2];
    y = coefficients[1][1][0] * cPoint.x + coefficients[1][1][1] * cPoint.y + coefficients[1][1][2];
  }
  else if (prob < probabilities[0] + probabilities[1] + probabilities[2]) {
    x = coefficients[2][0][0] * cPoint.x + coefficients[2][0][1] * cPoint.y + coefficients[2][0][2];
    y = coefficients[2][1][0] * cPoint.x + coefficients[2][1][1] * cPoint.y + coefficients[2][1][2];
  }
  else {
    x = coefficients[3][0][0] * cPoint.x + coefficients[3][0][1] * cPoint.y + coefficients[3][0][2];
    y = coefficients[3][1][0] * cPoint.x + coefficients[3][1][1] * cPoint.y + coefficients[3][1][2];
  }

  return createVector(x, y);
}