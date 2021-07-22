
<h1 align="center">M&aacute;scaras de Convoluci&oacute;n</h1>

# Antecedentes

Las m&aacute;scaras de Convoluci&oacute;n son una manera de aplicar efecto a las representaciones gr&aacute;ficas y obtener nuevos efectos o asignaciones de color a partir de operaciones matem&aacute;ticas. Usualmente se hace uso de la llamada ***matriz de convoluci&oacute;n*** que incluye los valores de color de la imagen/elemento original y el ***kernel*** el cual es una matriz cuadrada que contiene pesos definidos que alteran los valores de los pixeles seg&uacute;n su magnitud. La operaci&oacute;n de convoluci&oacute;n se expresa matem&aacute;ticamente de la siguiente manera:

Sea ***I*** la matriz de los valores de color de una imagen, y ***K*** el kernel de un filtro determinado, entonces la matriz de la imagen filtrada ***G*** se calcular&aacute; como:

> :Formula  align=center
> ```
> G(x,y) = K(dx, dy) * I(x, y) = \sum_{dx=-a}^{a} \sum_{dy=-b}^{b} K(dx,dy) * I(x+dx,y+dy),
> ```

donde los elementos de ***K*** cumplen: [-a \leq dx \leq a](:Formula) y [-b \leq dy \leq b](:Formula). Por tanto el proceso de convoluci&oacute;n es la accion de sumar cada elemento de la imagen a sus vecinos pr&oacute;ximos ponderados por el kernel. Sin embargo la convoluci&aacute;n no consiste en la multiplicaci&aacute;n de matrices habitual. Es usual usar kernels de tama&ntilde;o 3x3 (a pesar de que existen de mayor tama&ntilde;o), la operaci&oacute;n de convoluci&oacute;n corresponder&aacute; a situar el elemento del centro del kernel en el pixel a analizar. El kernel se solapar&aacute; con los valores vecinos alrededor del centro, por lo que cada elemento del kernel debe multiplicarse con el valor que est&aacute; solapando y finalmente todos los valores deben sumarse para dar como resultado el nuevo valor del pixel analizado (que se solapa por el centro del kernel). La imagen a continuaci&oacute;n muestra gr&aacute;ficamente este proceso:

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/convolution2.png" width=500/>
</p>
</div>

