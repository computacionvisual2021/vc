
<h1 align="center">Foto-mosaico</h1>

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
> > :Tab title= Imagen Foto-Mosaico
> > 
> > > :P5 sketch=/docs/sketches/workshop2/mosaic.js, width=620, height=620
>
> > :Tab title= Instrucciones
> > 
> > | No. | Descripci&oacute;n |
> > |---|---|
> > | 1 | Precargar Shader para imagen con el vertex y fragment shader. |
> > | 2 | Crear canvas de WEBGL. |
> > | 3 | Crear el shader a partir del precargado. |
> > | 4 | Pasar datos de imagen base, imagenes de mosaico y botones de resolución y activación de mosaico al Fragment Shader. |
> > | 5 | El fragment shader carga la textura |
> > | 6 | Calcula el valor del luma en cada texel |
> > | 7 | Según el valor del luma calculado se escoge la imagen a renderizar (dentro del conjunto previamente ordenado por luminosidad) |
> > | 8 | Renderizar la imagen correspondiente al valor de luminosidad en la pantalla en la resolución del mosaico deseada. |
>
> > :Tab title= C&oacute;digo 
> >
> > ``` glsl | mosaic.frag
> > 
> > void main() {
> >   // remap omCoord to [0.0, resolution] ∈ R
> >   vec2 omCoord = vTexCoord * resolution;
> >   // remap texCoord to [0.0, resolution] ∈ Z
> >   vec2 texCoord = floor(omCoord);
> >   // remap omCoord to [0.0, 1.0] ∈ R
> >   omCoord = omCoord - texCoord;
> >   // remap texCoord to [0.0, 1.0] ∈ R
> >   texCoord = texCoord * vec2(1.0) / vec2(resolution);
> >   // get vec4 image texel (may be used as color hash index by some apps)
> >   vec4 imgTexel = texture2D(img, texCoord);
> >   
> >   //Calcular luma del texel
> >   float luma = imgTexel.r *0.299 + imgTexel.g * 0.587 +  imgTexel.b*0.114;
> >   //Si está activada la casilla de Mosaico 
> >   if(om_on) {
> >     
> >     vec4 omTexel;
> >    //Según el valor del luma calculado, se renderiza la imagen correspondiente
> >     if(luma < 0.066 && luma >= 0.0){
> >          gl_FragColor = texture2D(img0, omCoord);
> > 
> >     }else if(luma < 0.132 && luma >= 0.066){
> >          gl_FragColor = texture2D(img1, omCoord);
> >         
> >     }else if(luma < 0.198 && luma >= 0.132){
> >          gl_FragColor = texture2D(img2, omCoord);
> >         
> >     }else if(luma < 0.264 && luma >= 0.198){
> >          gl_FragColor = texture2D(img3, omCoord);
> >         
> >     }else if(luma < 0.33 && luma >= 0.264){
> >          gl_FragColor = texture2D(img4, omCoord);
> >         
> >     }else if(luma < 0.396 && luma >= 0.33){
> >          gl_FragColor = texture2D(img5, omCoord);
> >         
> >     }else if(luma < 0.462 && luma >= 0.396){
> >          gl_FragColor = texture2D(img6, omCoord);
> >         
> >     }else if(luma < 0.528 && luma >= 0.462){
> >          gl_FragColor = texture2D(img7, omCoord);
> >         
> >     }else if(luma < 0.594 && luma >= 0.528){
> >          gl_FragColor = texture2D(img8, omCoord);
> >         
> >     }else if(luma < 0.66 && luma >= 0.594){
> >          gl_FragColor = texture2D(img9, omCoord);
> >         
> >     }else if(luma < 0.726 && luma >= 0.66){
> >          gl_FragColor = texture2D(img10, omCoord);
> >         
> >     }else if(luma < 0.792 && luma >= 0.726){
> >          gl_FragColor = texture2D(img11, omCoord);
> >          
> >     }else if(luma < 0.858 && luma >= 0.792){
> >          gl_FragColor = texture2D(img11, omCoord);
> >          
> >     }else if(luma < 0.924 && luma >= 0.858){
> >          gl_FragColor = texture2D(img12, omCoord); 
> >       
> >     }else if(luma <= 1.0 && luma >= 0.924){
> >          gl_FragColor = texture2D(img12, omCoord);
> >         
> >     }
> >      
> >   }
> >   else {
> >   //Si no esta acitava la casilla de mosaico, se muestra la imagen original
> >     gl_FragColor = imgTexel;
> >   }
> > }
> > 
> > ```
> > 

Se mostr&oacute; exitosamente como es la implementaci&oacute;n l&oacute;gica y fundamentaci&oacute;n te&oacute;rica de la conversi&oacute;n a escala de grises por medio del promedio RGB y c&aacute;lculo de Luma. A pesar de haber mostrado un acercamiento m&iacute;nimo al renderizado 3D, se estima y se evidencia la alta capacidad para la representaci&oacute;n de objetos con las texturas deseadas en un entorno espacial definido; las principales aplicaciones de lo mostrado son relacionadas con la creaci&oacute;n de videojuegos e incluso de realidad virtual. Sin embargo cabe la posibilidad de la incursi&oacute;n en rubros como la medicina en el diagn&oacute;stico de imagenes, al pensar en una representaci&oacute;n 3D del cuerpo humano y sus organos internos con texturas analizadas en laboratorio. De igual manera las simulaciones en cualquier &aacute;mbito pueden ser ejecutadas con ayuda de los shaders.

Por su parte la escala de grises ayuda a la comparaci&oacute;n de la luminosidad de los colores, lo que permite la clasificaci&oacute;n de los mismos y tambi&eacute;n a distinguir los grados de claridad en las atenuaciones y degradados de color. Todas estas son parte fundamental en el dise&ntilde;o gr&aacute;fico y sus lineas de desempe&ntilde;o. Una de las aplicaciones m&aacute;s novedosa consiste en la recuperaci&oacute;n de imagenes con sus colores originales a partir de su versi&oacute;n en escala de grises, sin embargo para esto hay que ajustar el brillo y el componenete gamma (Separaci&oacute;n entre el color azul y el negro), entre otros. Tal como lo muestra el [estudio realizado por Jes&uacute;s Gustavo folres Era&ntilde;a](https://ninive.uaslp.mx/xmlui/bitstream/handle/i/2264/MCA1SDC00901.pdf?sequence=1&isAllowed=y#:~:text=La%20escala%20de%20grises%20se,gradaciones%20de%20este%20color%20puro.).


# Referencias y Bibliograf&iacute;a

[Photomosaic logic base](https://github.com/computacionvisual2021/vc/blob/main/docs/sketches/workshop1/photomosaic2.js)

[Image Photomosaic Fragment Shader Base](https://github.com/VisualComputing/hugo-vc/blob/main/content/sketches/photomosaic.frag)


> :ToCPrevNext