
// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;
let gray = 0;

//MEDICION FPS
var fpsVal; //FPS actuales
var framesTotalVal; //Total de frames ejecutados
var deltaTimeVal; // Tiempo entre ejecucion de frames
var FpsPromVal; // Promedio de fps en lo ejecutado hasta el momento
let fpsTotal = 0.0; // Acumulador de todos los fps para el calculo del promedio

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

    // MEDICION FPS
    // Texto de Frames actuales
    let fpsTxt = createP("FPS actual: ");
    fpsTxt.position(50, 400);
    fpsTxt.style('font-size', '30px');
    //Valor cambiante de los fps actuales
    fpsVal = createDiv(0);
    fpsVal.position(190, 430);
    fpsVal.style('font-size', '30px');
    //Texto de Cantidad de frames totales
    let framesTotalTxt = createP("Cantidad frames totales: ");
    framesTotalTxt.position(50, 450);
    framesTotalTxt.style('font-size', '30px');
    //Valor cambiante de Cantidad de frames totales
    framesTotalVal = createDiv(0);
    framesTotalVal.position(350, 480);
    framesTotalVal.style('font-size', '30px');
    //Texto de tiempo entre frames
    let deltaTimeTxt = createP("Tiempo (ms) entre el frame anterior y el actual: ");
    deltaTimeTxt.position(50, 500);
    deltaTimeTxt.style('font-size', '30px');
    //Valor cambiante de tiempo entre frames
    deltaTimeVal = createDiv(0);
    deltaTimeVal.position(190, 560);
    deltaTimeVal.style('font-size', '30px');
    //Texto de fps promedio
    let FpsPromTxt = createP("FPS Promedio: ");
    FpsPromTxt.position(50, 570);
    FpsPromTxt.style('font-size', '30px');
    //Valor cambiante de fps promedio
    FpsPromVal = createDiv(0);
    FpsPromVal.position(250, 600);
    FpsPromVal.style('font-size', '30px');

    
}

function draw() {
    // shader() sets the active shader with our shader
    shader(theShader);

    // passing cam as a texture
    theShader.setUniform('tex0', cam);
    theShader.setUniform("u_key", gray);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);

    //Muestra valores de rendimiento en pantalla
    fpsVal.html(frameRate()); //fps
    framesTotalVal.html(frameCount);//Cantidad de frames
    deltaTimeVal.html(deltaTime);// Tiempo entre frames
    fpsTotal += frameRate();//Se acumula el valor de fps para calcular el promedio
    FpsPromVal.html(fpsTotal / frameCount);//Promedio de fps
    
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
