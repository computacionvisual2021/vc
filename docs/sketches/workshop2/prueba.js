let theShader;
let shaderTexture;
let img;

function preload(){
  img = loadImage('/vc/docs/img/blue-eyes.jpg');
  font = loadFont( "/vc/docs/sketches/workshop2/Inconsolata-Regular.ttf" );
  // load the shader
  theShader = loadShader('/vc/docs/sketches/workshop2/texturaAscii.vert', '/vc/docs/sketches/workshop2/prueba.frag');
}

function setup() {
  pixelDensity(1);
  // shaders require WEBGL mode to work
  canvas = createCanvas(1000, 400, WEBGL);
  canvas.parent();
  //createCanvas(windowWidth, windowHeight, WEBGL);
  fill(255);
  textFont( font, 14 );
  translate(1,10);
  noStroke();

  //Crear buffer grafico
   shaderTexture = createGraphics(512, 512, WEBGL);
	// Quitar bordes en el createGraphics
   shaderTexture.noStroke();
}

function draw() {  
  // shader() sets the active shader with our shader
  shaderTexture.shader(theShader);
  theShader.setUniform("u_img", img);

  // rect gives us some geometry on the screen
  shaderTexture.rect(0, 0, width, height);

  //Fondo negro
  background(0);
	//Guardar el dibujo actual
  push();
	//Se pasa el shader como textura
  texture(shaderTexture);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}