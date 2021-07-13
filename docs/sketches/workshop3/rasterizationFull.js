

var alpha;

var beta;

var gamma;

var alphaS;

var betaS;

var gammaS;

function barycentric() {
    alpha = 0.0;
    beta = 0.0;
    gamma = 0.0;
}

function barycentric(A, B, C) {
    alpha = A;
    beta = B;
    gamma = C;
}

function barycentric(ax, ay, bx, by, cx, cy, x, y) {
    var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
    beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
    gamma = 1.0 - alpha - beta;
    alphaS = nf(alpha, 1, 2);
    betaS = nf(beta, 1, 2);
    gammaS = nf(gamma, 1, 2);
}

function interpolate(a, b, c) {
    return a * alpha + b * beta + c * gamma;
}


var squares;

var vertexR;

var vertexG;

var vertexB;

var squaresF;
var row;
var col;
var pointA;

var i;
var j;

function drawSquares() {
    i = 0;
    j = 0;
    col = 0;
    row = squaresF;
    for (i = 0; i <= squares; i++) {
        col = 0;
        for (j = 0; j <= squares; j++) {
            strokeWeight(1);
            if (inside_triangle(ax, ay, bx, by, cx, cy, col + pointA, row + pointA)) {
                barycentric(ax, ay, bx, by, cx, cy, col + pointA, row + pointA);
                fill(239 * alpha, 247 * beta, 255 * gamma );
                rect(col, row, squaresF, squaresF);
            } else {
                fill(255, 255, 255);
                rect(col, row, squaresF, squaresF);
            }
            strokeWeight(3);
            strokeCap(ROUND);
            fill(0, 224, 0);
            stroke(153, 153, 255);
            point(col + pointA, row + pointA);
            stroke(0);
            col += squaresF;
        }
        row += squaresF;
    }
    fill(255, 255, 255, 0);
}

function inside_triangle(ax, ay, bx, by, cx, cy, x, y) {
    var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    var alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
    var beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
    var gamma = 1.0 - alpha - beta;
    return !(alpha < 0 || alpha > 1 || beta < 0 || beta > 1 || gamma < 0 || gamma > 1);
}

var ax;

var ay;

var bx;

var by;

var cx;

var cy;

function setup() {
    initializeFields();
    createCanvas(500, 500);
    squaresF = width / squares;
    pointA = squaresF / 2;
    textSize(20);
    // colorMode(RGB, 1);
    ax = width / 4;
    ay = 50;
    bx = width - 11;
    by = 50;
    cx = ((bx - ax) / 2) + ax;
    cy = height - 11;
}

function draw() {
    background(255);
    
    drawSquares();
    strokeWeight(1);
    stroke(0);
    triangle(ax, ay, bx, by, cx, cy);
    point(mouseX, mouseY);
    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
            ax = mouseX;
            ay = mouseY;
        }
        if (mouseButton == RIGHT) {
            bx = mouseX;
            by = mouseY;
        }
        if (mouseButton == CENTER) {
            cx = mouseX;
            cy = mouseY;
        }
    }
}

function initializeFields() {
    alpha = 0;
    beta = 0;
    gamma = 0;
    alphaS = null;
    betaS = null;
    gammaS = null;
    squares = 25;
    vertexR = 120;
    vertexG = 120;
    vertexB = 120;
    squaresF = 10;
    row = 0;
    col = 0;
    pointA = 0;
    i = 0;
    j = 0;
    ax = 0;
    ay = 0;
    bx = 0;
    by = 0;
    cx = 0;
    cy = 0;
}

