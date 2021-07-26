<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Desempe&ntilde;o Computacional Software y Hardware Ascii-Art</h1>

# Antecedentes

Con el &aacute;nimo de comparar la eficiencia computacional de t&eacute;cnicas de an&aacute;lisis y transformaci&oacute;n de imagenes y video por software y hardware, se mide la tasa de frames en la ejecuci&oacute;n de dichos algoritmos implementados previamente. De igual manera se recopilan resultados de dos equipos de computo cuyas caracter&iacute;sticas se muestran a continuaci&oacute;n:

| Caracter&iacute;stica | Equipo A | Equipo B |
|---|---|---|
| Sistema Operativo | Windows 10 x64 | Windows 10 x64 |
| Procesador CPU | AMD Ryzen 5 3500U (8 cores) 2.10 GHz | Intel(R) Core(TM) i5-7200 (8 cores) 2.5 GHz|
| GPU | AMD Radeon Graphics Vega 8 - 5GB | Intel(R) HD Graphics 620 - 4GB |
| Memoria RAM | 8.00 GB | 16.00 GB |

Los algoritmos/ t&eacute;cnicas que se observar&aacute;an en el presente taller son:

+ M&aacute;scaras de Convoluci&oacute;n 

+ Escala de Grises

+ Ascii Art

Para lograr el cometido del taller se usar&aacute; las siguientes utilidades de p5.js:

+ ***frameRate()***: Muestra y permite definir la tasa de frames por segundo mostrados en pantalla.

+ ***frameCount***: Guarda la cantidad de frames procesados hasta el momento, desde el inicio de la ejecuci&oacute;n.

+ ***deltaTime***: Contiene la diferencia de tiempo entre el inicio del frame anterior y el inicio del frame actual en milisegundos.

Por medio de estas se conocer&aacute; el desempe&ntilde;o de las implementaciones en cada m&aacute;quina. A continuaci&oacute;n se visualizan las correspondientes conversiones en video por software y hardware a Ascii-Art y las mediciones de frames por segundo, frames totales y tiempo entre frames realizadas.

# Soluci&oacute;n y Resultados

## Hardware

## Software

> :P5 sketch=/docs/sketches/workshop2/PerformanceSoftAscii.js, width=720, height=600

## Resultados

# Referencias y Bibliograf&iacute;a

[DeltaTime Reference](https://p5js.org/es/reference/#/p5/deltaTime)

[FrameCount Reference](https://p5js.org/es/reference/#/p5/frameCount)

[FrameRate Reference ](https://p5js.org/es/reference/#/p5/frameRate)

[Performance metricts Base Idea](https://sfdelgadop.github.io/computacion-visual/video-1/)

> :ToCPrevNext