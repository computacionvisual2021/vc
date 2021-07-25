<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Desempe&ntilde;o Computacional Software y Hardware</h1>

# Antecedentes

Con el &aacute;nimo de comparar la eficiencia computacional de t&eacute;cnicas de an&aacute;lisis y transformaci&oacute;n de imagenes y video por software y hardware, se mide la tasa de frames en la ejecuci&oacute;n de dichos algoritmos implementados previamente. De igual manera se recopilan resultados de dos equipos de computo cuyas caracter&iacute;sticas se muestran a continuaci&oacute;n:

| Caracter&iacute;stica | Equipo A | Equipo B |
|---|---|---|
| Sistema Operativo | Windows 10 x64 |  |
| Procesador CPU | AMD Ryzen 5 3500U (8 cores) 2.10 GHz |  |
| GPU | AMD Radeon Graphics Vega 8 - 5GB |  |
| Memoria RAM | 8.00 GB |  |

Los algoritmos/ t&eacute;cnicas que se observar&aacute;an en el presente taller son:

+ M&aacute;scaras de Convoluci&oacute;n 

+ Escala de Grises

+ Ascii Art

Para lograr el cometido del taller se usar&aacute; la utilidad de p5.js ***frameRate()*** que muestra y permite definir la tasa de frames por segundo mostrados en pantalla




En la pesta&ntilde;a ***M&aacute;scaras de Convoluci&oacute;n*** se visualizan las correspondientes conversiones en video por software y hardware a ciertas m&aacute;scaras de convoluci&oacute;n y las mediciones de frames por segundo realizadas. De manera similar se ver&aacute;n las pesta&ntilde;as ***RGB y Luma*** para las escalas de grises y ***Ascii-Art*** para lo correspondiente.

PONER COMANDOS POR PESTA&ntilde;A SI APLICA

# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= M&aacute;scaras de Convoluci&oacute;n
> > 
> > > :P5 sketch=/docs/sketches/workshop2/MascarasVideo.js, width=700, height=410
> > 
> > > :P5 sketch=/docs/sketches/workshop2/SoftVidConvolMask.js, width=700, height=350
> 
> > :Tab title= RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/workshop2/RGBLumaVideo.js, width=720, height=400
>
> > :Tab title= Ascii-Art
> > 
> > > :P5 sketch=/docs/sketches/workshop1/asciiArtVideos.js, width=730, height=450
>
> > :Tab title= Resultados
> > 
> > | No. | Descripci&oacute;n |
> > |---|---|
> > | 1 | Precargar Shader para imagen/ video con el vertex y fragment shader. |
> > | 2 | Crear canvas de WEBGL. |
> > | 3 | Crear el shader a partir del precargado. |
> > | 4 | Pasar datos de imagen/video y tecla de control al Fragment Shader. |
> > | 5 | El fragment shader carga la textura (ya sea video o imagen). |
> > | 6 | Calcula el valor en escala de grises a representar seg&uacute;n el comando recibido en la tecla de control. |
> > | 7 | Renderizar el valor de color deseado y mostrar en pantalla. |
> > | 8 | En el caso de Imagen, aplicar la textura renderizada en 2D(elipse) y 3D (cubo). |
>
> > :Tab title= C&oacute;digo Desempe&ntilde;o
> >
> > ``` glsl | texture.frag
> > // Funcion para convertir un color a escala de grises
> > float grayscale(vec3 color) {
> >   float lightness;
> >   // Si la tecla de control es 1 se calcula el promedio RGB
> >   if (u_key==1){
> > 		float I=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
> > 		lightness = I;
> > 	} else if (u_key==2){
> >   // Si la tecla de control es 2 se calcula el valor luma
> >   // Promedio ponderado de RGB con correccion gamma (Luma)
> > 		float Y= dot(color, vec3(0.299, 0.587, 0.114)); // SDTV
> > 		lightness = Y;
> > 	}
> >   return lightness;
> > }
> > 
> > void main() {
> >   vec2 uv = vTexCoord;
> > 
> >   //Invierte la posicion de la cordenada  para que la imagen no quede al reves
> >   uv.y = 1.0 - uv.y;
> > 
> >   vec4 tex = texture2D(u_img, uv);
> >   // Calculo de escala de grises
> >   float gray =grayscale(tex.rgb);
> >   
> >   float threshR = gray ;
> >   float threshG = gray ;
> >   float threshB = gray ;
> > 
> >   // Si la tecla de control es 0 se muestra la imagen original
> >   if (u_key==0){
> >     threshR = tex.r ;
> >     threshG = tex.g ;
> >     threshB = tex.b ;
> >   }
> >   vec3 thresh = vec3(threshR, threshG, threshB);
> > 
> >   // Se renderiza la salida
> >   gl_FragColor = vec4(thresh, 1.0);
> > }
> > 
> > ```
> > 

