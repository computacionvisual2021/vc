<h1 align="center">Conclusiones</h1>

1. El empleo de la luminosidad de los colores hace posible que se estudie el proceso contrario al presentado en el taller, es decir, la recuperación de colores con base en su escala de grises, especialmente en el ámbito de la restauración de fotografías o contenido audiovisual que antaño se producía en este formato. Se resaltan estudios en los que se establece que para lograr este objetivo se debe realizar un ajuste al componenete gamma y el brillo de cada color (ver [estudio realizado por Jes&uacute;s Gustavo folres Era&ntilde;a](https://ninive.uaslp.mx/xmlui/bitstream/handle/i/2264/MCA1SDC00901.pdf?sequence=1&isAllowed=y#:~:text=La%20escala%20de%20grises%20se,gradaciones%20de%20este%20color%20puro.)).

2. Al ejecutar el renderizado de las imágenes con los filtros RGB y Luma, es distinguible que al aplicar Luma sobre la imagen original los colores verdes y amarillos se hacen más perceptibles o más luminosos. Esto se debe a que en la ecuación para el cálculo de Luma el color verde tiene mayor ponderación dado que el ojo humano es más sensible a este color. 

3. Las operaciones de convolución abarcan un amplio rango de transformaciones con cálculos complejos para lograr efectos llamativos usados hoy en día principalmente en redes sociales. Por lo que se resalta que las implementaciones aquí detalladas son de alguna manera introductorias, y básicas comparadas al gran abanico de posibilidades existentes principalmente en el campo de la fotografía.

4. Actualmente las aplicaciones del Ascii Art están enfocadas como medio de expresión artística, en la cual las personas transmiten un sentir y un pensar a través de esta manifestación del arte. Sin duda es un campo de conocimiento de atracción para los artistas, amantes de lo visual y curiosos de nuevas maneras de comunicar. En el campo de la computación, el Ascii art puede ser utilizado como una técnica de compresión de imágenes y videos en la cual se reduciría significativamente su peso para su envío a necesidad.

5. El dataset de imágenes utilizado en la implementación del Foto mosaico para este proyecto era demasiado pequeño (12 imágenes), razón por la cual el resultado final no obtuvo la mejor resolución.

6. Si el dataset de imágenes empleado en el Foto mosaico no se encuentra ordenado por luminosidad es aconsejable emplear algún algoritmo de ordenamiento de las mismas ya que esto dará como resultado una mejor relación entre las imágenes a renderizar y los valores de luminosidad de la imagen original.

# Desempeño Computacional Software y Hardware Máscaras de Convolución

## Outline Mask

Los datos obtenidos a continuación se calcularon para una cantidad de aproximadamente 1000 frames procesados por cada simulación realizada tanto en el equipo A como el Equipo B.
Para la Máscara Outline Mask implementada por Hardware se puede observar que la utilización de la GPU fue en promedio de 22,93% y 18,80% de la capacidad de la tarjeta gráfica de los equipos de cómputo A y B respectivamente.

En esta implementación se obtuvo una medida de aproximadamente 60 frames por segundo y un consumo de Memoria RAM variante entre los 242 MB hasta los 310 MB. Esta misma máscara implementada por Software para una cantidad de alrededor de 1000 frames procesados tuvo una utilización del 19,27% para el equipo A y del 41,54% para el equipo B, Lo que hace notoria la diferencia entre ambos procesadores a la hora de renderizar imágen o video por software. La GPU tuvo un valor de 8,33% para el equipo de cómputo A y 3,53% para el equipo B. La medida FPS calculada para esta máscara fue de 9,25 frames por segundo lo cual es bastante bajo al ser comparado con los 60 FPS obtenidos por Hardware.

## Reverse Mask

El comportamiento del escenario de ejecución para esta máscara es similar a la tendencia de valores obtenidos para la máscara Outline, tanto en su implementación por Hardware como por Software.
Para las simulaciones con 1000 frames procesados se obtuvo una tasa FPS entre 59,97 y 62,56 para Hardware y una tasa  FPS entre 9,24 y 9,26 en su implementación por software, por lo cual podemos determinar que al aplicar la máscara implementada por hardware a un video se procesa mayor cantidad de frames cada segundo, lo cual proporciona a una mejor visualización.

# Desempeño Computacional Software y Hardware Promedio RGB y Luma 

## Promedio RGB

En las simulaciones realizadas para el promedio de RGB se pudo evidenciar que para una medida de aproximadamente 1000 frames procesados, se hace un consumo de recursos considerable de Memoria Ram, tanto en Software como en Hardware.
La tasa de FPS en la ejecución por hardware fue de 60,84 y esta misma tasa varió entre los 8,42 y 10,14 en la implementación por software, razón por la cual el renderizado del video por hardware tiene un valor significado diferencial con respecto a si se realiza por software.
En las simulaciones se obtuvo un promedio de utilización de la GPU entre el 16,67% y el 20,70% para hardware y una utilización entre el 17% y el 39% de la CPU de los equipos en la ejecución por software.

## Luma

Por otro lado, en las simulaciones a las que se les aplicó Luma por hardware los valores de la GPU variaron entre 26,63% y el 20,54% y en su ejecución por software los valores de utilización del CPU estuvieron entre 15,87% y 40,74% en el equipo A y B respectivamente. Si bien los valores obtenidos varian de acuerdo a la tendencia de aplicación de máscaras, se puede observar que tanto para promedio de RGB como para Luma en la ejecución por software se hace un alto uso de la GPU (20%-22%) lo cual es indicio de que aunque la implementación sea por software el algoritmo hace uso del hardware para la ejecución de algunos procesos.

# Desempeño Computacional Software y Hardware Ascii-Art

Bajo la comparación entre el desempeño del ascii art por hardware y software se puede evidenciar la gran diferencia en la tasa de frames por segundo, ya que para hardware se obtuvieron valores entre los 58,80 y 60,16 fps, mientras que para softwate la tasa no superó los 29 fps, es decir, no alcanzó la mitad de procesamiento que si obtuvo de hardware, dando mérito a la capacidad de renderizado específico de algoritmos robustos como el ascii art en el componenete de hardware GPU.

<h1 align="center">Trabajo Futuro</h1>

1. Las texturas al permitir la representación de objetos en 3D, pueden tener incursión en el campo de la medicina y su estudio perpetuo del cuerpo humano ya que en la actualidad y con el apoyo de las simulaciones se puede representar en gran medida el comportamiento del organismo humano en condiciones definidas y/o adversas. Por lo que se tiene en los shaders la base para el estudio específico de parte de la medicina, biología, y demás ciencias de la vida.

2. La aplicación de máscaras de convolución a terapia y diagnóstico de transtornos visuales representa un potencial muy ámplio en cuanto a la modernización e improvización de los tratamientos existentes ya que puede permitir ejercitar o medir capacidades no exploradas en detalle con anterioridad.

3. La implementación realizada por hardware es sencilla y limitada a un conjunto de caracteres que se puedan representar en una matriz de 5 x 5. Es necesario estudiar y en un futuro implementar el shader para que reciba una imagen con los caracteres que se deseen usar, ya que esto permitirá ampliar a un conjunto de caracteres mayor los cuales pueden proporcionar resultados interesantes en la implementación del algoritmo.

4. Se abre la posibilidad a realizar un análisis de mayor fundamentación del desempeño de las implementaciones por hardware y sotfware al realizar un número mucho mayor de ejecuciones en distintos equipos de cómputo, con el ánimo de obtener una base sólida para argumentar sobre el rendimiento de estas y también sobre la lógica de negocio y programación de las unidadaes CPU y GPU en cuanto a la ejecución de transformaciones de imagen y video, ya que influyen en esta aspectos tanto a nivel de arquitectura y componentes, como de esquemas de optimización y los controladores que actuan en estos procesos. De manera que al realizar esta profundización, se evidencien aspectos relevantes en la conformación de equipos de computo de uso común y especializado para el manejo de imagenes y video por medio de computación gráfica.

<h1 align="center">Referencias y Fuentes</h1>

[Image Processing on Graphic Card](https://www.stemmer-imaging.com/en/technical-tips/image-processing-on-the-graphics-card/)



[Convolution Fundamentals](https://docs.gimp.org/2.6/es/plug-in-convmatrix.html)

[Convolution Process and Kernel Fundamentals](https://en.wikipedia.org/wiki/Kernel_(image_processing\))

[Kernel values](https://setosa.io/ev/image-kernels/)

[Image Convolution Fragment Shader Base](https://github.com/VisualComputing2020/VisualComputing2020.github.io/tree/master/js/shaders)

[Video Convolution Mask Assets ](https://github.com/processing/p5.js-website/tree/main/src/data/examples/assets)

[Image and Video Convolution Masks](https://github.com/aferriss/p5jsShaderExamples/tree/gh-pages/4_image-effects)

[Convolution Process Image](https://programmerclick.com/images/833/7140bcc7002f1d51bb30d256dcc7fee9.png)


[Metodos de Conversion a Escala de Grises](https://www.researchgate.net/publication/277198540_Tecnicas_alternativas_para_la_conversion_de_imagenes_a_color_a_escala_de_grises_en_el_tratamiento_digital_de_imagenes)

[Image Grayscale Assets](https://github.com/visualcomputingcoders/visualcomputingcoders/blob/master/_projects/escala_grisesHW/escala_griseshw.js)

[Video Grayscale Assets ](https://github.com/processing/p5.js-website/blob/main/src/data/examples/assets/webcam.frag)

[RGB Space Image](https://www.pngwing.com/es/free-png-sndev)


[Sintesis Digital de Color Utilizando Tonos de Gris ](https://ninive.uaslp.mx/xmlui/bitstream/handle/i/2264/MCA1SDC00901.pdf?sequence=1&isAllowed=y#:~:text=La%20escala%20de%20grises%20se,gradaciones%20de%20este%20color%20puro.)

[Historia del Foto-Mosaico](https://digitalartform.com/2017/01/05/history-of-photo-mosaics/)

[Mosaico Fotográfico](https://en.wikipedia.org/wiki/Photographic_mosaic)

[Chuck Close](https://en.wikipedia.org/wiki/Chuck_Close)

[Photomosaic logic base](https://github.com/computacionvisual2021/vc/blob/main/docs/sketches/workshop1/photomosaic2.js)

[Image Photomosaic Fragment Shader Base](https://github.com/VisualComputing/hugo-vc/blob/main/content/sketches/photomosaic.frag)


[DeltaTime Reference](https://p5js.org/es/reference/#/p5/deltaTime)

[FrameCount Reference](https://p5js.org/es/reference/#/p5/frameCount)

[FrameRate Reference ](https://p5js.org/es/reference/#/p5/frameRate)

[Performance metricts Base Idea](https://sfdelgadop.github.io/computacion-visual/video-1/)

[Html components for display shaders frames values idea](https://github.com/nicrodriguezval/vc/blob/main/docs/sketches/hardware/asciimosaic/w2_asciivideo.js)


> :ToCPrevNext