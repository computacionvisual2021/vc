let image;
let om;
let mosaic;
let resolution;
let om_on;

function preload() {
    //Precargar imagen base y shaders
    image = loadImage('/vc/docs/img/globos.jpg');
    om = loadImage('/vc/docs/img/omkara.png');
    mosaic = loadShader('/vc/docs/sketches/workshop2/mosaic.vert', '/vc/docs/sketches/workshop2/mosaic.frag');

    //Cargar imagenes de dataset para mosaico
    img0 = loadImage('/vc/docs/sketches/pruebas2/0.jpg');
    img1 = loadImage('/vc/docs/sketches/pruebas2/1.jpg');
    img2 = loadImage('/vc/docs/sketches/pruebas2/9.jpg');
    img3 = loadImage('/vc/docs/sketches/pruebas2/3.jpg');
    img4 = loadImage('/vc/docs/sketches/pruebas2/4.jpg');
    img5 = loadImage('/vc/docs/sketches/pruebas2/5.jpg');
    img6 = loadImage('/vc/docs/sketches/pruebas2/6.jpg');
    img7 = loadImage('/vc/docs/sketches/pruebas2/7.jpg');
    img8 = loadImage('/vc/docs/sketches/pruebas2/8.jpg');
    img9 = loadImage('/vc/docs/sketches/pruebas2/2.jpg');
    img10 = loadImage('/vc/docs/sketches/pruebas2/doce.jpg');
    img11 = loadImage('/vc/docs/sketches/pruebas2/trece.jpg');
    img12 = loadImage('/vc/docs/sketches/pruebas2/29.jpg');
    
    
}

function setup() {
    //Crear canvas
    createCanvas(600, 600, WEBGL);
    textureMode(NORMAL);
    noStroke();
    //definir los shaders a usar
    shader(mosaic);
    mosaic.setUniform('om', om);
    //Mostrar en pantalla una casilla de verificación para intercambiar entre el mosaico y la imagen original
    om_on = createCheckbox('Mosaic', false);
    om_on.changed(() => mosaic.setUniform('om_on', om_on.checked()));
    om_on.position(10, 10);
    //Pasar imagenes a fragment shader
    mosaic.setUniform('img', image);
    mosaic.setUniform('img0', img0);
    mosaic.setUniform('img1', img1);
    mosaic.setUniform('img2', img2);
    mosaic.setUniform('img3', img3);
    mosaic.setUniform('img4', img4);
    mosaic.setUniform('img5', img5);
    mosaic.setUniform('img6', img6);
    mosaic.setUniform('img7', img7);
    mosaic.setUniform('img8', img8);
    mosaic.setUniform('img9', img9);
    mosaic.setUniform('img10', img10);
    mosaic.setUniform('img11', img11);
    mosaic.setUniform('img12', img12);
    
    //Mostrar en pantalla un deslizador para ajustar la resolución de la imagen y el mosaico a mostrar
    resolution = createSlider(10, 100, 30, 1);
    resolution.position(10, 50);
    resolution.style('width', '80px');
    resolution.input(() => mosaic.setUniform('resolution', resolution.value()));
    mosaic.setUniform('resolution', resolution.value());
}

function draw() {
    background(33);
    
    cover(true);
}

function cover(texture = false) {
    beginShape();
    if (texture) {
        vertex(-width / 2, -height / 2, 0, 0, 0);
        vertex(width / 2, -height / 2, 0, 1, 0);
        vertex(width / 2, height / 2, 0, 1, 1);
        vertex(-width / 2, height / 2, 0, 0, 1);
    }
    else {
        vertex(-width / 2, -height / 2, 0);
        vertex(width / 2, -height / 2, 0);
        vertex(width / 2, height / 2, 0);
        vertex(-width / 2, height / 2, 0);
    }
    endShape(CLOSE);
}