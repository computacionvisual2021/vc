
<h1 align="center">Desempe&ntilde;o Computacional Introducci&oacute;n</h1>

# Antecedentes

Con el &aacute;nimo de comparar la eficiencia computacional de t&eacute;cnicas de an&aacute;lisis y transformaci&oacute;n de imagenes y video por software y hardware, se mide la tasa de frames en la ejecuci&oacute;n de dichos algoritmos implementados previamente. De igual manera se recopilan resultados de dos equipos de computo cuyas caracter&iacute;sticas se muestran a continuaci&oacute;n:

| Caracter&iacute;stica | Equipo A | Equipo B |
|---|---|---|
| Sistema Operativo | Windows 10 x64 | Windows 10 x64 |
| Procesador CPU | AMD Ryzen 5 3500U (8 cores) 2.10 GHz | Intel(R) Core(TM) i5-7200 (8 cores) 2.5 GHz|
| GPU | AMD Radeon Graphics Vega 8 - 5GB | Intel(R) HD Graphics 620 - 4GB |
| Memoria RAM | 8.00 GB | 16.00 GB |

Los algoritmos/ t&eacute;cnicas que se observar&aacute;an en el presente taller son:

+ M&aacute;scaras de Convoluci&oacute;n 

+ Escala de Grises

+ Ascii Art

Para lograr el cometido del taller se usar&aacute; las siguientes utilidades de p5.js:

+ ***frameRate()***: Muestra y permite definir la tasa de frames por segundo mostrados en pantalla.

+ ***frameCount***: Guarda la cantidad de frames procesados hasta el momento, desde el inicio de la ejecuci&oacute;n.

+ ***deltaTime***: Contiene la diferencia de tiempo entre el inicio del frame anterior y el inicio del frame actual en milisegundos.

Por medio de estas se conocer&aacute; el desempe&ntilde;o de las implementaciones en cada m&aacute;quina. A continuaci&oacute;n se detallan las intrucciones y el c&oacute;digo que se implement&oacute; para el c&aacute;lculo y visualizaci&oacute;n de estad&iacute;sticas de desempe&ntilde;o tanto por medio de Software como por Hardware.


