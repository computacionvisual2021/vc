
<h1 align="center">Escala de Grises RGB y LUMA</h1>

# Antecedentes

El color no se considera como un atributo que tienen los objetos, sino como el resultado de un proceso visual entre la retina del ojo y el cerebro ya que el color se produce por la percepci&oacute;n de la luz. Debido a los tipos de conos fotoreceptores que poseen los animales, el humano en particular, se clasifican estos receptores en: los que responden a la luz roja del espectro visible, los que responden a la luz azul y los que responden a la luz verde. 

Con base en esto se define el modelo de color RGB, el m&aacute;s conocido y utilizado. En este modelo cada color est&aacute; representado por tres valores: el rojo (R), verde (G) y azul (B); de manera convencional se puede ubicar este modelo de color en un espacio cartesiano de 3 ejes, donde cada uno corresponde a uno de los tres valores del modelo en el rango [0,255] como se ve en la siguiente imagen:

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/rgbSpace.png" width=500/>
</p>
</div>

[RGB Space Image](https://www.pngwing.com/es/free-png-sndev)

De esta manera el negro se representa como (0,0,0) y el blanco como (255,255,255); para el caso particular de los colores en escala de grises, estos se obtienen con valores id&eacute;nticos de R, G, y B. 

Existen diversas t&eacute;cnicas de conversi&oacute;n a escala de grises a partir del modelo RGB. Desde el promedio, la tonalidad (basada en el modelo HSL), la luminosidad o Luma, entre otros; en el presente ejercicio se realizar&aacute;n implementaciones de los algoritmos de ***Promedio RGB y Luma***. El promedio RGB  es el m&eacute;todo m&aacute;s simple de lograr una conversi&oacute;n, ya que solo se necesita tomar los valores RGB de cada pixel y promediarlos, su formula es la siguiente:

> :Formula  align=center
> ```
> Grey_{RGB}(i,j) = \frac{R (i, j) + G (i, j) + B (i, j)}{3}
> ```

Por su parte, el m&eacute;todo de la Luminosidad (o Luma) consiste en una veri&oacute;n m&aacute;s sofisticada que la del promedio, ya que se realiza una suma de las ponderaciones de los valores de los componentes R, G y B con base en que el ojo humano es m&aacute;as sensible al color verde que a los otros colores (por esto su ponderaci&oacute;n es mayor). Estos valores fueron  establecidos  a  trav&eacute;s  de la  recomendaci&oacute;n  Rec. 601 NTSC por la International Telecommunication Union - Radiocommunications.  

> :Formula  align=center
> ```
> Luma_{RGB}(i,j) = 0,299 * R (i, j) + 0,587 * G (i, j) + 0,114 * B (i, j)
> ```

A continuaci&oacute;n en la pesta&ntilde;a ***Imagen RGB y Luma*** se podr&aacute; visualizar la implementaci&oacute;n de los dos m&eacute;todos mencionados anteriormente aplicados a una imagen por medio de shadders en WEBGL, lo cual permite que se ejecute el c&oacute;digo directamente en la unidad de procesamiento gr&aacute;fica GPU. Se crea una textura con la imagen y a esa textura se le calcula el promedio RGB y luma seg&uacute;n el usuario especifique con las siguientes teclas:

| Tecla |         Resultado         |
|:-----:|:-------------------------:|
|   0   |   Imagen/Video Original   |
|   1   | Imagen/Video Promedio RGB |
|   2   |     Imagen/Video Luma     |

La representaci&oacute;n de la imagen convertida se visualizar&aacute; aplicada a una elipse y a un cubo que rota, con el &aacute;nimo de explorar una de las capacidades de WEBGL que es el manejo de elementos en 3D. De igual manera veremos como la luz puede afectar principalmente a el mencionado objeto 3D al pasar el cursor sobre el mismo y ver como la luz de distorsiona sobre el objeto (se observa mejor al dejar el cursor est&aacute;tico en un lugar cerca al cubo).

En la pesta&ntilde;a ***Video RGB y Luma*** se visualizan las mismas conversiones pero esta vez aplicadas a la captura de video por c&aacute;mara en tiempo real. El video responde a los mismos comandos por teclas mencionados anteriormente, igualmente aplicando las texturas a un shader de WEBGL.

Por su parte, la pesta&ntilde;a ***Instrucciones*** describe un paso a paso del proceso de conversi&oacute;n de los elementos mencionados (imagen y video) ya que son pasos en su mayor&iacute;a similares; Iniciando con la creaci&oacute;n de los shaders respectivos a partir de los ***Fragment Shader y Vertex Shader*** correspondientes, una vez creado el canvas tipo WEBGL se pasan los datos de imagen o video al fragment shader para que identifique seg&uacute;n la tecla presionada por el usuario que tipo de transformaci&oacute;n desea. Por &uacute;ltimo el ***Fragment Shader*** calcula la escala de grises deseada y devuelve el renderizado de la imagen/video para ser mostrada.

Finalmente, las pesta&ntilde;as ***C&oacute;digo Imagen y C&oacute;digo Video*** muestra el c&oacute;digo de implementaci&oacute;n para los fragment shaders usados en la imagen y el video respectivamente, ambos tienen comentarios de su funcionamiento para mayor comprensi&oacute;n.

# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Imagen RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/workshop2/RGBLumaImagen.js, width=1000, height=410
> 
> > :Tab title= Video RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/workshop2/RGBLumaVideo.js, width=720, height=400
>
> > :Tab title= Instrucciones
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
> > :Tab title= C&oacute;digo Imagen
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
>
> > :Tab title= C&oacute;digo Video
> >
> > ``` glsl | webcam.frag
> > // Funcion para calculo de valor Luma de un color
> > float luma(vec3 color) {
> >   return dot(color, vec3(0.299, 0.587, 0.114));
> > }
> > 
> > // Funcion para calculo del promedio RGB
> > float grayRGB(vec3 color) {
> >   float lightness=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
> >   return lightness;
> > }
> > void main() {
> > 
> >   vec2 uv = vTexCoord;
> >   // voltear la textura para mostrarse al derecho
> >   uv = 1.0 - uv;
> > 
> >   vec4 tex = texture2D(tex0, uv);
> > 
> >    float gray;
> >    //Dejar valores de color originales desde el inicio
> > 
> >    float threshR = tex.r ;
> >    float threshG = tex.g ;
> >    float threshB = tex.b ;
> >   
> >   // Si la tecla de control es 1 se calcula la el promedio RGB
> >   if (u_key==1){
> > 
> >     gray =grayRGB(tex.rgb);
> > 
> >     threshR = gray ;
> >     threshG = gray ;
> >     threshB = gray ;
> >   }else if (u_key==2){
> >     // Si la tecla de control es 2 se calcula el valor luma 
> >     gray = luma(tex.rgb);
> > 
> >     threshR = gray ;
> >     threshG = gray ;
> >     threshB = gray ;
> >   }
> > 
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