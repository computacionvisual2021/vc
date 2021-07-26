let asciiShader;
let shaderTexture;


function preload() {
  img = loadImage('/vc/docs/img/cat.jpg');
  asciiShader = loadShader('/vc/docs/sketches/workshop2/texturaAscii.vert', '/vc/docs/sketches/workshop2/texturaAscii.frag');
}

function setup() {
  createCanvas(768, 500, WEBGL);
  shaderTexture = createGraphics(700, 800, WEBGL);
  shaderTexture.noStroke();
}

function draw() {
  shaderTexture.shader(asciiShader);
  asciiShader.setUniform('tex', img);
  texture(shaderTexture);
  shaderTexture.rect(0,0,500,500);
  rect(-500,-500/2.0,500,500)
}
