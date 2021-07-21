
<h1 align="center">Rasterizaci&oacute;n con Coordenadas Baric&eacute;ntricas</h1>

# Antecedentes

El proceso de raterizaci&oacute;n se origina por la necesidad de representar objetos continuos y bien definidos de manera gr&aacute;fica en una computadora. Para este cometido es necesario realizar la conversi&oacute;n de vectores a pixeles.

Existen diversos m&eacute;todos para realizar rasterizaci&oacute;n en funci&oacute;n de las figuras o elementos a procesar; para el caso de los triangulos, existe un enfoque basado en las llamadas ***Coordenadas Baric&eacute;ntricas***.

El concepto de las coordenadas baric&eacute;ntricas data del a&ntilde;o 1827 cuando el matem&aacute;tico alem&aacute;n August F. M&ouml;bius lo introdujo. Como concepto b&aacute;sico las coordenadas baric&eacute;ntricas permiten identificar si un punto est&aacute; dentro o fuera de un tri&aacute;ngulo. 

Si un plano posee un tri&aacute;ngulo [T](:Formula) con v&eacute;rtices [a, b](:Formula) y [c](:Formula) ; y un punto [p = (x, y)](:Formula) entonces el punto se puede expresar como:

> :Formula  align=center
> ```
> p = c + \beta (b - c) + \alpha (a - c)
> ```
> p = (1 - \alpha - \beta) c + \beta b + \alpha a 
> ```
> p = \gamma c  + \beta b + \alpha a
> ```
> \alpha + \beta + \gamma = 1, \alpha, \beta, \gamma \in R


Por tanto si [\alpha , \beta , \gamma \in \[ 0,1 \]](:Formula) entonces [p](:Formula) se encuentra dentro del tri&aacute;ngulo. Los valores [\alpha , \beta , \gamma ](:Formula) son llamadas las coordenadas baricentricas de [p](:Formula). En la pr&aacute;ctica tenemos que  [a = (ax, ay), b = (bx, by)](:Formula) y [c = (cx, cy)](:Formula) son los puntos que forman [T](:Formula) mientas que para el punto [p = (x, y)](:Formula) sus coordenadas Baric&eacute;ntricas se calculan como:

> :Formula align=center
> ```
> \gamma = \frac{f_{ba}(x,y)}{f_{ba}(cx,cy)} ; \beta = \frac{f_{ac}(x,y)}{f_{ac}(bx,by)} ; \alpha = \frac{f_{cb}(x,y)}{f_{cb}(ax,ay)}
> ```

donde

> :Formula align=center
> ```
> f_{12}(x, y) = (y_1 - y_2)x + (x_2 - x_1)y + x_1 * y_2 - x_2 * y_1 ; 1, 2 \in a,b,c
> ```

De esta manera es posible verificar si un punto se encuentra o no dentro de un tri&aacute;ngulo. A partir de aqu&iacute; se puede plantear la estrategia de rasterizaci&oacute;n. A saber, dibujar el triangulo en una cuadricula, analizar que cuadrados de la cuadricula se encuentran dentro del triangulo por medio de las coordenadas baricentricas , en caso de que este dentro, sombrear el cuadrado corresponndiente, y as&iacute; sucesivamente hasta recorrer toda la cuadricula.

A continuaci&oacute;n en la pesta&ntilde;a ***Coordenadas Baric&eacute;ntricas*** se puede observar el resultado del alrotirmo de las coordenadas baric&eacute;ntricas al situar el cursor sobre el tri&aacute;ngulo dibujado, se podr&aacute;n observar los valores de [\alpha (\lambda_0), \beta (\lambda_1)](:Formula) y [\gamma (\lambda_2)](:Formula) incluso si el cursor esta fuera de la figura (esto causar&aacute; que uno de los valores sea menos a 0 o mayor a 1).

