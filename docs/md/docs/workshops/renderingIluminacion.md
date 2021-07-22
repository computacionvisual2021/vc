<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Binary space partitioning</h1>

# Algoritmo

Particionamiento del espacio binario (BSP) es un método para recursivamente subdividiendo un espacio En dos conjuntos convexos mediante el uso hiperplanos como particiones. Este proceso de subdivisión da lugar a una representación de objetos dentro del espacio en forma de un estructura de datos de árbol conocido como Árbol BSP.

La partición del espacio binario se desarrolló en el contexto de Gráficos 3D por computadora en 1969. La estructura de un árbol BSP es útil en representación porque puede proporcionar información espacial de manera eficiente sobre los objetos en una escena, como los objetos que se ordenan de adelante hacia atrás con respecto a un espectador en una ubicación determinada. Otras aplicaciones de BSP incluyen: realizar geométrico operaciones con formas (geometría sólida constructiva), detección de colisiones en robótica y videojuegos en 3D, trazado de rayosy otras aplicaciones que involucran el manejo de escenas espaciales complejas.

La partición binaria del espacio es un proceso genérico que divide una escena recursivamente en dos hasta que satisface uno o más requisitos. El método específico empleado varía dependiendo del objetivo final. Por ejemplo, en un árbol BSP empleado para la detección de colisiones el objeto original sería dividido hasta que cada parte sea lo suficientemente sencilla como para ser individualmente comprobada, y en el renderizaje interesa que cada parte sea convexa, de forma que el algoritmo del pintor pueda ser usado.

El número final de objetos crecerá inevitablemente ya que las líneas y caras que se crucen con el plano de partición serán divididas en dos, y también es deseable que el árbol final esté razonablemente balanceado. De hecho, el algoritmo para crear un árbol BSP correcta y eficientemente es la parte más difícil de implementar. En un espacio de tres dimensiones, se emplean planos para dividir las caras de un objeto; en un espacio de dos se emplean líneas.

La siguiente imagen ilustra el proceso de partición de un polígono irregular en una serie de polígonos convexos. Destacar cómo cada paso produce polígonos con menos segmentos hasta que se llega a F y G, que son convexos y no necesitan mayor partición. En este caso en particular, la línea de partición se ha tomado empleando vértices existentes del polígono y no se intersecciona con ninguno de sus segmentos. Si la línea de partición se intersecciona con un segmento, o una cara en un modelo tridimensional, el/los segmento/s o cara/s tienen que ser divididas en dos dado que cada partición debe ser un objeto completo e independiente.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/space.jpg" width=500/>
</p>
</div>

1. A es la raíz del árbol y de todo el polígono.
2. Se divide A en B y C
3. Se divide B en D y E.
4. Se divide D en F y G, que son convexos y se convierten en hojas del árbol

# Usos del BSP

Inicialmente, esta idea se propuso para los gráficos 3D por ordenador para incrementar la eficiencia de renderizado. Otros usos son el procesamiento geométrico con formas, Constructive Solid Geometry en herramientas CAD, detección de colisiones en robótica y videojuegos 3D, y otras aplicaciones informáticas que incluyen el manejo de estructuras espaciales complejas. la eliminación de caras ocultas ya que gracias a los planos divisorios del árbol conoceríamos qué polígonos están detrás o delante, teniendo solamente que considerar determinadas ramas del árbol a través de la posición desde la que nos estemos posicionando en él.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/dungeongen.png" width=500/>
</p>
</div>

El uso más común de los árboles de BSP es probablemente retiro superficial ocultado en tres dimensiones. Los árboles de BSP proporcionan un método elegante, eficiente para clasificar polígonos vía una primera caminata del árbol de la profundidad: algoritmo “del pintor delantero” o Algoritmo del pintor.


# Objetivos del BSP

1. Permiten determinar el orden en que deben ser dibujados los polígonos para lograr el retiro superficial ocultado.
2. Permiten determinar si un punto determinado está en una parte sólida del modelo o no.
3. Permiten detectar las colisiones con el modelo.

# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Visualizacion Imagen
> > 
> > > :P5 sketch=/docs/sketches/workshop3/sketch.js, width=700, height=700
>
> > :Tab title=  Video
> > 
> > > [![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/yTRzfKh4Tg0/0.jpg)](https://www.youtube.com/watch?v=yTRzfKh4Tg0)
>
> > :Tab title= Instrucciones
> > 
> > 1. Las imagenes a convertir estan precargadas en el arreglo images[]
> > 
> > 2. Se calcula el indice de la imagen a convertir en cyclic_t
> > 
> > 3. Se carga la imagen en el objeto gfx para hacer la posterizaci&oacute;n
> > 
> > 4. Se hace la posterizaci&oacute;n con gfx.filter(POSTERIZE, 3) para atenuar los cambios de color en la imagen
> > 
> > 5. Se convierte la imagen con la librer&iacute;a y se guarda en ascii_arr como un arreglo 2d de caracteres ascii.
> > 
> > 6. Se imprime el arreglo en el canvas con la funci&oacute;n typeArray2d
> > 
> > 7. Finalmente se muestra la imagen original en transicion a la convertida 
>
> > :Tab title= Codigo
> >
> > ``` js | asciiArtImages.js
> > function draw() {
> >     background(0);
> >     
> >     cyclic_t = millis() * 0.0002 % images.length;
> >     
> >    gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
> >     
> >     gfx.filter(POSTERIZE, 3);
> >    
> >     ascii_arr = myAsciiArt.convert(gfx);
> >     
> >     myAsciiArt.typeArray2d(ascii_arr, this);
> >     
> >     tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
> >     image(images[floor(cyclic_t)], 0, 0, width, height);
> >     noTint();
> > }
> > 
> > ```
> > 

Creditos de: [Ray Tracing](https://p5js.org/es/examples/3d-ray-casting.html)

> :ToCPrevNext