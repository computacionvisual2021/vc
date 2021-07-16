
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
> \gamma = \frac{f_{12}(x,y)}{f_{12}(x_0,y_0)} ; \beta = \frac{f_{20}(x,y)}{f_{20}(x_1,y_1)} ; \alpha = \frac{f_{01}(x,y)}{f_{01}(x_2,y_2)}
> ```

donde

> :Formula align=center
> ```
> f_{ab}(x, y) = (ay - by)x + (bx - ax)y + ax * by - bx * ay ; a, b \in a,b,c
> ```

De esta manera es posible verificar si un punto se encuentra o no dentro de un tri&aacute;ngulo. A partir de aqu&iacute; se puede plantear la estrategia de rasterizaci&oacute;n: por ejemplo, dibujar el triangulo en una cuadricula, analizar que cuadrados de la cuadricula se encuentran dentro del triangulo por medio de las coordenadas baricentricas , en caso de que este dentro, sombrear el cuadrado corresponndiente, y as&iacute; sucesivamente hasta recorrer toda la cuadricula.

A continuaci&oacute;n en la pesta&ntilde;a ***Coordenadas Baric&eacute;ntricas*** se puede observar el algoritmo de las coordenadas baric&eacute;ntricas al situar el cursor sobre el tri&aacute;ngulo dibujado, se podr&aacute;n observar los valores de [\alpha (\lambda_0), \beta (\lambda_1)](:Formula) y [\gamma (\lambda_2)](:Formula) incluso si el cursor esta fuera de la figura (esto causar&aacute; que uno de los valores sea menos a 0 o mayor a 1).

Por su parte en la pesta&ntilde;a ***Rasterizaci&oacute;n Completa*** se mostrar&aacute; la aplicaci&oacute;n de las coordenadas en el proceso de rasterizaci&oacute;n, juntando este c&aacute;lculo con la generaci&oacute;n de la cuadr&iacute;cula en la que se identificar&aacute; cuales cuadrados est&aacute;n dentro del tri&aacute;ngulo (sobrepasando su punto medio) y coloreando de blanco aquellos que no se encuentren dentro, y de color los que si se encuentren. Se podr&aacute; alterar la figura del tri&aacute;ngulo al deseado por el usuario en ambas pesta&ntilde;as por medio de los botones ***derecho, izquierdo y central*** del mouse. 

En las pesta&ntilde;as ***Instrucciones y C&oacute;digo*** se detallar&aacute; en la implementaci&oacute;n de este proceso con sus comandos y c&oacute;digo fuente


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
> > 1. Dibujar cuadr&iacute;cula en el canvas
> > 
> > 2. Graficar tri&aacute;ngulo seg&uacute;n coordenadas se&ntilde;aladas por usuario
> > 
> > 3. Recorrer cuadr&iacute;cula y calcular coordenadas baric&eacute;ntricas del punto medio en cada casilla
> > 
> > 4. Si el punto medio est&aacute; dentro del tri&aacute;ngulo, se rellena del color interpolado la celda.
> > 
> > 5. Si el punto medio no est&aacute; dentro del tri&aacute;ngulo, se rellena de color blanco.
>  
> > :Tab title= C&oacute;digo
> >
> > ``` js | rasterizationFull.js
> > function draw() {
> >    background(255);
> >    
> >    drawSquares();
> >    strokeWeight(1);
> >    stroke(0);
> >    triangle(ax, ay, bx, by, cx, cy);
> >    point(mouseX, mouseY);
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
> > function drawSquares() {
> >     i = 0;
> >     j = 0;
> >     col = 0;
> >     row = squaresF;
> >     for (i = 0; i <= squares; i++) {
> >         col = 0;
> >         for (j = 0; j <= squares; j++) {
> >             strokeWeight(1);
> >             if (inside_triangle(ax, ay, bx, by, cx, cy, col + pointA, row + pointA)) {
> >                 barycentric(ax, ay, bx, by, cx, cy, col + pointA, row + pointA);
> >                 fill(239 * alpha, 247 * beta, 255 * gamma );
> >                 rect(col, row, squaresF, squaresF);
> >             } else {
> >                 fill(255, 255, 255);
> >                 rect(col, row, squaresF, squaresF);
> >             }
> >             strokeWeight(3);
> >             strokeCap(ROUND);
> >             fill(0, 224, 0);
> >             stroke(153, 153, 255);
> >             point(col + pointA, row + pointA);
> >             stroke(0);
> >             col += squaresF;
> >         }
> >         row += squaresF;
> >     }
> >     fill(255, 255, 255, 0);
> > }
> > 
> > function inside_triangle(ax, ay, bx, by, cx, cy, x, y) {
> >     var d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
> >     var alpha = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / d;
> >     var beta = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / d;
> >     var gamma = 1.0 - alpha - beta;
> >     return !(alpha < 0 || alpha > 1 || beta < 0 || beta > 1 || gamma < 0 || gamma > 1);
> > }
> > ```
> > 

Se mostr&oacute; exitosamente como es la implementaci&oacute;n l&oacute;gica y fundamentaci&oacute;n te&oacute;rica de la rasterizaci&oacute;n por medio de coordenadas baric&eacute;ntricas. A pesar de visualizar un acercamiento en 2D, se resalta la capacidad de este proceso de representaci&oacute;n de figuras 3D ya que es capaz de mapear geometrias hasta los pixeles; de igual manera se tiene la posibilidad de paralelizar este proceso en caso de necesitar el procesamiento de figuras poligonales grandes o con gran cantidad de figuras componiendolo. 

Entre las aplicaciones de la rasterizaci&oacute;n adem&aacute;s de las mencionadas anteriormente, se encuentran el filtrado de texturas, donde se toma en cuesta la distancia de los objetos sobre los cuales se aplica la textura para escalar la definici&oacute;n de la misma. El mapeado del entorno como rugosidad o variaciones seg&uacute;n la profundidad proporcionada por el algoritmo. Una de las aplicaciones m&aacute;s inmediata a la rasterizaci&oacute;n es el empleo de color adem&aacute;s de la profundidad, de igual manera el calculo y creaci&oacute;n de sombras de objetos. Particularmente se considera la industria del entretenimiento de videojuegos como el nicho de alicaci&oacute;n m&aacute;s grande debido a la demanda de procesamiento r&aacute;pido.   

# Referencias y Fuentes: 

[Razterization Definicion](https://elcodigografico.wordpress.com/2014/03/29/coordenadas-baricentricas-en-triangulos/)

[Razterization Tutorial](https://github.com/JoseMolano/CompVisualProy)

[Razterization Aplications](https://www.ecured.cu/Rasterización)



