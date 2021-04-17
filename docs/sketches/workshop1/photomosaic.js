var sclDiv = 70;
var w, h;
var imgAmount = 29;

let brightnessValues = [];
var allImages = [];
var brightImages = new Array(255);
var bigPicture;
var smaller;

function preload() {
  bigPicture = loadImage("/vc/docs/sketches/pruebas/muppets.jpg");
  for (i = 0; i < imgAmount; i++) {
    now = "/vc/docs/sketches/pruebas/" + i + '.jpg';
    allImages[i] = loadImage(now);
  }
}

function setup() {
  createCanvas(bigPicture.width, bigPicture.height);
  scl = bigPicture.width / sclDiv;

  // Repeat the following for all images
  for (var i = 0; i < allImages.length - 1; i++) {
    // Load the image
    var img = allImages[i];

    // Shrink it down
    allImages[i] = createImage(scl, scl);
    allImages[i].copy(img, 0, 0, img.width, img.height, 0, 0, scl, scl);
    allImages[i].loadPixels();
  }

  for (var i = 0; i < allImages.length - 1; i++) {
    // ORIGINALLY allImages[k].width / height
    // Calculate average brightness
    let avg = 0;

    // ORIGINALLY allImages[k].width / height
    for (var j = 0; j < allImages[j].height; j++) {
      for (var k = 0; k < allImages[k].width; k++) {
        let b = brightness(getColorAtIndex(allImages[i], j, k))
        avg += b;
      }
    }

    avg /= allImages[i].width * allImages[i].height;
    brightnessValues[i] = avg;
  }

  // Find the closest image for each brightness value
  for (i = 0; i < brightImages.length; i++) {
    let record = 256;
    for (j = 0; j < brightnessValues.length; j++) {
      let diff = abs(i - brightnessValues[j]);
      if (diff < record) {
        record = diff;
        brightImages[i] = allImages[j];
      }
    }
  }

  // Calculate the amount of columns and rows
  w = Math.floor(bigPicture.width / scl);
  h = Math.floor(bigPicture.height / scl);
  smaller = createImage(w, h);

  smaller.copy(bigPicture, 0, 0, bigPicture.width, bigPicture.height, 0, 0, w, h);
}

function draw() {
  background(0);
  smaller.loadPixels();

  // For every column and row..
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h; y++) {
      // ..draw an image that has the closest brightness value
      var index = x + y * w;
      var c = getColorAtIndex(smaller, x, y);
      var imageIndex = floor(brightness(c));
      image(brightImages[imageIndex], x * scl, y * scl, scl, scl);
    }
  }
  noLoop();
}

function getColorAtIndex(img, x, y) {
  let idx = imageIndex(img, x, y);
  let pix = img.pixels;
  let red = pix[idx];
  let green = pix[idx + 1];
  let blue = pix[idx + 2];
  let alpha = pix[idx + 3];
  return color(red, green, blue, alpha);
}

function imageIndex(img, x, y) {
  return 4 * (x + y * img.width);
}