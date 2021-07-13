

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
    alpha = 0;
    beta = 0;
    gamma = 0;
    alphaS = null;
    betaS = null;
    gammaS = null;
    ax = 0;
    ay = 0;
    bx = 0;
    by = 0;
    cx = 0;
    cy = 0;
    createCanvas(500, 500);
    textSize(20);
    colorMode(RGB, 255);
    ax = width / 4;
    ay = 50;
    bx = width - 11;
    by = 50;
    cx = ((bx - ax) / 2) + ax;
    cy = height - 11;
}

function draw() {
    background(255);
    strokeWeight(1);
    stroke(0);
    fill(1);
    triangle(ax, ay, bx, by, cx, cy);
    barycentric(ax, ay, bx, by, cx, cy, mouseX, mouseY);
    textSize(20);
    textAlign(LEFT,CENTER);
    fill(163, 217, 255);
    text("λ0: " + alphaS, 10, 60);
    fill(220, 247, 99);
    text("λ1: " + betaS, 10, 80);
    fill(239, 199, 194);
    text("λ2: " + gammaS, 10, 100);
    
    strokeWeight(2);
    if (inside_triangle(ax, ay, bx, by, cx, cy, mouseX, mouseY)) {
        stroke(0, 0, 0);
        fill(239, 199, 194);
        triangle(ax, ay, mouseX, mouseY, bx, by);
        fill(163, 217, 255);
        triangle(bx, by, mouseX, mouseY, cx, cy);
        fill(220, 247, 99);
        triangle(cx, cy, mouseX, mouseY, ax, ay);
    } else {
        stroke(1, 0, 0);
    }
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


