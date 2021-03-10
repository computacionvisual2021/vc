let imgPath = "/vc/docs/sketches/lenna.png";
let imgWidth = 355;
let imgHeight = 355;

let effect = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0]
];

var imageConverted = new p5((p) => {
	let img;
	let imgRed = [];
	let imgGreen = [];
	let imgBlue = [];

	p.preload = () => {
		img = p.loadImage(imgPath);
	}

	p.setup = () => {
		p.createCanvas(imgWidth, imgHeight);
		p.pixelDensity(1);
		p.image(img, 0, 0, imgWidth, imgHeight);

		// <----
		p.loadPixels();

		for (let a = 0, x = 0; x < p.width; a++, x++) {
			imgRed.push([]);
			imgGreen.push([]);
			imgBlue.push([]);

			for (let y = 0; y < p.height; y++) {
				let i = (x + y * p.width) * 4;

				imgRed[a].push(p.pixels[i]);
				imgGreen[a].push(p.pixels[i + 1]);
				imgBlue[a].push(p.pixels[i + 2]);
			}
		}

		for (let x = 0; x < p.width; x++) {
			for (let y = 0; y < p.height; y++) {
				let k = (x + y * p.width) * 4;

				if (!(x == 0 || x == p.width - 1 || y == 0 || y == p.height - 1)) {
					let convRed = 0;
					let convGreen = 0;
					let convBlue = 0;

					for (let a = 0, i = x - 1; a < 3; a++, i++) {
						for (let b = 0, j = y - 1; b < 3; b++, j++) {
							convRed += imgRed[i][j] * effect[b][a];
							convGreen += imgGreen[i][j] * effect[b][a];
							convBlue += imgBlue[i][j] * effect[b][a];
						}
					}

					let avgPixel = (convRed + convGreen + convBlue) / 3;
					p.pixels[k] = avgPixel;
					p.pixels[k + 1] = avgPixel;
					p.pixels[k + 2] = avgPixel;
				}
			}
		}

		p.updatePixels();
		// ---->
	}
}, "sketch");

let imageOriginal = new p5((p) => {
	let img;

	p.preload = () => {
		img = p.loadImage(imgPath);
	}

	p.setup = () => {
		p.createCanvas(imgWidth, imgHeight);
		p.image(img, 0, 0, imgWidth, imgHeight);
	}
}, "sketch");