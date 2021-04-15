<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Ascii Art</h1>

# Planteamiento del Problema

El procesamiento de imágenes y video es una de las ramas de la inform&aacute;tica que aplica técnicas digitales a las representaciones con el objetivo de alterar su información para obtener nuevos datos, perspectivas y variaciones gr&aacute;ficas.

Para observar parte del grán abanico de técnicas existentes, se estudia programática, te&oacute;rica y experimentalmente el uso de cuatro vertientes del procesamiento de imagenes, a saber: escala de grises por RGB y LUMA, máscaras de convolución, ascii art y foto-mosaico. Cada técnica diferente a la anterior, permite comprender el alcance del procesamiento, su potencial y aplicación a diciplinas ajenas al arte, como veremos a continuación.

El procesamiento y análisis de imágenes se ha desarrollado en respuesta a problemas concernientes a las mismas como su digitalización y codificación, interpretación de su contenido o segmentación. Diferentes algoritmos  de  procesamiento  de  imágenes  destinados  a  resaltar,  agudizar y/o  contrastar  determinados  aspectos  de  la  imagen, o aquellos que ayudan  a  eliminar efectos   no   deseados   sobre   ellas, han hecho posible la extracción de  mediciones,  datos  o  información  contenida  en  una  imagen. Esto ha traído con el un sin número de aplicaciónes en el campo de la tecnología, las comunicaciones, el arte, o incluso en la medicina como lo es la utilización de imágenes radiográfícas para diagnóstico clínico.

# Antecedentes

El ASCII Art es una t&eacute;cnica de dise&ntilde;o que consiste en la representaci&oacute;n de im&aacute;genes a partir de la combinaci&oacute;n de los caracteres establecidos por el est&aacute;ndar ASCII. Esta practica se invent&oacute; a ra&iacute;z de que las primeras impresoras carec&iacute;an de habilidades gr&aacute;ficas; por lo que se usaban caracteres para hacer banners, separadores, y marcas distintivas cuando no se pod&iacute;an adjuntar piezas gr&aacute;ficas en correos y otros textos. El uso de ASCII Art se expandi&oacute; entre finales de los 1970's y comienzos de los 1980's con el uso de Bulletin Board Systems (BBS) que funcionaban por medio de terminales de comandos, lo que hacia imperativo usar caracteres para representar im&aacute;genes, incluso en esos momentos nac&iacute;an grupos de arte que creaban comics basados en ASCII Art. Sin embargo con la llegada de tipograf&iacute;as de ancho variable y las b&uacute;squedas gr&aacute;ficas, en los 1990's llego el declive del ASCII Art; pero este ha sobrevivido en plataformas de chat, mensajes, correos y juegos de rol multijugador hasta nuestros d&iacute;as. 

# Soluci&oacute;n y Resultados

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