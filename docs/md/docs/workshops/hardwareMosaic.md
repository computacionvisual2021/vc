
<h1 align="center">Foto-mosaico</h1>

# Antecedentes

El foto mosaico es una practica o método usado en la fotografía para constituir una imagen con base a pequeñas fotografias que encajan con el patrón y/o color de la imagen objetivo. Al detallar así la imagen resultado se revelan las pequeñas imagenes que la componene y al alejarse se ve más claramente la imagen objetivo. Usualmente los mosaicos son creados por computadora de dos maneras diferentes:

+ **Simple:** Cada parte de la imagen objetivo y cada imagen de la librería del mosaico son promediadas a un color, y se reemplazan las partes de la imagen objetivo con las imagenes de la librería cuyo color promedio sea más cercano.

+ **Avanzado:** Aquí no se compara un promedio de color sino el valor de cada pixel, por lo que cada zona se reemplaza con la imagen que menos diferencia con la original presente en su totalidad.

El uso del método simple hace que se pierda resolución en la imagen objetivo, mientras que la solución avanzada puede mantener la resolución pero requiere muchos más recursos computacionales para su realización. A continuación un ejemplo de un fotomosaico para la imagen de un elefante compuesto por fotografias de distintos objetos y/o animales:

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/mosaicoElefante.png" width=500/>
</p>
</div>

[Elephant Mosaic](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkCJaNfiG-bcDQ9AsPMYkcghJmzyMozOimU-oJGR1U__VI7d4E5kWRz_aLxjAA990rPY&usqp=CAU)

En cuanto a los orígenes del foto-mosaico se le atribuye su creación por computadora a Joseph Francis en 1993 con su invensión del poster *Live from Bell Labs* inspirado en el trabajo del pintor y fotógrafo Charles (Chuck) Close en obras como "Lucas"(1986-1987) en donde los elementos del cuadro son marcas separadas entre si, que a la distancia dan la ilusión de ser un retrato realista. Joseph deseaba hacer algo similar pero con fotografías, por lo que creó un programa que alimentado con alrededor de 6 fotos escaneadas, controlaba la transparencia (canal alpha) de cada foto para que acomodará al resultado deseado, y así con su primer trabajo realizado, aumentó la popularidad de este nuevo concepto.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/Chuck_Close.jpg" width=500/>
</p>
</div>

["Lucas"(1986-1987)-Charles Close](https://upload.wikimedia.org/wikipedia/en/a/ae/Chuck_Close_2.jpg)

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/JosephPoster.jpg" width=500/>
</p>
</div>

[Live from Bell Labs(1993)-Joseph Francis](https://digitalartformcom.files.wordpress.com/2017/01/bellposter.jpg)

A partir de ese momento varios artistas toman la idea para representar imagenes como foto mosaicos, uno de los trabajos más destacados es **Gioconda Sapiens (1995)**, un foto-mosaico de la famosa mujer de Da Vinci compuesto por fotografías de 10.062 personas de 110 paises.

El término *Photomosaic* se patenta por Robert Silvers en 1995 tras crear un algoritmo para generar foto mosaicos programáticamente cuya patente también se genero en 1997. Uno d elos fenómenos más recientes y posibles dentro de los mosaicos es el Video mosaico, cuyo concepto se situa en la generación de imagenes a partir de clips de videos.

A continuaci&oacute;n en la pesta&ntilde;a ***Imagen Foto-Mosaico*** se podr&aacute; visualizar la implementaci&oacute;n de la técnica sencilla para la generación de un foto mosaico de una imagen base por medio de shaders en WEBGL, lo cual permite que se ejecute el c&oacute;digo directamente en la unidad de procesamiento gr&aacute;fica GPU. Aquí se crea una textura con la imagen base y se permite que el ususario elija la resolución o cantidad de imagenes que desea conformen el ancho/alto del foto mosaico por medio de un deslizador. El usuario incialmente verá la imagen original en la resolución especificada y podrá cambiar al foto-mosaico generado por el algoritmo, activando la casilla de verificación "Mosaic". Se hace uso de un dataset de imagenes previamente ordenado con relación a su luminosidad, puesto que el algoritmo relaciona la luminosidad de un texel con la imagen correspondiente.

Por su parte, la pesta&ntilde;a ***Instrucciones*** describe un paso a paso del proceso de la creación del foto mosaico; Iniciando con la creaci&oacute;n de los shaders respectivos a partir de los ***Fragment Shader y Vertex Shader*** correspondientes, una vez creado el canvas tipo WEBGL se pasan los datos de imagen original y el dataset de imagenes al fragment shader para que identifique seg&uacute;n la luminosidad que imagen debe renderizar en pantalla. 

Finalmente, la pesta&ntilde;a ***C&oacute;digo*** muestra el c&oacute;digo de implementaci&oacute;n para el fragment shader (que contiene la lógica de renderizado) usado con comentarios de su funcionamiento para mayor comprensi&oacute;n.

# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Imagen Foto-Mosaico
> > 
> > > :P5 sketch=/docs/sketches/workshop2/mosaic.js, width=620, height=620
> >
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

Se mostr&oacute; exitosamente como es la implementaci&oacute;n l&oacute;gica y fundamentaci&oacute;n te&oacute;rica de la creación de un foto mosaico de una manera sencilla. A pesar de esto y de que la aproximación obtenida no es muy cercana a la imagen original, se concluye que influyen diversos factores para este resultado:

+ El dataset de imagenes es demasiado pequeño (12 imágenes) por lo que entre menos definición más irreconocible se vuelve el resultado.

+ El ordenamiento previo de las imagenes a usar tiene altas probabilidades de ser inexacto por lo que resulta útil realizar un algoritmo de ordenamiento de luminosidad para el dataset de imagenes, con el ánimo de relacionar correctamente las imagenes a renderizar con los valores de la luminosidad original. 

Como aplicación en el ámbito artístico se observa un alto potencial de integración con sistemas de inteligencia artificial y redes neuronales para poder buscar y clasificar imagenes adecuadamente para la construcción de foto mosaicos.  Sin embargo cabe la posibilidad de la incursi&oacute;n en rubros como la medicina en la terapia con mosaicos de imagenes. De igual manera las simulaciones y/o desarrollo de videojuegos pueden ser ejecutadas con ayuda de foto mosaicos que le pueden brindar un estilo especial a productos audiovisuales.


# Referencias y Bibliograf&iacute;a

[Historia del Foto-Mosaico](https://digitalartform.com/2017/01/05/history-of-photo-mosaics/)

[Mosaico Fotográfico](https://en.wikipedia.org/wiki/Photographic_mosaic)

[Chuck Close](https://en.wikipedia.org/wiki/Chuck_Close)

[Photomosaic logic base](https://github.com/computacionvisual2021/vc/blob/main/docs/sketches/workshop1/photomosaic2.js)

[Image Photomosaic Fragment Shader Base](https://github.com/VisualComputing/hugo-vc/blob/main/content/sketches/photomosaic.frag)


> :ToCPrevNext