
// Delaracion de variables
let theShader;
let cam;
let filter = 0;
function preload() {
    // precargar el shader
    theShader = loadShader('/vc/docs/sketches/workshop2/webcam.vert', '/vc/docs/sketches/workshop2/webcamMask.frag');
}

function setup() {
    //Crear canbas de tipo webgl
    createCanvas(710, 400, WEBGL);
    noStroke();
    //Crea una captura de video instantanea 
    cam = createCapture(VIDEO);
    cam.size(710, 400);
    //Esconde la captura para solo mostrar el renderizado final
    cam.hide();
}

function draw() {
    // definir el shader precargado como el shader activo
    shader(theShader);

    // Pasar la textura de la camara y variables al fragment shader
    theShader.setUniform('tex0', cam);
    theShader.setUniform("u_key", filter);
    // tamaño de un pixel en la pantalla
    theShader.setUniform('texelSize', [1.0 / width, 1.0 / height]);
    // distancia a tomar a partir de un pixel
    theShader.setUniform('dist', 3.0);

    rect(0, 0, width, height);
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
    }
}