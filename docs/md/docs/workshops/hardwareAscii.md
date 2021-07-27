<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Ascii Art</h1>

# Ascii Art Hadware
Los orígenes del Ascii Art, como los de tantas otras disciplinas, son remotos. Pueden rastrearse hasta fines del Siglo XIX, cuando aparecen las primeras máquinas de escribir y, con ellas, la idea de que se podían realizar diseños gráficos a partir de la tipografía.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/arte-ascii-historia.jpg" width=250 height=300/>
</p>
</div>

[Mariposa, Lewis Carrol (1998)](https://ceslava.com/blog/ascii-art-la-historia-del-dibujo-con-texto-typewriter-art/)

Lewis Carrol, En 1898 dibujó con su máquina de escribir esta mariposa utilizando sólo corchetes, puntos, paréntesis, barras de dividir, asteriscos y letras o.

La técnica de arte Ascii Art es ampliamente utilizada por artistas, aficionados, hackers. Un ejemplo especialmente interesante de uso y desarrollo creativo del arte ASCII son las obras creadas por el grupo "ASCII Art Ensemble". El grupo, formado por Walter van der Cruijsen, Luka Frelih, Vuk Cosic, fue fundado en 1998. Los miembros del "ASCII Art Ensemble" crearon un software para "codificar" imágenes en movimiento en piezas de arte ASCII animadas (secuenciales). 

Desde el punto de vista de evolución de la gráfica computarizada, el Arte ASCII replantea la observación tradicional de una imagen en base al conjunto de elementos pictóricos que la conforman, un efecto óptico similar al del puntillismo. Así pues, a una mayor distancia del observador, la imagen hecha en Arte ASCII adquiere mayor definición; exactamente lo opuesto a lo que sucede cuando, al observar con lupa una imagen impresa en un diario, la distancia entre los píxeles que la conforman se hace evidente y la imagen se desvirtúa.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/Mrbeen.jpg" width=350 height=400/>
</p>
</div>

[Mr bean, Ascii Art](https://i.blogs.es/65659d/mrbean/1366_2000.jpg)

# Solución y Resultados

> :Tabs
> > :Tab title= Ascii Art Imagen
> > 
> > > :P5 sketch=/docs/sketches/workshop2/Ascii.js, width=600, height=500
>
> > :Tab title= Ascii Art Video
> > 
> > > :P5 sketch=/docs/sketches/workshop2/Ascii2.js, width=670, height=400
>
> > :Tab title= Instrucciones
> > 
> > | No. | Descripci&oacute;n |
> > |---|---|
> > | 1 | Precargar Shader para imagen con el vertex y fragment shader. |
> > | 2 | Crear canvas de WEBGL. |
> > | 3 | Crear el shader a partir del precargado. |
> > | 4 | Pasar datos de imagen base o cámara, y activación del Fragment Shader. |
> > | 5 | El fragment shader carga la textura |
> > | 6 | Calculo del LUMA en cada bloque de pixeles |
> > | 7 | Según el valor LUMA calculado se escoge el caracter a renderizar (dentro del conjunto previamente dado) |
> > | 8 | Renderizar el caracter correspondiente al valor de luminosidad calculado para cada bloque de pixeles. |
>
> > :Tab title= Ascii2.js
> >
> > ``` js | Ascii2.js
> > let theShader;
> > // this variable will hold our webcam video
> > let cam;
> > function preload() {
> >     // Precargar el  shader
> >     theShader = loadShader('/vc/docs/sketches/workshop2/texturaAscii.vert', '/vc/docs/sketches/workshop2/> > texturaAscii.frag');
> > }
> > 
> > function setup() {
> >     // shaders require WEBGL mode to work
> >     createCanvas(710, 400, WEBGL);
> >     noStroke();
> >     //Crea una aptura de video instantanea 
> >     cam = createCapture(VIDEO);
> >     cam.size(710, 400);
> >     //Esconde la captura para solo mostrar el renderizado final
> >     cam.hide();
> > }
> > 
> > function draw() {
> >     // shader() Activación del Shader con nuestro Shader
> >     shader(theShader);
> > 
> >     // Se pasa la Cámara (cam) como textura
> >     theShader.setUniform('tex', cam);
> > 
> >     // rect gives us some geometry on the screen
> >     rect(0, 0, width, height);
> > }
> > 
> > ```
> 
> > :Tab title= texturaAscii.frag
> >
> > ``` js | texturaAscii.frag
> >// Las modificaciones y ajustes fueron compartidos en clase por el compañero Camilo Gómez
> >// del código original: https://www.shadertoy.com/view/lssGDj
> >// código del compañero: https://drive.google.com/file/d/1Fg_p77X0wvyK4cY4txpmdsc743M2FCIz/view
> >
> >#ifdef GL_ES
> >precision mediump float;
> >#endif
> >
> >uniform sampler2D tex;
> >// Implementación Operador a nivel de bits
> >int getBit(int n, int a) {
> >  float value = float(n);
> >  for(float i = 27.0; i >= 0.0; i -= 1.0) {
> >    float val = pow(2.0,i*1.0);
> >
> >    if (val <= value) {
> >      value -= val;
> >      if(i == float(a)) return 1;
> >    }
> >  }
> >  return 0;
> >}
> > // Reducción tamaño de 8x8 a 5x5 y activación brillo
> >float character(int n, vec2 p)
> >{
> >    p = floor(p*vec2(4.0, -4.0) + 2.5);
> >    if (clamp(p.x, 0.0, 4.0) == p.x)
> >    {
> >        if (clamp(p.y, 0.0, 4.0) == p.y)    
> >        {
> >            int a = int(floor(p.x+0.5) + 5.0 * floor(p.y+0.5));
> >            if (getBit(n,a) == 1) return 1.0;
> >        }    
> >    }
> >    return 0.0;
> >}
> >
> >void main() {
> >  vec2 pix = gl_FragCoord.xy;
> >  pix.y = 393.0*2.0 - pix.y;
> >  vec2 resol = vec2(393.0*2.0, 393.0*2.0);
> >    // Partición de la imagen en 8x8 pixeles
> >    vec3 col = texture2D(tex, floor(pix/8.0)*8.0/resol).rgb;    
> >    // Calculo LUMA
> >    float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
> >    // Máscaras a aplicar dependiendo del LUMA
> >    // n = codificación del caracter en entero
> >    // página para codificación de caracteres: http://thrill-project.com/archiv/coding/bitmap/
> >    int n =  4096;                // .
> >    if (gray > 0.2) n = 65600;    // :
> >    if (gray > 0.3) n = 332772;   // *
> >    if (gray > 0.4) n = 15255086; // o 
> >    if (gray > 0.5) n = 23385164; // &
> >    if (gray > 0.6) n = 15252014; // 8
> >    if (gray > 0.7) n = 13199452; // @
> >    if (gray > 0.8) n = 11512810; // #
> >    
> >    //Cálculo de separación entre caracteres
> >    vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);
> >
> >    col = vec3(character(n, p));
> >
> >    gl_FragColor = vec4(col, 1.0);
> >}
> 
> > :Tab title= texturaAscii.vert
> >
> > ``` js | texturaAscii.vert
> >// vert file and comments from adam ferriss
> >// https://github.com/aferriss/p5jsShaderExamples
> >
> >#ifdef GL_ES
> >precision mediump float;
> >#endif
> >
> >attribute vec3 aPosition;
> >attribute vec2 aTexCoord;
> >
> >// lets get texcoords just for fun!
> >varying vec2 vTexCoord;
> >
> >void main() {
> >  // copy the texcoords
> >  vTexCoord = aTexCoord;
> >  // copy the position data into a vec4, using 1.0 as the w component
> >  vec4 positionVec4 = vec4(aPosition, 1.0);
> >  // scale the rect by two, and move it to the center of the screen
> >  // if we don't do this, it will appear with its bottom left corner in the center of the sketch
> >  // try commenting this line out to see what happens
> >  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
> >  // send the vertex information on to the fragment shader
> >  gl_Position = positionVec4;
> >}
>
En la implementación realizada del shader se particiona la imagen en bloques de 8x8 pixeles y se procede a hacer el cálculo del LUMA para cada uno de ellos. Posteriormente, teniendo el cuanta el LUMA obtenido en cada bloque se determina que caracter ASCII se debe usar de acuerdo a la codificación realizada previamente de algunos caracteres ASCII. Posterior mente, el shader hace un barrido bloque a bloque y de acuerdo si es un bloque con brillo 1 es reemplazado por el caracter asignado, si el brillo de este bloque es 0, se deja el espacio.

### Caracteres ASCII utilizados en la implementación
<div>
<p style = 'text-align:center;'>
<img src="/docs/img/caracteresAscii.png" width=200 height=180/>
</p>
</div>

### Herramienta mapeo caracteres
<div>
<p style = 'text-align:center;'>
<img src="/docs/img/bitmap.png" width=200 height=180/>
</p>
</div>

[Bitmap](http://thrill-project.com/archiv/coding/bitmap/)

### Ejemplo caracter \#
<div>
<p style = 'text-align:center;'>
<img src="/docs/img/numeral.png" width=200 height=180/>
</p>
</div>

Si bien, esta herramienta de mapeo de los caracteres facilita el proceso de la implementación del Ascii Art, limita el uso de caracteres a los que sean representables en la matriz de 5 x 5, es decir que caracteres de otros lenguajes que utilicen caracteres curvos o figuras abstractas no podrían ser utilizados en esta implementación.

## Aplicaciones Ascii Art

El **Ascii Art** Art es utilizado cuando no es posible la transmisión o la impresión de imágenes en las configuraciones de equipos computarizados, tales como maquinillas, teletipos y equipos de visualización (consolas y terminales) que no cuentan con tarjetas de proceso gráfico. Además, el **Ascii Art** ha servido como lenguaje fuente para representar logos de compañías y productos, para crear diagramas procedimentales de flujo de operaciones y también en el diseño de los primeros videojuegos. Programas editores de texto especializados tal como IMG2TXT o JPG2TXT, están diseñados para dibujar figuras geométricas y rellenar áreas de luz y sombra con una combinación de caracteres basándose en algoritmos matemáticos.

<div>
<p style = 'text-align:center;'>
<img src="/docs/img/diagrama.png" width=500 height=480/>
</p>
</div>

[Diagrama UML con Ascii Art](https://coderwall.com/p/nsuzva/uml-tools)

# Referencias y Bibliograf&iacute;a 

[Ascii Art - MovAX13h](https://www.shadertoy.com/view/lssGDjl)

[Adam Ferris](https://github.com/aferriss/p5jsShaderExamples)

[Bitmap](http://thrill-project.com/archiv/coding/bitmap/)

[Camilo Gómez](https://drive.google.com/file/d/1Fg_p77X0wvyK4cY4txpmdsc743M2FCIz/view)

[Imagen Mariposa](https://ceslava.com/blog/ascii-art-la-historia-del-dibujo-con-texto-typewriter-art/)

[Diagrama UML con Ascii Art](https://coderwall.com/p/nsuzva/uml-tools)

[Mr bean, Ascii Art](https://i.blogs.es/65659d/mrbean/1366_2000.jpg)

[Ascii Art, Wikipedia](https://es.wikipedia.org/wiki/Arte_ASCII)

> :ToCPrevNext