> :Tabs
> > :Tab title= Instrucciones
> > 
> > | No. | Descripci&oacute;n |
> > |---|---|
> > | 1 | Iniciar la ejecuci&oacute;n de la operaci&oacute;n correspondiente a la implementaci&oacute;n que se observa (Convoluci&oacute;n, Escala de Grises, Ascii-Art) |
> > | 2 | Para las ***Implementaciones por Hardware*** se inicializan elementos tipo html que tendr&aacute;n los valores de las estad&iacute;sticas |
> > | 3 | En cada ciclo de ejecucii&oacute;n de la funci&oacute;n ***draw()*** se actualizan los valores de las estad&iacute;sticas observadas as&iacute;: |
> > | 4 | ***Implementaciones por Software:*** Se muestra en cada iteraci&oacute;n los valores actuales y calculados con textos de p5.js |
> > | 5 | ***Implementaciones por Hardware:*** Se cambia el texto en los objetos html previamente inicializados para mostrar los nuevos valores actuales y calculados |
> > | 6 | Se vuelve a realizar desde el paso 3 en adelante |
> > 
>
> > :Tab title= C&oacute;digo Hardware 
> >
> > ``` js | HardwareFiles.js
> > 
> > //MEDICION FPS
> > var fpsVal; //FPS actuales
> > var framesTotalVal; //Total de frames ejecutados
> > var deltaTimeVal; // Tiempo entre ejecucion de frames
> > var FpsPromVal; // Promedio de fps en lo ejecutado hasta el momento
> > let fpsTotal = 0.0; // Acumulador de todos los fps para el calculo del promedio
> > 
> > function setup() {
> >    // .... Codigo anterior...
> > 
> > // MEDICION FPS
> >     // Texto de Frames actuales
> >     let fpsTxt = createP("FPS actual: ");
> >     fpsTxt.position(50, 400);
> >     fpsTxt.style('font-size', '30px');
> >     //Valor cambiante de los fps actuales
> >     fpsVal = createDiv(0);
> >     fpsVal.position(190, 430);
> >     fpsVal.style('font-size', '30px');
> >     //Texto de Cantidad de frames totales
> >     let framesTotalTxt = createP("Cantidad frames totales: ");
> >     framesTotalTxt.position(50, 450);
> >     framesTotalTxt.style('font-size', '30px');
> >     //Valor cambiante de Cantidad de frames totales
> >     framesTotalVal = createDiv(0);
> >     framesTotalVal.position(350, 480);
> >     framesTotalVal.style('font-size', '30px');
> >     //Texto de tiempo entre frames
> >     let deltaTimeTxt = createP("Tiempo (ms) entre el frame anterior y el actual: ");
> >     deltaTimeTxt.position(50, 500);
> >     deltaTimeTxt.style('font-size', '30px');
> >     //Valor cambiante de tiempo entre frames
> >     deltaTimeVal = createDiv(0);
> >     deltaTimeVal.position(190, 560);
> >     deltaTimeVal.style('font-size', '30px');
> >     //Texto de fps promedio
> >     let FpsPromTxt = createP("FPS Promedio: ");
> >     FpsPromTxt.position(50, 570);
> >     FpsPromTxt.style('font-size', '30px');
> >     //Valor cambiante de fps promedio
> >     FpsPromVal = createDiv(0);
> >     FpsPromVal.position(250, 600);
> >     FpsPromVal.style('font-size', '30px');
> > 
> >    // .... Codigo posterior...
> >     
> > }
> > function draw() {
> >    // .... Codigo anterior...
> > 
> >     //Muestra valores de rendimiento en pantalla
> >     fpsVal.html(frameRate()); //fps
> >     framesTotalVal.html(frameCount);//Cantidad de frames
> >     deltaTimeVal.html(deltaTime);// Tiempo entre frames
> >     fpsTotal += frameRate();//Se acumula el valor de fps para calcular el promedio
> >     FpsPromVal.html(fpsTotal / frameCount);//Promedio de fps
> > 
> >    // .... Codigo posterior...
> > } 
> > ```
> > 
>
> > :Tab title= C&oacute;digo Software 
> >
> > ``` js | SoftwareFiles.js
> >let fpsTotal = 0.0;//Acumulador de valores de fps para calculo del promedio
> >function draw() {
> >    // .... Codigo anterior...
> >        
> >        //Muestra valores de rendimiento en pantalla
> >        text("FPS actual: " + frameRate(), 50, 450);//fps
> >        text("Cantidad frames totales: " + frameCount, 50, 490);//Cantidad de frames
> >        text("Tiempo (ms) entre el frame anterior y el actual: ", 50, 530);
> >        text(deltaTime, 50, 570);// Tiempo entre frames
> >        fpsTotal += frameRate();//Se acumula el valor de fps para calcular el promedio
> >        text("FPS Promedio: " + fpsTotal / frameCount, 50, 610);//Promedio de fps
> >        
> >    // .... Codigo posterior...
> >}
> > ```
> > 


Se toma en cuenta que en cada una de las siguientes secciones se realizar&aacute;n an&aacute;lisis sobre el desempe&ntilde;o obtenido con relaci&oacute;n a las implementaciones observadas. De manera que lo presentado anteriormente supone lo que todas las mencionadas tienen en com&uacute;n.

# Referencias y Fuentes:

[DeltaTime Reference](https://p5js.org/es/reference/#/p5/deltaTime)

[FrameCount Reference](https://p5js.org/es/reference/#/p5/frameCount)

[FrameRate Reference ](https://p5js.org/es/reference/#/p5/frameRate)

[Performance metricts Base Idea](https://sfdelgadop.github.io/computacion-visual/video-1/)

[Html components for display shaders frames values idea](https://github.com/nicrodriguezval/vc/blob/main/docs/sketches/hardware/asciimosaic/w2_asciivideo.js)

> :ToCPrevNext