Se mostr&oacute; exitosamente como es la implementaci&oacute;n l&oacute;gica y fundamentaci&oacute;n te&oacute;rica de la conversi&oacute;n a escala de grises por medio del promedio RGB y c&aacute;lculo de Luma. A pesar de haber mostrado un acercamiento m&iacute;nimo al renderizado 3D, se estima y se evidencia la alta capacidad para la representaci&oacute;n de objetos con las texturas deseadas en un entorno espacial definido; las principales aplicaciones de lo mostrado son relacionadas con la creaci&oacute;n de videojuegos e incluso de realidad virtual. Sin embargo cabe la posibilidad de la incursi&oacute;n en rubros como la medicina en el diagn&oacute;stico de imagenes, al pensar en una representaci&oacute;n 3D del cuerpo humano y sus organos internos con texturas analizadas en laboratorio. De igual manera las simulaciones en cualquier &aacute;mbito pueden ser ejecutadas con ayuda de los shaders.

Por su parte la escala de grises ayuda a la comparaci&oacute;n de la luminosidad de los colores, lo que permite la clasificaci&oacute;n de los mismos y tambi&eacute;n a distinguir los grados de claridad en las atenuaciones y degradados de color. Todas estas son parte fundamental en el dise&ntilde;o gr&aacute;fico y sus lineas de desempe&ntilde;o. Una de las aplicaciones m&aacute;s novedosa consiste en la recuperaci&oacute;n de imagenes con sus colores originales a partir de su versi&oacute;n en escala de grises, sin embargo para esto hay que ajustar el brillo y el componenete gamma (Separaci&oacute;n entre el color azul y el negro), entre otros. Tal como lo muestra el [estudio realizado por Jes&uacute;s Gustavo folres Era&ntilde;a](https://ninive.uaslp.mx/xmlui/bitstream/handle/i/2264/MCA1SDC00901.pdf?sequence=1&isAllowed=y#:~:text=La%20escala%20de%20grises%20se,gradaciones%20de%20este%20color%20puro.).


# Referencias y Bibliograf&iacute;a

[Metodos de Conversion a Escala de Grises](https://www.researchgate.net/publication/277198540_Tecnicas_alternativas_para_la_conversion_de_imagenes_a_color_a_escala_de_grises_en_el_tratamiento_digital_de_imagenes)

[Image Grayscale Assets](https://github.com/visualcomputingcoders/visualcomputingcoders/blob/master/_projects/escala_grisesHW/escala_griseshw.js)

[Video Grayscale Assets ](https://github.com/processing/p5.js-website/blob/main/src/data/examples/assets/webcam.frag)

[RGB Space Image](https://www.pngwing.com/es/free-png-sndev)

[Sintesis Digital de Color Utilizando Tonos de Gris ](https://ninive.uaslp.mx/xmlui/bitstream/handle/i/2264/MCA1SDC00901.pdf?sequence=1&isAllowed=y#:~:text=La%20escala%20de%20grises%20se,gradaciones%20de%20este%20color%20puro.)

> :ToCPrevNext