Por su parte en la pesta&ntilde;a ***Rasterizaci&oacute;n Completa*** se mostrar&aacute; la aplicaci&oacute;n de las coordenadas en el proceso de rasterizaci&oacute;n, juntando este c&aacute;lculo con la generaci&oacute;n de la cuadr&iacute;cula en la que se identificar&aacute; cuales cuadrados est&aacute;n dentro del tri&aacute;ngulo (sobrepasando su punto medio), coloreando de blanco aquellos que no se encuentren dentro, y de color los que si se encuentren. Se podr&aacute; alterar la figura del tri&aacute;ngulo al deseado por el usuario en ambas pesta&ntilde;as por medio de los botones ***derecho, izquierdo y central*** del mouse. 

En las pesta&ntilde;as ***Instrucciones y C&oacute;digo*** se detallar&aacute; en la implementaci&oacute;n que sigue este proceso con sus comandos y c&oacute;digo fuente (comentado para mayor claridad).


# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Coordenadas Baric&eacute;ntricas
> > 
> > > :P5 sketch=/docs/sketches/workshop3/rasterizationBayCoord.js, width=500, height=500
>
> > :Tab title= Rasterizaci&oacute;n Completa
> > 
> > > :P5 sketch=/docs/sketches/workshop3/rasterizationFull.js, width=500, height=500
>
> > :Tab title= Instrucciones
> > 
> > | No. | Descripci&oacute;n |
> > |---|---|
> > | 1 | Dibujar cuadr&iacute;cula en el canvas. |
> > | 2 | Graficar tri&aacute;ngulo seg&uacute;n coordenadas se&ntilde;aladas por usuario. |
> > | 3 | Recorrer cuadr&iacute;cula y calcular coordenadas baric&eacute;ntricas del punto medio en cada casilla. |
> > | 4 | Si el punto medio est&aacute; dentro del tri&aacute;ngulo, se rellena del color interpolado la celda. |
> > | 5 | Si el punto medio no est&aacute; dentro del tri&aacute;ngulo, se rellena de color blanco. |
>  
> > :Tab title= C&oacute;digo
> >
> > ``` js | rasterizationFull.js
> > function draw() {
> >    //Poner fondo blanco en el canvas
> >    background(255);
> >    //Dibujar la cuadricula y rasterizar el triangulo actual
> >    drawSquares();
> >    //Grosor del trazado 
> >    strokeWeight(1);
> >    //Trazar con color negro el triangulo actual
> >    stroke(0);
> >    triangle(ax, ay, bx, by, cx, cy);
> >    //Marcador de punto en la ubicacion del cursor en el canvas
> >    point(mouseX, mouseY);
> >    //Cambio de coordenadas de los vertices del triangulo segun el click con los botones central, derecho e izquierdo
> >    if (mouseIsPressed) {
> >        if (mouseButton == LEFT) {
> >            ax = mouseX;
> >            ay = mouseY;
> >        }
> >        if (mouseButton == RIGHT) {
> >            bx = mouseX;
> >            by = mouseY;
> >        }
> >        if (mouseButton == CENTER) {
> >            cx = mouseX;
> >            cy = mouseY;
> >        }
> >    }
> >}
> >
> > //Algoritmo de Rasterizacion que emplea coordenadas baricentricas
> > function drawSquares() {
> >     //Inicializacion de contadores
> >     i = 0;
> >     j = 0;
> >     col = 0;
> >     row = squaresF;
> >     //Recorrer las columnas y las filas
> >     for (i = 0; i <= squares; i++) {
> >         col = 0;
> >         for (j = 0; j <= squares; j++) {
> >             //Grosor del trazo
> >             strokeWeight(1);
> >             //Si el punto medio de la celda que estoy analizando esta dentro del area cubierta por el triangulo
> >             if (inside_triangle(ax, ay, bx, by, cx, cy, col + pointA, row + pointA)) {
> >                 //Calcular las coordenadas baricentricas del punto medio de la celda
> >                 barycentric(ax, ay, bx, by, cx, cy, col + pointA, row + pointA);
> >                 //Rellenar la celda con la interpolacion entre las coordenadas baricentricas y los colores definidos
> >                 fill(239 * alpha, 247 * beta, 255 * gamma );
> >                 //Dibujar la celda recien analizada
> >                 rect(col, row, squaresF, squaresF);
> >             } else {
> >                 //Si el punto medio no esta en el area cubierta por el triangulo
> >                 //Rellenar de color blanco la celda
> >                 fill(255, 255, 255);
> >                 //Dibujar la celda recien analizada
> >                 rect(col, row, squaresF, squaresF);
> >             }
> >             //Pintar el en canvas el punto medio de la celda analizada
> >             strokeWeight(3);
> >             strokeCap(ROUND);
> >             fill(0, 224, 0);
> >             //Poner el color de trazo en negro para el siguiente ciclo
> >             stroke(153, 153, 255);
> >             point(col + pointA, row + pointA);
> >             stroke(0);
> >             //Actualizar la variable col con el valor de la ubicacion del inicio de la siguiente columna de celdas
> >             col += squaresF;
> >         }
> >         //Actualizar la variable row con el valor de la ubicacion del inicio de la siguiente fila de celdas
> >         row += squaresF;
> >     }
> >     //Poner el rellenado en transparente para el siguiente ciclo del canvas
> >     fill(255, 255, 255, 0);
> > }
> > 
> > //Definicion de coordenadas baricentricas a partir de tres puntos de un triangulo (a, b, c) y un punto arbitrario p=(x,y)
> >function barycentric(ax, ay, bx, by, cx, cy, x, y) {
> >    var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
> >    alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
> >    beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
> >   gamma = 1.0 - alpha - beta;
> >    alphaS = nf(alpha, 1, 2);
> >    betaS = nf(beta, 1, 2);
> >    gammaS = nf(gamma, 1, 2);
> >}
> >
> >// Comprobacion de si un punto (x, y) dado esta dentro del area que cubre un triangulo con vertices a, b, c
> >// 1. Calcula coordenadas baricentricas del punto p
> >// 2. Comprueba si los valores de alpha, beta y gamma tienen valores entre 0 y 1, es decir demostrando que p esta dentro del triangulo
> > function inside_triangle(ax, ay, bx, by, cx, cy, x, y) {
> >     var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
> >     var alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
> >     var beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
> >     var gamma = 1.0 - alpha - beta;
> >     return !(alpha < 0 || alpha > 1 || beta < 0 || beta > 1 || gamma < 0 || gamma > 1);
> > }
> > ```
> > 

