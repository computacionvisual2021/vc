<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Escala de Grises RGB y LUMA</h1>

# Antecedentes

Pendienteeeeee


# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Imagen RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/workshop2/RGBLumaImagen.js, width=1000, height=410
> 
> > :Tab title= Video RGB y Luma
> > 
> > > :P5 sketch=/docs/sketches/workshop2/RGBLumaVideo.js, width=720, height=400
>
> > :Tab title= Instrucciones
> > 
> > 1. Precargar Shader para imagen y video con el vertex y fragment shader.
> > 
> > 2. Crear buffer gráfico de WEBGL.
> > 
> > 3. Crear el shader a partir del precargado.
> > 
> > 4. Pasar datos de imagen/video y tecla de control al Fragment Shader.
> > 
> > 5. El fragment shader carga la textura (ya sea video o imagen).
> > 
> > 6. Calcula el valor en escala de grises a representar según el comando recibido en la tecla de control.
> > 
> > 7. Renderizar el valor de color deseado y mostrar en pantalla .
>
> > :Tab title= Codigo Imagen
> >
> > ``` glsl | texture.frag
> > // Funcion para convertir un color a escala de grises
> > float grayscale(vec3 color) {
> >   float lightness;
> >   // Si la tecla de control es 1 se calcula la luminosidad a partir del RGB
> >   if (u_key==1){
> > 		float I=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
> > 		lightness = I;
> > 	} else if (u_key==2){
> >   // Si la tecla de control es 2 se calcula el valor luma
> >   // Promedio ponderado de RGB con corrección gamma (Luma)
> > 		float Y= dot(color, vec3(0.299, 0.587, 0.114)); // SDTV
> > 		lightness = Y;
> > 	}
> >   return lightness;
> > }
> > 
> > void main() {
> >   vec2 uv = vTexCoord;
> > 
> >   //Invierte la posicion de la cordenada  para que la imagen no quede al reves
> >   uv.y = 1.0 - uv.y;
> > 
> >   vec4 tex = texture2D(u_img, uv);
> >   // Calculo de escala de grises
> >   float gray =grayscale(tex.rgb);
> >   
> >   float threshR = gray ;
> >   float threshG = gray ;
> >   float threshB = gray ;
> > 
> >   // Si la tecla de control es 0 se muestra la imagen original
> >   if (u_key==0){
> >     threshR = tex.r ;
> >     threshG = tex.g ;
> >     threshB = tex.b ;
> >   }
> >   vec3 thresh = vec3(threshR, threshG, threshB);
> > 
> >   // Se renderiza la salida
> >   gl_FragColor = vec4(thresh, 1.0);
> > }
> > 
> > ```
> > 
>
> > :Tab title= Codigo Video
> >
> > ``` glsl | webcam.frag
> > // Funcion para calculo de valor Luma de un color
> > float luma(vec3 color) {
> >   return dot(color, vec3(0.299, 0.587, 0.114));
> > }
> > 
> > // Funcion para calculo de valor luminocidad a partir de un color RGB
> > float grayRGB(vec3 color) {
> >   float lightness=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
> >   return lightness;
> > }
> > void main() {
> > 
> >   vec2 uv = vTexCoord;
> >   uv = 1.0 - uv;
> > 
> >   vec4 tex = texture2D(tex0, uv);
> > 
> >    float gray;
> >    //Dejar valores de color originales desde el inicio
> > 
> >    float threshR = tex.r ;
> >    float threshG = tex.g ;
> >    float threshB = tex.b ;
> >   
> >   // Si la tecla de control es 1 se calcula la luminosidad a partir del RGB
> >   if (u_key==1){
> > 
> >     gray =grayRGB(tex.rgb);
> > 
> >     threshR = gray ;
> >     threshG = gray ;
> >     threshB = gray ;
> >   }else if (u_key==2){
> >     // Si la tecla de control es 2 se calcula el valor luma 
> >     gray = luma(tex.rgb);
> > 
> >     threshR = gray ;
> >     threshG = gray ;
> >     threshB = gray ;
> >   }
> > 
> >   vec3 thresh = vec3(threshR, threshG, threshB);
> > 
> >   // Se renderiza la salida
> >   gl_FragColor = vec4(thresh, 1.0);
> > }
> > 
> > ```
> > 

Creditos de: [Libreria asciiart](https://www.tetoki.eu/asciiart/asciiart_stillimage.html)
