let videoPath = "/vc/docs/img/mylivewallpapers.com-Fire-N-Water-Wolves.mp4";
let videoWidth = 700;
let videoHeight = 314;

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
let video;

var videoConverted = new p5((p) => {
	let videoRed = [];
	let videoGreen = [];
	let videoBlue = [];

	p.setup = () => {
		p.createCanvas(videoWidth, videoHeight);
		p.pixelDensity(1);
		video = p.createVideo([videoPath]);
		video.hide();
	}

	p.draw = () => {
		videoRed = [];
		videoGreen = [];
		videoBlue = [];

		p.background(0);
		video.loadPixels();

		for (let a = 0, x = 0; x < video.width; a++, x++) {
			videoRed.push([]);
			videoGreen.push([]);
			videoBlue.push([]);

			for (let y = 0; y < video.height; y++) {
				let i = (x + y * video.width) * 4;

				videoRed[a].push(video.pixels[i]);
				videoGreen[a].push(video.pixels[i + 1]);
				videoBlue[a].push(video.pixels[i + 2]);
			}
		}

		for (let x = 0; x < video.width; x++) {
			for (let y = 0; y < video.height; y++) {
				let k = (x + y * video.width) * 4;

				if (!(x == 0 || x == video.width - 1 || y == 0 || y == video.height - 1)) {
					let convRed = 0;
					let convGreen = 0;
					let convBlue = 0;

					for (let a = 0, i = x - 1; a < 3; a++, i++) {
						for (let b = 0, j = y - 1; b < 3; b++, j++) {
							convRed += videoRed[i][j] * effect[b][a];
							convGreen += videoGreen[i][j] * effect[b][a];
							convBlue += videoBlue[i][j] * effect[b][a];
						}
					}

					if (effect == kernels.avgRGB) {
						let avgPixel = (convRed + convGreen + convBlue) / 3;
						video.pixels[k] = avgPixel;
						video.pixels[k + 1] = avgPixel;
						video.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.luma240) {
						let avgPixel = parseInt((0.212 * convRed + 0.701 * convGreen + 0.087 * convBlue));
						video.pixels[k] = avgPixel;
						video.pixels[k + 1] = avgPixel;
						video.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.luma601) {
						let avgPixel = parseInt((0.2989 * convRed + 0.5870 * convGreen + 0.1140 * convBlue));
						video.pixels[k] = avgPixel;
						video.pixels[k + 1] = avgPixel;
						video.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.luma709) {
						let avgPixel = parseInt((0.2126 * convRed + 0.7152 * convGreen + 0.0722 * convBlue));
						video.pixels[k] = avgPixel;
						video.pixels[k + 1] = avgPixel;
						video.pixels[k + 2] = avgPixel;
					}

					else if (effect == kernels.reverseColor) {
						video.pixels[k] = 255 - video.pixels[k];
						video.pixels[k + 1] = 255 - video.pixels[k + 1];
						video.pixels[k + 2] = 255 - video.pixels[k + 2];
					}

					else {
						video.pixels[k] = convRed;
						video.pixels[k + 1] = convGreen;
						video.pixels[k + 2] = convBlue;
					}
				}
			}
		}

		video.updatePixels();
		p.image(video, 75, 0);
	}

	p.mousePressed = () => {
		video.loop();
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

const inputKernel = document.getElementById('kernel');

inputKernel.addEventListener('change', async(event) => {
	effect = kernels[inputKernel.value];
	await videoConverted.setup();
	await videoConverted.draw();
	videoConverted.mousePressed();
});