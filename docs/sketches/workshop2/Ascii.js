let theShader;
let shaderTexture;

// Esta variable contrendrá la imagen
let img;

function preload() {
  // Precargar la imagen y  el  shader
  img = loadImage('/vc/docs/img/cat.jpg');
  theShader = loadShader('/vc/docs/sketches/workshop2/texturaAscii.vert', '/vc/docs/sketches/workshop2/texturaAscii.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(768, 500, WEBGL);
  shaderTexture = createGraphics(700, 800, WEBGL);
  shaderTexture.noStroke();
}

function draw() {
  // shader() Activación del Shader con nuestro Shader
  shaderTexture.shader(theShader);
  // Se pasa la imagen como textura
  theShader.setUniform('tex', img);
  texture(shaderTexture);
  // rect gives us some geometry on the screen
  shaderTexture.rect(0,0,500,500);
  rect(-500,-500/2.0,500,500)
}
