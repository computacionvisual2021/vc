let theShader;
// this variable will hold our webcam video
let cam;
function preload() {
    // Precargar el  shader
    theShader = loadShader('/vc/docs/sketches/workshop2/texturaAscii.vert', '/vc/docs/sketches/workshop2/texturaAscii.frag');
}

function setup() {
    // shaders require WEBGL mode to work
    createCanvas(710, 400, WEBGL);
    noStroke();
    //Crea una captura de video instantanea 
    cam = createCapture(VIDEO);
    cam.size(710, 400);
    //Esconde la captura para solo mostrar el renderizado final
    cam.hide();
}

function draw() {
    // shader() Activación del Shader con nuestro Shader
    shader(theShader);

    // Se pasa la Cámara como textura
    theShader.setUniform('tex', cam);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}