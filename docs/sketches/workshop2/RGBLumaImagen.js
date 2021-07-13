var img;
function preload() {
    img = loadImage('/vc/docs/img/cat.jpg');
}

function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    background(220);

    push();
    translate(-100, -100);
    texture(img);
    plane(img.width, img.height);
    pop();
}