<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Escala de Grises RGB y LUMA</h1>

# Antecedentes

Pendienteeeeee


# Soluci&oacute;n y Resultados

> :Tabs
> > :Tab title= Visualizacion Imagen
> > 
> > > :P5 sketch=/docs/sketches/workshop3/RGBLumaImagen.js, width=800, height=600
> > >
> >
>
> > :Tab title= Visualizacion Video
> > 
> > > :P5 sketch=/docs/sketches/workshop1/, width=650, height=520
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

Creditos de: [Libreria asciiart](https://www.tetoki.eu/asciiart/asciiart_stillimage.html)