
<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Procesamiento de Imagen y Video</h1>

# Planteamiento del Problema


# Antecedentes
<ASCII Art background>

El ASCII Art es una t&eacute;cnica de dise&ntilde;o que consiste en la representaci&oacute;n de im&aacute;genes a partir de la combinaci&oacute;n de los caracteres establecidos por el est&aacute;ndar ASCII. Esta practica se invent&oacute; a ra&iacute;z de que las primeras impresoras carec&iacute;an de habilidades gr&aacute;ficas; por lo que se usaban caracteres para hacer banners, separadores, y marcas distintivas cuando no se pod&iacute;an adjuntar piezas gr&aacute;ficas en correos y otros textos. El uso de ASCII Art se expandi&oacute; entre finales de los 1970's y comienzos de los 1980's con el uso de Bulletin Board Systems (BBS) que funcionaban por medio de terminales de comandos, lo que hacia imperativo usar caracteres para representar im&aacute;genes, incluso en esos momentos nac&iacute;an grupos de arte que creaban comics basados en ASCII Art. Sin embargo con la llegada de tipograf&iacute;as de ancho variable y las b&uacute;squedas gr&aacute;ficas, en los 1990's llego el declive del ASCII Art; pero este ha sobrevivido en plataformas de chat, mensajes, correos y juegos de rol multijugador hasta nuestros d&iacute;as.  


# Soluci&oacute;n y Resultados

## Escala de grises RGB y LUMA

## Mascaras de Convoluci&oacute;n

> :P5 sketch=/docs/sketches/workshop1/sketch.js, width=710, height=715

## ASCII Art

```
function draw() {
    background(0);
    
    cyclic_t = millis() * 0.0002 % images.length;
    
    gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
    
    gfx.filter(POSTERIZE, 3);
   
    ascii_arr = myAsciiArt.convert(gfx);
    
    myAsciiArt.typeArray2d(ascii_arr, this);
    
    tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
    image(images[floor(cyclic_t)], 0, 0, width, height);
    noTint();
}

```
Creditos de: [Libreria asciiart](https://www.tetoki.eu/asciiart/asciiart_stillimage.html)


> :P5 sketch=/docs/sketches/workshop1/asciiArtImages.js, width=800, height=600

> :P5 sketch=/docs/sketches/workshop1/asciiArtVideos.js, width=650, height=520

## Foto-Mosaico

# Conclusiones y Trabajo Futuro

# Referencias y Fuentes

[ASCII art](https://en.wikipedia.org/wiki/ASCII_art)

[Ascii art library](https://www.tetoki.eu/asciiart/)
> :ToCPrevNext