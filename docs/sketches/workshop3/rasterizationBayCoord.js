
//Declaracion de variables para las coordenadas
var alpha;

var beta;

var gamma;

var alphaS;

var betaS;

var gammaS;

//Definición de coordenadas baricentricas a partir de tres puntos de un triangulo (a, b, c) y un punto arbitrario p=(x,y)
function barycentric(ax, ay, bx, by, cx, cy, x, y) {
    var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
    beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
    gamma = 1.0 - alpha - beta;
    alphaS = nf(alpha, 1, 2);
    betaS = nf(beta, 1, 2);
    gammaS = nf(gamma, 1, 2);
}

// Comprobación de si un punto (x, y) dado esta dentro del área que cubre un triangulo con vertices a, b, c
// 1. Calcula coordenadas baricentricas del punto p
// 2. Comprueba si los valores de alpha, beta y gamma tienen valores entre 0 y 1, es decir demostrando que p está dentro del triangulo
function inside_triangle(ax, ay, bx, by, cx, cy, x, y) {
    var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    var alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
    var beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
    var gamma = 1.0 - alpha - beta;
    return !(alpha < 0 || alpha > 1 || beta < 0 || beta > 1 || gamma < 0 || gamma > 1);
}

// Declaracion de variables para definir los tres puntos que conforman el triangulo
var ax;

var ay;

var bx;

var by;

var cx;

var cy;
// Setup del canvas con la inicialización de variables y la creación del canvas
function setup() {
    alpha = 0;
    beta = 0;
    gamma = 0;
    alphaS = null;
    betaS = null;
    gammaS = null;
    ax = 0;
    ay = 0;
    bx = 0;
    by = 0;
    cx = 0;
    cy = 0;
    //Creación del canvas
    createCanvas(500, 500);
    //Definición del modo de color y escala de este
    colorMode(RGB, 255);
    //Coordenadas del triangulo inicial
    ax = width / 4;
    ay = 50;
    bx = width - 11;
    by = 50;
    cx = ((bx - ax) / 2) + ax;
    cy = height - 11;
}

function draw() {
    //Poner fondo blanco en el canvas
    background(255);
    //Grosor del trazado 
    strokeWeight(1);
    //Tazar con color negro
    stroke(0);
    //Rellenar con color negro el triangulo actual
    fill(1);
    triangle(ax, ay, bx, by, cx, cy);
    //Calcular coordenadas baricentricas
    barycentric(ax, ay, bx, by, cx, cy, mouseX, mouseY);
    //Estilizar tamaño de texto y alineación del mismo en el canvas
    textSize(20);
    textAlign(LEFT, CENTER);
    //Mostrar en pantalla los valores calculados de alpha, beta y gamma
    fill(163, 217, 255);
    text("λ0: " + alphaS, 10, 60);
    fill(220, 247, 99);
    text("λ1: " + betaS, 10, 80);
    fill(239, 199, 194);
    text("λ2: " + gammaS, 10, 100);
    
    strokeWeight(2);
    //Si el mouse está en el area dentro del triangulo llenar los subtriangulos que se forman entre el mouse y los vertices con el color respectivo
    if (inside_triangle(ax, ay, bx, by, cx, cy, mouseX, mouseY)) {
        stroke(0, 0, 0);
        fill(239, 199, 194);
        triangle(ax, ay, mouseX, mouseY, bx, by);
        fill(163, 217, 255);
        triangle(bx, by, mouseX, mouseY, cx, cy);
        fill(220, 247, 99);
        triangle(cx, cy, mouseX, mouseY, ax, ay);
    } else {
        stroke(1, 0, 0);
    }
//Marcador de punto en la ubicación del cursor en el canvas
    point(mouseX, mouseY);

//Cambio de coordenadas de los vertices del triangulo segun el click con los botones central, derecho e izquierdo
    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
            ax = mouseX;
            ay = mouseY;
        }
        if (mouseButton == RIGHT) {
            bx = mouseX;
            by = mouseY;
        }
        if (mouseButton == CENTER) {
            cx = mouseX;
            cy = mouseY;
        }
    }
}


