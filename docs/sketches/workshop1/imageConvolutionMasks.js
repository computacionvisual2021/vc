let imgPath = "/vc/docs/img/Fire_breathing_2_Luc_Viatour.jpg";
let imgWidth = 700;
let imgHeight = 628;

const kernels = {
	blur: [
		[1 / 16, 2 / 16, 1 / 16],
		[2 / 16, 4 / 16, 2 / 16],
		[1 / 16, 2 / 16, 1 / 16]
	],
	emboss: [
		[-2, -1, 0],
		[-1, 1, 1],
		[0, 1, 2]
	],
	identity: [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	leftSobel: [
		[1, 0, -1],
		[2, 0, -2],
		[1, 0, -1]
	],
	rightSobel: [
		[-1, 0, 1],
		[-2, 0, 2],
		[-1, 0, 1]
	],
	topSobel: [
		[1, 2, 1],
		[0, 0, 0],
		[-1, -2, -1]
	],
	bottomSobel: [
		[-1, -2, -1],
		[0, 0, 0],
		[1, 2, 1]
	],
	outline1: [
		[1, 0, -1],
		[0, 0, 0],
		[-1, 0, 1]
	],
	outline2: [
		[0, -1, 0],
		[-1, 4, -1],
		[0, -1, 0]
	],
	outline3: [
		[-1, -1, -1],
		[-1, 8, -1],
		[-1, -1, -1]
	],
	sharpen: [
		[0, -1, 0],
		[-1, 5, -1],
		[0, -1, 0]
	],
	avgRGB: [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	luma240: [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	luma601: [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	luma709: [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	reverseColor: [
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	]
}

let effect = kernels.blur;

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

					if (effect == kernels.avgRGB) {
						let avgPixel = (convRed + convGreen + convBlue) / 3;

						p.pixels[k] = avgPixel;
						p.pixels[k + 1] = avgPixel;
						p.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.luma240) {
						let avgPixel = parseInt((0.212 * convRed + 0.701 * convGreen + 0.087 * convBlue));
						p.pixels[k] = avgPixel;
						p.pixels[k + 1] = avgPixel;
						p.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.luma601) {
						let avgPixel = parseInt((0.2989 * convRed + 0.5870 * convGreen + 0.1140 * convBlue));
						p.pixels[k] = avgPixel;
						p.pixels[k + 1] = avgPixel;
						p.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.luma709) {
						let avgPixel = parseInt((0.2126 * convRed + 0.7152 * convGreen + 0.0722 * convBlue));
						p.pixels[k] = avgPixel;
						p.pixels[k + 1] = avgPixel;
						p.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.reverseColor) {
						p.pixels[k] = 255 - p.pixels[k];
						p.pixels[k + 1] = 255 - p.pixels[k + 1];
						p.pixels[k + 2] = 255 - p.pixels[k + 2];
					}

					else {
						p.pixels[k] = convRed;
						p.pixels[k + 1] = convGreen;
						p.pixels[k + 2] = convBlue;
					}
				}
			}
		}

		p.updatePixels();
	}
}, "sketch");

document.write(
	`
	<center>
		<select id="kernel" style="display: block; margin: 3vh 0;">
			<option value="" disabled>Efecto</option>
			<option value="blur">Blur</option>
			<option value="emboss">Emboss</option>
			<option value="identity">Identity</option>
			<option value="leftSobel">Left sobel</option>
			<option value="rightSobel">Right sobel</option>
			<option value="topSobel">Top sobel</option>
			<option value="bottomSobel">Bottom sobel</option>
			<option value="outline1">Outline 1</option>
			<option value="outline2">Outline 2</option>
			<option value="outline3">Outline 3</option>
			<option value="sharpen">Sharpen</option>
			<option value="avgRGB">average rgb</option>
			<option value="luma240">luma 240</option>
			<option value="luma601">luma 601</option>
			<option value="luma709">luma 709</option>
			<option value="reverseColor">reverse color</option>
		</select>
	</center>
	`
);

const inputKernel1 = document.getElementById('kernel');

inputKernel1.addEventListener('change', (event) => {
	effect = kernels[inputKernel1.value];
	imageConverted.setup();
});