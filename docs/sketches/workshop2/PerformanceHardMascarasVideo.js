
// Delaracion de variables
let videoPath = "/vc/docs/img/mylivewallpapers.com-Fire-N-Water-Wolves.mp4";
let theShader;
let cam;
let filter = 0;
function preload() {
    // precargar el shader
    theShader = loadShader('/vc/docs/sketches/workshop2/webcam.vert', '/vc/docs/sketches/workshop2/webcamMask.frag');
}

function setup() {
    //Crear canbas de tipo webgl
    createCanvas(710, 600, WEBGL);
    noStroke();
    //Crea una captura de video instantanea 
    //cam = createCapture(VIDEO);
    
    cam = createVideo(['/vc/docs/img/mandrill.webm']);
    cam.size(100, 100);
    cam.loop();
    //Esconde la captura para solo mostrar el renderizado final
    cam.hide();
    frameRate(100);
}

function draw() {
    // definir el shader precargado como el shader activo
    shader(theShader);
    
    // Pasar la textura de la camara y variables al fragment shader
    theShader.setUniform('tex0', cam);
    theShader.setUniform("u_key", filter);
    // tama�o de un pixel en la pantalla
    theShader.setUniform('texelSize', [1.0 / 710, 1.0 / 400]);
    // distancia a tomar a partir de un pixel
    theShader.setUniform('dist', 3.0);

    rect(0, 0, 710, 400);
    //Imprime FRAMERATE en consola del navegador (webgl no muestra esto de manera sencilla)
    print("FPS: " + frameRate());
    print("Cantidad Frames: " + frameCount);
    print("Tiempo entre Frames: " + deltaTime);
    //textSize(30);
    //fill(255, 255, 255);
    //text("FPS: " + frameRate(), 100, 300);
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