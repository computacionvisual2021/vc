let theShader;
let shaderTexture;
let img;

let iResolution;           // viewport resolution (in pixels)
let iChannel0;          // input channel. XX = 2D/Cube

let cam;

function preload(){
  //img = loadImage('/vc/docs/img/blue-eyes.jpg');
  // load the shader
  theShader = loadShader('/vc/docs/sketches/workshop2/texturaAscii.vert', '/vc/docs/sketches/workshop2/texturaAscii.frag');
}

// function setup() {
//   pixelDensity(1);
//   // shaders require WEBGL mode to work
//   canvas = createCanvas(1000, 400, WEBGL);
//   canvas.parent();
//   //createCanvas(windowWidth, windowHeight, WEBGL);
//   noStroke();

//   //Crear buffer grafico
//    shaderTexture = createGraphics(512, 512, WEBGL);
// 	// Quitar bordes en el createGraphics
//    shaderTexture.noStroke();
// }

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(710, 400, WEBGL);
  noStroke();
  //Crea una aptura de video instantanea 
  cam = createCapture(VIDEO);
  cam.size(710, 400);
  //Esconde la captura para solo mostrar el renderizado final
  cam.hide();
}

function draw() {  
  // shader() sets the active shader with our shader
  shaderTexture.shader(theShader);
  theShader.setUniform("iChannel0", cam);
  theShader.setUniform("iResolution", 400);
  
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