Se mostr&oacute; exitosamente como es la implementaci&oacute;n l&oacute;gica y fundamentaci&oacute;n te&oacute;rica de la rasterizaci&oacute;n por medio de coordenadas baric&eacute;ntricas. 

A pesar de visualizar un acercamiento en 2D, se resalta la capacidad de este proceso de representaci&oacute;n de figuras 3D ya que es capaz de mapear geometrias hasta los pixeles; de igual manera se tiene la posibilidad de paralelizar este proceso en caso de necesitar el procesamiento de figuras poligonales grandes o con gran cantidad de figuras componiendolo. 

Entre las aplicaciones de la rasterizaci&oacute;n adem&aacute;s de las mencionadas anteriormente, se encuentran el filtrado de texturas, donde se toma en cuenta la distancia de los objetos con relaci&oacute;n al observador sobre los cuales se aplica la textura para mejorar la definici&oacute;n de la misma; el mapeado del entorno empleado cuando la posici&oacute;n de las texturas dependen del punto de vista (por ejemplo los reflejos de un espejo); el mapeado de rugosidad o variaciones de texturas seg&uacute;n la profundidad proporcionada por las coordenadas. 

Particularmente se considera la industria del entretenimiento de videojuegos como el nicho de aplicaci&oacute;n m&aacute;s grande debido a la demanda de procesamiento de gr&aacute;ficos de manera veloz, considerando que las texturas en el dise&ntilde;o de videojuegos modernas son mucho m&aacute;s detallasas y con comportamientos realistas que requieren de un alto rendimiento al transformar objetos en pixeles de manera r&aacute;pida.   

# Referencias y Fuentes: 

[Razterization Definicion](https://elcodigografico.wordpress.com/2014/03/29/coordenadas-baricentricas-en-triangulos/)

[Razterization Tutorial](https://github.com/JoseMolano/CompVisualProy)

[Razterization Aplications](https://www.ecured.cu/Rasterización)


> :ToCPrevNext