[Convolution Process Image](https://programmerclick.com/images/833/7140bcc7002f1d51bb30d256dcc7fee9.png)

En caso de que el kernel tenga mayores dimensiones, la operaci&oacute;n de convoluci&oacute;n requiere que las filas y columnas del kernel se intercambien horizontal y verticalmente antes de realizar calculos. Adicionalmente se debe manejar una estrategia para los bordes de una imagen, ya que en las operaciones, una parte del kernel se situar&aacute; por fuera de la imagen; para esto se puede adoptar una de las siguientes convenciones:

+ **Extend:** Los pixeles mas cercanos al borde se extienden para tener los valores necesarios para la convoluci&oacute;n.
+ **Wrap:** Se toman los pixeles necesarios para la convoluci&oacute;n del extremo opuesto al que se requieren, por ejemplo si el kernel necesita solaparse con 3 pixeles del borde superior de la imagen entonces tomar&aacute; los correspondientes del borne inferior de la misma.
+ **Mirror:** Se reflejan los pixeles necesarios, por ejemplo si se desea un pixel que esta 2 unidades afura, se toma como el correspondiente 2 unidades hacia dentro de la imagen.
+ **Crop:** No se hacen calculos para los pixeles del borde lo que resulta en una imagen un poco m&aacute;s peque&ntilde;a.

Dependiendo de los valores, un kernel puede generar diferentes efectos, entre los m&aacute;s comunes se encuentran la detecci&oacute;n de bordes, difuminaci&oacute;n, emboss (identificaci&oacute;n de sombras o brillos). En el presente taller se detallar&aacute; en la implementaci&oacute;n de convoluciones, tanto de las que hacen uso de un kernel como algunas especiales que no (ver pesta&ntilde;a ***M&aacute;scaras video***). Para esto a continuaci&oacute;n en la pesta&ntilde;a ***M&aacute;scaras Imagen*** se podr&aacute; visualizar la implementaci&oacute;n de algunas convoluciones mencionadas anteriormente aplicadas a una imagen por medio de shadders en WEBGL, lo cual permite que se ejecute el c&oacute;digo directamente en la unidad de procesamiento gr&aacute;fica GPU. Se crea una textura con la imagen y a esa textura se le aplica la matriz de convoluci&oacute;n correspondiente seg&uacute;n el usuario especifique con las siguientes teclas:

| Tecla |      M&aacute;scara      |
|:-----:|:------------------------:|
|   0   |   Identidad (Original)   |
|   1   |          Emboss          |
|   2   | Outline (Edge Detection) |
|   3   |          Sharpen         |
|   4   |         Top Sobel        |
|   5   |       Gaussian Blur      |
|   6   |        Left Sobel        |

La representaci&oacute;n de la imagen convolucionada se visualizar&aacute; aplicada a una elipse y a un cubo que rota, con el &aacute;nimo de explorar una de las capacidades de WEBGL que es el manejo de elementos en 3D. De igual manera veremos como la luz puede afectar principalmente a el mencionado objeto 3D al pasar el cursor sobre el mismo y ver como la luz de distorsiona sobre el objeto (se observa mejor al dejar el cursor est&aacute;tico en un lugar cerca al cubo).

En la pesta&ntilde;a ***M&aacute;scaras Video*** se visualizan otras m&aacute;scaras pero esta vez aplicadas a la captura de video por c&aacute;mara en tiempo real. El video responde a los comandos por teclas mostrados en la siguiente tabla, igualmente aplicando las texturas a un shader de WEBGL.

| Tecla |      M&aacute;scara      |
|:-----:|:------------------------:|
|   0   |   Identidad (Original)   |
|   1   |      RGB Negative ?      |
|   2   |          Inverse         |
|   3   |     Single Pass Blur     |
|   4   | Outline (Edge Detection) |
|   5   |          Emboss          |

Para este caso, las m&aacute;scaras denominadas como ***RGB Negative e Inverse*** no hacen uso de un kernel como tal sino que efectuan operaciones determinadas sobre cada color de la imagen, est&aacute;n incluidas a causa de su aplicaci&oacute;n en la transformaci&oacute;n de imagenes.

Por su parte, la pesta&ntilde;a ***Instrucciones*** describe un paso a paso del proceso de convoluci&oacute;n de los elementos mencionados (imagen y video) ya que son pasos en su mayor&iacute;a similares; Iniciando con la creaci&oacute;n de los shaders respectivos a partir de los ***Fragment Shader y Vertex Shader*** correspondientes, una vez creado el canvas tipo WEBGL se pasan los datos de imagen o video al fragment shader para que identifique seg&uacute;n la tecla presionada por el usuario que tipo de m&aacute;scara de convoluci&oacute;n desea. Por &uacute;ltimo el ***Fragment Shader*** realiza las operaciones de la m&aacute;scara deseada y devuelve el renderizado de la imagen/video para ser mostrada.

Finalmente, las pesta&ntilde;as ***C&oacute;digo Imagen y C&oacute;digo Video*** muestran el c&oacute;digo de implementaci&oacute;n para los fragment shaders usados en la imagen y el video respectivamente, ambos tienen comentarios de su funcionamiento para mayor comprensi&oacute;n.

# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= M&aacute;scaras Imagen
> > 
> > > :P5 sketch=/docs/sketches/workshop2/MascarasImagen.js, width=1000, height=410
>
> > :Tab title= M&aacute;scaras Video
> > 
> > > :P5 sketch=/docs/sketches/workshop2/MascarasVideo.js, width=720, height=400
>
> > :Tab title= Instrucciones
> > 
> > | No. | Descripci&oacute;n |
> > |---|---|
> > | 1 | Precargar Shader para imagen/ video con el vertex y fragment shader. |
> > | 2 | Dividir el área a lo largo de una línea horizontal o vertical. |
> > | 3 | Seleccionar una de las dos nuevas celdas de partición. |
> > | 4 | Realizar nuevamente el paso numero 2. |
> > | 5 | A partir de la tecla presionada por el usuario se definen los valores de la matriz kernel de convoluci&oacute;n (si aplica). |
> > | 6 | En el caso de Imagen (y algunas m&aacute;scaras de Video) se obtienen los pixeles vecinos por cada pixel. |
> > | 7 | Se realiza la operaci&oacute;n de convoluci&oacute;n con el kernel o valores correspondientes a cada pixel. |
> > | 8 | Con el vector del nuevo color renderiza este valor producto de la convoluci&oacute;n y se muestra en pantalla. |
> > | 9 | En el caso de Imagen, aplicar la textura renderizada en 2D(elipse) y 3D (cubo). |
> > 
>
> > :Tab title= C&oacute;digo Imagen
> >
> > ``` glsl | convMask.frag
> > varying vec2 vTexCoord;
> > // Valores que se pasan desde p5
> > uniform sampler2D u_img;
> > uniform int u_key;
> > uniform vec2 stepSize; //Tama&ntilde;o del texel a usar para cada paso ( 1.0 / width)
> > 
> > //Arreglo de 9 valores, cada uno representa un valor alrederor de un pixel (vecinos) 
> > // y el pixel mismo
> > vec2 offset[9];
> > 
> > // Arreglo con los valores de la matriz de convolucion a usar
> > float kernel[9];
> > 
> > // valor de convolucion que sera renderizado en la pantalla
> > vec4 conv = vec4(0.0);
> > 
> > void main() {
> >   vec2 uv = vTexCoord;
> > 
> >   //Invierte la posicion de la cordenada  para que la imagen no quede alrreves
> >   uv.y = 1.0 - uv.y;
> > 
> >   // identity kernel 
> >   kernel[0] = 0.0; kernel[1] = 0.0; kernel[2] = 0.0;
> >   kernel[3] = 0.0; kernel[4] = 1.0; kernel[5] = 0.0;
> >   kernel[6] = 0.0; kernel[7] = 0.0; kernel[8] = 0.0;
> > 
> >  //Segun la tecla presionada por el usuario se define el kernel de la mascara respectiva
> >   
> >    if(u_key==1){
> >   
> >   // emboss kernel 
> >   kernel[0] = -2.0; kernel[1] = -1.0; kernel[2] = 0.0;
> >   kernel[3] = -1.0; kernel[4] = 1.0; kernel[5] = 1.0;
> >   kernel[6] = 0.0; kernel[7] = 1.0; kernel[8] = 2.0;
> > 
> >   }else if (u_key==2){
> >   
> >   // edge detection 
> >    kernel[0] = -1.0; kernel[1] = -1.0; kernel[2] = -1.0;
> >    kernel[3] = -1.0; kernel[4] = 8.0; kernel[5] = -1.0;
> >    kernel[6] = -1.0; kernel[7] = -1.0; kernel[8] = -1.0;
> > 
> >   }else if (u_key==3){
> >   
> >   // sharpen kernel
> >    kernel[0] = 0.0; kernel[1] = -1.0; kernel[2] = 0.0;
> >    kernel[3] = -1.0; kernel[4] = 5.0; kernel[5] = -1.0;
> >    kernel[6] = 0.0; kernel[7] = -1.0; kernel[8] = 0.0;
> > 
> >   }else if (u_key==4){
> >   
> >   // top sobel
> >    kernel[0] = 1.0; kernel[1] = 2.0; kernel[2] = 1.0;
> >    kernel[3] = 0.0; kernel[4] = 0.0; kernel[5] = 0.0;
> >    kernel[6] = -1.0; kernel[7] = -2.0; kernel[8] = -1.0;
> > 
> >   }else if (u_key==5){
> >   
> >   // blur kernel
> >    kernel[0] = 0.0625; kernel[1] = 0.125; kernel[2] = 0.0625;
> >    kernel[3] = 0.125; kernel[4] = 0.25; kernel[5] = 0.125;
> >    kernel[6] = 0.0625; kernel[7] = 0.125; kernel[8] = 0.0625;
> > 
> >   }else if (u_key==6){
> >   
> >   // left sobel kernel
> >    kernel[0] = 1.0; kernel[1] = 0.0; kernel[2] = -1.0;
> >    kernel[3] = 2.0; kernel[4] = 0.0; kernel[5] = -2.0;
> >    kernel[6] = 1.0; kernel[7] = 0.0; kernel[8] = -1.0;
> > 
> >   } else if (u_key==0){
> > 
> >   // identity kernel values
> >   kernel[0] = 0.0; kernel[1] = 0.0; kernel[2] = 0.0;
> >   kernel[3] = 0.0; kernel[4] = 1.0; kernel[5] = 0.0;
> >   kernel[6] = 0.0; kernel[7] = 0.0; kernel[8] = 0.0;
> > 
> >   }
> >   
> >   //Guardar la ubicaci�n de los pixeles vecinos
> > 	offset[0] = vec2(-stepSize.x, -stepSize.y); // top left
> > 	offset[1] = vec2(0.0, -stepSize.y); // top middle
> > 	offset[2] = vec2(stepSize.x, -stepSize.y); // top right
> > 	offset[3] = vec2(-stepSize.x, 0.0); // middle left
> > 	offset[4] = vec2(0.0, 0.0); //middle
> > 	offset[5] = vec2(stepSize.x, 0.0); //middle right
> > 	offset[6] = vec2(-stepSize.x, stepSize.y); //bottom left
> > 	offset[7] = vec2(0.0, stepSize.y); //bottom middle
> > 	offset[8] = vec2(stepSize.x, stepSize.y); //bottom right
> > 
> > 	//Por cada pixel vecino
> > 	for(int i = 0; i<9; i++){
> > 		//sample a 3x3 grid of pixels
> > 		vec4 color = texture2D(u_img, uv + offset[i]);
> > 
> > 		//multiplicar el color del pixel por el valor correspondiente del kernel y 
> > 		// a&ntilde;adirlo al valor total de la convolucion
> > 		conv += color * kernel[i];
> > 		
> > 	}//for end
> > 	
> >   // Se renderiza la salida con el valor de la convolucion
> >   gl_FragColor = vec4(conv.rgb, 1.0);  
> > }
> > }
> > 
> > ```
> > 
>
> > :Tab title= C&oacute;digo Video
> >
> > ``` glsl | webcamMask.frag
> > // textura de p5
> >uniform sampler2D tex0;
> >//valor de la tecla presionada por el usuario
> >uniform int u_key;
> >//Tama&ntilde;o de pixel en la pantalla
> >uniform vec2 texelSize;
> >
> >//Arreglo de 9 valores, cada uno representa un valor alrederor de un pixel (vecinos)
> >// y el pixel mismo
> >vec2 offset[9];
> >
> >// Arreglo con los valores de la matriz de convolucion a usar
> >float kernel[9];
> >
> >// valor de convolucion que sera renderizado en la pantalla
> >vec4 conv = vec4(0.0);
> >
> >void main() {
> >
> >  vec2 uv = vTexCoord;
> >  // voltear la textura para mostrarse al derecho
> >  uv = 1.0 - uv;
> >
> >  vec4 tex = texture2D(tex0, uv);
> > 
> >  //Dejar valores de color originales desde el inicio
> >
> >   float threshR = tex.r ;
> >   float threshG = tex.g ;
> >   float threshB = tex.b ;
> >
> >   vec4 thresh = vec4(threshR, threshG, threshB, 1.0);
> >
> >  //Si la tecla es 0 se muestra el video original
> >  if (u_key==0){
> >  
> >  float threshR = tex.r ;
> >   float threshG = tex.g ;
> >   float threshB = tex.b ;
> >
> >   vec4 thresh = vec4(threshR, threshG, threshB, 1.0);
> >
> >  }else if (u_key==1){
> >
> >  //Si la tecla es 1 se muestra la mascara correspondiente
> >
> >   float gray = (tex.r + tex.g + tex.b) / 3.0;
> >    
> >    float res = 20.0;
> >    float scl = res / (10.0);
> >    
> >    float threshR = (fract(floor(tex.r*res)/scl)*scl) * gray ;
> >    float threshG = (fract(floor(tex.g*res)/scl)*scl) * gray ;
> >    float threshB = (fract(floor(tex.b*res)/scl)*scl) * gray ;
> >    
> >  thresh = vec4(threshR, threshG, threshB, 1.0);
> >  }else if (u_key==2){
> >
> > //Si la tecla es 2 se muestra la mascara inversa
> >
> >  tex.rgb = 1.0 - tex.rgb;
> >  thresh = tex;
> >
> >  }else if (u_key==3){
> >
> >  //Si la tecla es 3 se muestra la mascara single pass blur
> >  //consiste en promediar todos los pixeles vecinos del mismo, incluyendo el propio pixel
> >  
> >  // creacion de valor del paso a dar para calcular vecinos de un pixel
> >  vec2 step =  texelSize * 4.0;
> >
> >  // obtener los pixeles vecinos y sumarlos en el vector tex
> >  
> >  vec4 tex = texture2D(tex0, uv); // middle middle -- el pixel actual
> >  
> >  tex += texture2D(tex0, uv + vec2(-step.x, -step.y)); // top left
> >  tex += texture2D(tex0, uv + vec2(0.0, -step.y)); // top middle
> >  tex += texture2D(tex0, uv + vec2(step.x, -step.y)); // top right
> >
> >  tex += texture2D(tex0, uv + vec2(-step.x, 0.0)); //middle left
> >  tex += texture2D(tex0, uv + vec2(step.x, 0.0)); //middle right
> >
> >  tex += texture2D(tex0, uv + vec2(-step.x, step.y)); // bottom left
> >  tex += texture2D(tex0, uv + vec2(0.0, step.y)); // bottom middle
> >  tex += texture2D(tex0, uv + vec2(step.x, step.y)); // bottom right
> >  
> >  // se toma el promedio de los valores sumados
> >  tex /= 9.0;
> >
> >  thresh = tex;
> >
> >  }else if (u_key==4 || u_key==5){
> >
> >  //Si la tecla es 4 o 5 se aplica la mascara edge detection (outline) o emboss
> >	vec4 conv = vec4(0.0);
> >	if(u_key==4){
> >  // edge detection kernel
> >   kernel[0] = -1.0; kernel[1] = -1.0; kernel[2] = -1.0;
> >   kernel[3] = -1.0; kernel[4] = 8.0; kernel[5] = -1.0;
> >   kernel[6] = -1.0; kernel[7] = -1.0; kernel[8] = -1.0;
> >
> >   } if (u_key==5){
> >   
> >   // emboss kernel values
> >  kernel[0] = -2.0; kernel[1] = -1.0; kernel[2] = 0.0;
> >  kernel[3] = -1.0; kernel[4] = 1.0; kernel[5] = 1.0;
> >  kernel[6] = 0.0; kernel[7] = 1.0; kernel[8] = 2.0;
> >   }
> >
> >   //Guardar la ubicaci�n de los pixeles vecinos
> >	offset[0] = vec2(-texelSize.x, -texelSize.y); // top left
> >	offset[1] = vec2(0.0, -texelSize.y); // top middle
> >	offset[2] = vec2(texelSize.x, -texelSize.y); // top right
> >	offset[3] = vec2(-texelSize.x, 0.0); // middle left
> >	offset[4] = vec2(0.0, 0.0); //middle
> >	offset[5] = vec2(texelSize.x, 0.0); //middle right
> >	offset[6] = vec2(-texelSize.x, texelSize.y); //bottom left
> >	offset[7] = vec2(0.0, texelSize.y); //bottom middle
> >	offset[8] = vec2(texelSize.x, texelSize.y); //bottom right
> >	
> >	//Por cada pixel vecino
> >	for(int i = 0; i<9; i++){
> >		//sample a 3x3 grid of pixels
> >		vec4 color = texture2D(tex0, uv + offset[i]);
> >
> >		//multiplicar el color del pixel por el valor correspondiente del kernel y 
> >		// a&ntilde;adirlo al valor total de la convolucion
> >		conv += color * kernel[i];
> >		
> >	}//for end
> >	thresh =  vec4(conv.rgb, 1.0);
> >  }else{
> >  
> >  //Dejar valores de color originales 
> >
> >   float threshR = tex.r ;
> >   float threshG = tex.g ;
> >   float threshB = tex.b ;
> >
> >   vec4 thresh = vec4(threshR, threshG, threshB, 1.0);
> >  }
> >  
> >  // Se renderiza la salida con el valor de la convolucion
> >  gl_FragColor = thresh;
> >}
> > ```
> >

Con base en la implementaci&oacute;n mostrada se puede evidenciar como la convoluci&oacute;n afecta en la representaci&oacute;n de una imagen y permite a su vez analizar propiedades que no son evidentes a la vista humana a priori. La principal aplicaci&oacute;n de las m&aacute;scaras de convoluci&oacute;n es evidentemente en el campo de la fotograf&iacute;a y las aplicaciones relacionadas, en donde la l&oacute;gica de los diferentes estilos y filtros que se le pueden aplicar a las imagenes est&aacute; fundamentado en una operaci&oacute;n de convoluci&oacute;n. 

Se resalta que, en el presente taller se observaron operaciones relativamente sencillas y sin mayor grado de complejidad, sin embargo, para filtros m&aacute;s espec&iacute;ficos es necesario efectuar operaciones de mayor grado como por ejemplo los filtros sepia para imagenes. 

Por otra parte se concluye que las m&aacute;scaras de convoluci&oacute;n tienen un alto potencial en aplicarse en el diagn&oacute;stico de trastornos visuales e incluso en la terapia del manejo de estos mismos al dise&ntilde;ar e implementar filtros definidos que posean las propiedades m&eacute;dicas necesarias para la funci&oacute;n deseada. De igual manera en la industria del entretenimiento como los videojuegos y la producci&oacute;n audiovisual se abre la posibilidad de representar con mas certeza algunas caracter&iacute;sticas del sentido de la vista como condiciones de enfoque y perspectiva de manera m&aacute;s realista.

# Referencias y Bibliograf&iacute;a

[Convolution Fundamentals](https://docs.gimp.org/2.6/es/plug-in-convmatrix.html)

[Convolution Process and Kernel Fundamentals](https://en.wikipedia.org/wiki/Kernel_(image_processing\))

[Kernel values](https://setosa.io/ev/image-kernels/)

[Image Convolution Fragment Shader Base](https://github.com/VisualComputing2020/VisualComputing2020.github.io/tree/master/js/shaders)

[Video Convolution Mask Assets ](https://github.com/processing/p5.js-website/tree/main/src/data/examples/assets)

[Image and Video Convolution Masks](https://github.com/aferriss/p5jsShaderExamples/tree/gh-pages/4_image-effects)

[Convolution Process Image](https://programmerclick.com/images/833/7140bcc7002f1d51bb30d256dcc7fee9.png)

> :ToCPrevNext