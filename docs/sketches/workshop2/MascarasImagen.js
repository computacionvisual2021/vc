let theShader;
let shaderTexture;
let img;
let angle = 0;
let filter = 0;

function preload() {
	//Precargar la imagen a usar
	img = loadImage('/vc/docs/img/globos.jpg');
	// Cargar los shaders
	theShader = loadShader('/vc/docs/sketches/workshop2/texture.vert', '/vc/docs/sketches/workshop2/convMask.frag');

}

function setup() {
	pixelDensity(1);

	// Se requiere trabajar con WEBGL
	canvas = createCanvas(1000, 400, WEBGL);
	canvas.parent();
	noStroke();

	//Crear buffer grafico
	shaderTexture = createGraphics(512, 512, WEBGL);
	// Quitar bordes en el createGraphics
	shaderTexture.noStroke();


}

function draw() {
	// Se pasa el shader a la capa del createGraphics
	shaderTexture.shader(theShader);

	// Valores uniform para el fragment shader
	theShader.setUniform("u_img", img);
	theShader.setUniform("u_key", filter); //Opcion de mascara escogida
	// tamaño de un pixel en la pantalla
	theShader.setUniform('stepSize', [1.0 / width, 1.0 / height]);

	// Renderizar el shader
	shaderTexture.rect(0, 0, width, height);

	pointLight(255, 255, 255, 0, 0, 500);
	// Efecto linterna
	let dx = mouseX - width / 2;
	let dy = mouseY - height / 2;
	pointLight(255, 255, 255, dx, dy, 100);
	//Fondo negro
	background(0);
	//Guardar el dibujo actual
	push();
	//Se pasa el shader como textura
	texture(shaderTexture);
	//Creación de cubo rotando
	translate(200, 0, 0);
	rotateZ(angle);
	rotateX(angle);
	rotateY(angle * 2);
	box(200);
	//Volver al dibujo anterior (Mostrar ambas configuraciones)
	pop();

	// Rotacion de la caja
	angle += 0.002;

	// Se pasa la imagen como textura
	texture(shaderTexture);
	ellipse(-250, 0, 350, 350, 100);
	push();


}

// Se ejecuta cuando se presiona alguno de los numeros
function keyPressed() {
	if (key === '0') {
		filter = 0;
	} else if (key === '1') {
		filter = 1;
	} else if (key === '2') {
		filter = 2;
	} else if (key === '3') {
		filter = 3;
	} else if (key === '4') {
		filter = 4;
	} else if (key === '5') {
		filter = 5;
	} else if (key === '6') {
		filter = 6;
	} 
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}