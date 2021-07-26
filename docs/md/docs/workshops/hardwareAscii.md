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

La técnica de arte Ascii Art es ampliamente utilizada por artistas, aficionados, hackers. Un ejemplo especialmente interesante de uso y desarrollo creativo del arte ASCII son las obras creadas por el grupo "ASCII Art Ensemble". El grupo, formado por Walter van der Cruijsen, Luka Frelih, Vuk Cosic, fue fundado en 1998. Los miembros del "ASCII Art Ensemble" crearon un software para "codificar" imágenes en movimiento en piezas de arte ASCII animadas (secuenciales). 

En la implementación realizada del shader se segmenta la imagen en bloques de 8x8 pixeles y se procede a hacer el cálculo del brillo para cada uno de ellos. Posteriormente, se determina que caracter ASCII se debe usar dependiendo de la densidad calculada para cada caracter y es reemplazado en los pixeles calculados inicialmente.

# Solución y Resultados

> :Tabs
> > :Tab title= Visualizacion Imagen
> > 
> > > :P5 sketch=/docs/sketches/workshop2/Ascii.js, width=600, height=500
>
> > :Tab title= Visualizacion Video
> > 
> > > :P5 sketch=/docs/sketches/workshop2/Ascii2.js, width=670, height=400
>
> > :Tab title= Ascii2.js
> >
> > ``` js | Ascii2.js
> > let theShader;
> > // this variable will hold our webcam video
> > let cam;
> > function preload() {
> >     // load the shader
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
> >     // shader() sets the active shader with our shader
> >     shader(theShader);
> > 
> >     // passing cam as a texture
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
> >
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
> >
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
> >    vec3 col = texture2D(tex, floor(pix/8.0)*8.0/resol).rgb;    
> >
> >    float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
> >
> >    int n =  4096;                // .
> >    if (gray > 0.2) n = 65600;    // :
> >    if (gray > 0.3) n = 332772;   // *
> >    if (gray > 0.4) n = 15255086; // o 
> >    if (gray > 0.5) n = 23385164; // &
> >    if (gray > 0.6) n = 15252014; // 8
> >    if (gray > 0.7) n = 13199452; // @
> >    if (gray > 0.8) n = 11512810; // #
> >
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
Creditos de: [Ascii Art - MovAX13h](https://www.shadertoy.com/view/lssGDjl)
[Adam Ferris](https://github.com/aferriss/p5jsShaderExamples)
[Camilo Gómez](https://drive.google.com/file/d/1Fg_p77X0wvyK4cY4txpmdsc743M2FCIz/view)
[Imagen Mariposa](https://ceslava.com/blog/ascii-art-la-historia-del-dibujo-con-texto-typewriter-art/)

> :ToCPrevNext