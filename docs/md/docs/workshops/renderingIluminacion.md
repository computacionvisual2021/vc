<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Partición Binaria del Espacio</h1>

# Algoritmo BSP

Particionamiento del espacio binario (BSP) es un método para subdividir recursivamente un espacio en elementos convexos empleando hiperplanos. Este proceso de subdivisión da lugar a una representación de objetos dentro del espacio en forma de un estructura de datos de árbol conocido como Árbol BSP.

La partición binaria del espacio es un proceso genérico que divide una escena recursivamente en dos hasta que satisface uno o más requisitos. El método específico empleado varía dependiendo del objetivo final. Por ejemplo, en un árbol BSP empleado para la detección de colisiones el objeto original sería dividido hasta que cada parte sea lo suficientemente sencilla como para ser individualmente comprobada, y en el renderizaje interesa que cada parte sea convexa, de forma que el algoritmo del pintor pueda ser usado posteriormente.

Un árbol BSP es una estructura de datos utilizada para ordenar y buscar polígonos en el espacio n-dimensional. El espacio es representado por el árbol, mientras que los nodos del mismo representan subespacios convexos.
Cada nodo almacena hiperplanos que dividen el espacio en dos, referencian a dos nodos y almacenan uno o más segmentos o polígonos (según las dimensiones del espacio utilizado).
Normalmente los árboles BSP representan espacios de dos dimensiones (juegos tipo Doom) y tres dimensiones (juego tipo Quake). En el primer caso los nodos almacenan segmentos y en el segundo los nodos almacenan polígonos.

La siguiente imagen ilustra el proceso de partición de un polígono irregular en una serie de polígonos convexos. Destacar cómo cada paso produce polígonos con menos segmentos hasta que se llega a F y G, que son convexos y no necesitan mayor partición. En este caso en particular, la línea de partición se ha tomado empleando vértices existentes del polígono y no se intersecciona con ninguno de sus segmentos. Si la línea de partición se intersecciona con un segmento, o una cara en un modelo tridimensional, el/los segmento/s o cara/s tienen que ser divididas en dos dado que cada partición debe ser un objeto completo e independiente.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/Binary_space_p.png" width=500/>
</p>
</div>

1. A es la raíz del árbol y de todo el polígono.
2. Se divide A en B y C
3. Se divide B en D y E.
4. Se divide D en F y G, que son convexos y se convierten en hojas del árbol

# Objetivos del BSP

1. Permiten determinar el orden en que deben ser dibujados los polígonos para lograr el retiro superficial ocultado.
2. Permiten determinar si un punto determinado está en una parte sólida del modelo o no.
3. Permiten detectar las colisiones con el modelo.

# Usos del BSP

Inicialmente, esta idea se propuso para los gráficos 3D por ordenador para incrementar la eficiencia de renderizado. Otros usos son el procesamiento geométrico con formas, Constructive Solid Geometry en herramientas CAD, detección de colisiones en robótica y videojuegos 3D, y otras aplicaciones informáticas que incluyen el manejo de estructuras espaciales complejas. la eliminación de caras ocultas ya que gracias a los planos divisorios del árbol conoceríamos qué polígonos están detrás o delante, teniendo solamente que considerar determinadas ramas del árbol a través de la posición desde la que nos estemos posicionando en él.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/dungeongen.png" width=500/>
</p>
</div>

El uso más común de los árboles de BSP es probablemente retiro superficial ocultado en tres dimensiones. Los árboles de BSP proporcionan un método elegante, eficiente para clasificar polígonos vía una primera caminata del árbol de la profundidad: algoritmo “del pintor delantero” o Algoritmo del pintor.

# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Visualizacion Algoritmo
> > 
> > > :P5 sketch=/docs/sketches/workshop3/sketch.js, width=700, height=700
>
> > :Tab title=  Juego que implementa BSP
> > 
> >  <a href="http://www.youtube.com/watch?feature=player_embedded&v=e0W65ScZmQw" target="_blank"><img src="http://img.youtube.com/vi/e0W65ScZmQw/0.jpg" alt="Doom with BSP" width="800" height="800" /></a>
> >
>
> > :Tab title= Instrucciones
> >
> > | No. | Descripción |
> > |---|---|
> > | 1 | Crear el nodo raíz. |
> > | 2 | Dividir el área a lo largo de una línea horizontal o vertical. |
> > | 3 | Seleccionar una de las dos nuevas celdas de partición. |
> > | 4 | Realizar nuevamente el paso numero 2 (usando esta celda como el área a dividir). |
> > | 5 | Dividir el área a lo largo de una línea horizontal o vertical. |
> > | 6 | Realizar todos los pasos nuevamente hasta que cada parte sea lo suficientemente sencilla como para ser individualmente comprobada. |
> 
> > :Tab title= Codigo
> >
> > ``` js | sketch.js
> > var imported = document.createElement('script');
> >imported.src = "/vc/docs/sketches/workshop3/node.js";
> >document.head.appendChild(imported);
> >
> >var height = 720;
> >var width = 1280;
> >
> >var mouseStartPos;
> >var mouseEndPos;
> >var auxPoint;
> >var toDraw = false;
> >
> >var pressedMouseLine = null;
> >
> >var initialVertices = [[0,0],
> >						[width, 0],
> >						[width, height],
> >						[0, height]]
> >var rootNode;
> >
> >function setup() {
> >  createCanvas(1280, 720);
> >  mouseStartPos = createVector(0,0);
> >  mouseEndPos = createVector(0,0);
> >  auxPoint = createVector(0,0);
> >  rootNode = new Node(initialVertices, null, null);
> >}
> >
> >function draw() {
> >  clear();
> >  stroke(255,255,255);
> >  strokeWeight(4);
> >  rootNode.draw();
> >  if (pressedMouseLine != null){
> >  	line(pressedMouseLine[0], pressedMouseLine[1], pressedMouseLine[2], pressedMouseLine[3])
> >  }
> >}

# Referencias y Fuentes: 

[Visibilidad de Superficies 3d Mediante Barrido de Segmentos](http://oa.upm.es/6312/1/TESIS_MASTER_JOSE_MARIA_BENITO_DIAZ.pdf)

[Partici&oacute;n Binaria del Espacio](https://es.wikipedia.org/wiki/Partici%C3%B3n_binaria_del_espacio)

[DOOM under the hood](https://www.youtube.com/watch?v=e0W65ScZmQw)

> :ToCPrevNext