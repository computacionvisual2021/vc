
<h1 align="center">Mascaras de Convolución y Escala de girses RGB y LUMA</h1>

# Antecedentes

Una escala de grises de una imagen es aquella en la que el valor de cada píxel es una sola muestra que representa solo una cantidad de luz; es decir, lleva solo información de intensidad. Las imágenes en escala de grises, una especie de monocromo en blanco y negro o gris, se componen exclusivamente de tonos de gris. El contraste varía desde el negro en la intensidad más débil hasta el blanco en la más fuerte. Las imágenes en escala de grises son distintas de las imágenes en blanco y negro puesto.

Las operaciones de filtrado en imágenes en el dominio del espacio se llevan a cabo directamente sobre los píxeles de la imagen, a los cuales se les relaciona un conjunto de pixeles próximos con el objetivo de obtener información útil. Los llamados filtros lineales son los que cumplen el hecho de que el resultado de cada pixel se obtiene como combinación lineal de sus vecinos. Para aplicar un filtro lineal multiplicamos el entorno de cada pixel (submatriz NxN) por una máscara (que contiene los pesos de cada pixel del entorno con que se pondera la media), la media ponderada será el nuevo valor del pixel cuyo entorno operábamos. Para realizar un filtrado en el dominio del espacio se realiza una convolución (barrido) del núcleo sobre la imagen. Para ello se sigue el Teorema de Convolución en el espacio; cada píxel de la nueva imagen se obtiene mediante el sumatorio de la multiplicación del núcleo por los píxeles contiguos:

> :Formula align=center
>
> ```
> g(x,h) = \sum f(x,y) * w(i,j)
> 
> ```


# Soluci&oacute;n y Resultados

## Mascaras de Convoluci&oacute;n & Escala de grises RGB y LUMA

> :P5 sketch=/docs/sketches/workshop1/imageConvolutionMasks.js, width=700, height=700

<br />

> :P5 sketch=/docs/sketches/workshop1/videoConvolutionMasks.js, width=700, height=350

```
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

p.updatePixels();
```

> :ToCPrevNext