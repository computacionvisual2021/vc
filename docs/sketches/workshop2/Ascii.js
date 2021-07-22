let photo;
let font;
let letters = " .,;xe$";  
let charW = 6;            
let charH = 9;            
let toneDiv = 100.0 / letters.length;

function preload() {
    photo = loadImage( "/vc/docs/img/blue-eyes.jpg" );
    font = loadFont( "/vc/docs/sketches/workshop2/Inconsolata-Regular.ttf" );
}

function draw() {
    image(photo, 0, 0, 200, 120);
  }

function setup() {
    createCanvas(670, 400);
    background(0);
    fill(255);
    textFont( font, 14 );
    translate(1,10);      

    photo.resize( photo.width/charW, photo.height/charH );

    for (let y=0;  y<photo.height;  y++) {
        for (let x=0;  x<photo.width;  x++) {
            let col = photo.get( x, y );
            let tone = lightness(col) / toneDiv;
            let letter = letters.charAt( tone );

            text( letter, x*charW, y*charH );
        }
    }
}
