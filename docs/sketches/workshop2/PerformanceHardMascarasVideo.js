
// Delaracion de variables
let videoPath = "/vc/docs/img/mylivewallpapers.com-Fire-N-Water-Wolves.mp4";
let theShader;
let cam;
let filter = 0;

//MEDICION FPS
var fpsVal; //FPS actuales
var framesTotalVal; //Total de frames ejecutados
var deltaTimeVal; // Tiempo entre ejecucion de frames
var FpsPromVal; // Promedio de fps en lo ejecutado hasta el momento
let fpsTotal = 0.0; // Acumulador de todos los fps para el calculo del promedio

function preload() {
    // precargar el shader
    theShader = loadShader('/vc/docs/sketches/workshop2/webcam.vert', '/vc/docs/sketches/workshop2/webcamMask.frag');
}

function setup() {
    //Crear canvas de tipo webgl
    createCanvas(710, 400, WEBGL);
    noStroke();
    //Crea una captura de video instantanea 
    //cam = createCapture(VIDEO);
    
    cam = createVideo(['/vc/docs/img/mandrill.webm']);
    
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
    // definir el shader precargado como el shader activo
    shader(theShader);
    
    // Pasar la textura de la camara y variables al fragment shader
    theShader.setUniform('tex0', cam);
    theShader.setUniform("u_key", filter);
    // tamaño de un pixel en la pantalla
    theShader.setUniform('texelSize', [1.0 / 710, 1.0 / 400]);
    // distancia a tomar a partir de un pixel
    theShader.setUniform('dist', 3.0);

    rect(0, 0, 710, 400);

    //Muestra valores de rendimiento en pantalla
    fpsVal.html(frameRate()); //fps
    framesTotalVal.html(frameCount);//Cantidad de frames
    deltaTimeVal.html(deltaTime);// Tiempo entre frames
    fpsTotal += frameRate();//Se acumula el valor de fps para calcular el promedio
    FpsPromVal.html(fpsTotal / frameCount);//Promedio de fps
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