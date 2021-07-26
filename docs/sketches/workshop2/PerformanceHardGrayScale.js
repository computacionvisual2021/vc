
// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;
let gray = 0;
function preload() {
    // load the shader
    theShader = loadShader('/vc/docs/sketches/workshop2/webcam.vert', '/vc/docs/sketches/workshop2/webcam.frag');
}

function setup() {
    //Crear canvas de tipo webgl
    createCanvas(710, 400, WEBGL);
    noStroke();
    //Crea una captura de video instantanea 
    //cam = createCapture(VIDEO);
    // /vc/docs/img/mandrill.webm
    cam = createVideo(['/vc/docs/img/encanto.webm']);
    //cam.size(710, 400);
    cam.loop();
    //Esconde la captura para solo mostrar el renderizado final
    cam.hide();
    frameRate(100);
}

function draw() {
    // shader() sets the active shader with our shader
    shader(theShader);

    // passing cam as a texture
    theShader.setUniform('tex0', cam);
    theShader.setUniform("u_key", gray);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);

    //Imprime FRAMERATE en consola del navegador (webgl no muestra esto de manera sencilla)
    print("FPS: " + frameRate());
    print("Cantidad Frames: " + frameCount);
    print("Tiempo entre Frames: " + deltaTime);
    //textSize(30);
    //fill(255, 255, 255);
    //text("FPS: " + frameRate(), 100, 300);
}
// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
    if (key === '0') {
        gray = 0;
    } else if (key === '1') {
        gray = 1;
    } else if (key === '2') {
        gray = 2;
    }
}