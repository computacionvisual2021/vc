// Estas son definiciones necesarias que le permiten a la tarjeta gr�fica saber c�mo representar el sombreador
#ifdef GL_ES
precision mediump float;
#endif

  varying vec2 vTexCoord;
  varying vec2 fragCoord;
  // Valores que se pasan desde p5
  uniform sampler2D u_img;
  uniform int charW;
  uniform int charH;
  uniform float toneDiv;


void main( )
{   vec2 uv = vTexCoord;
    //Invierte la posicion de la cordenada  para que la imagen no quede alrreves
    uv.y = 1.0 - uv.y;
	vec3 imga = texture2D(u_img,uv);	
    imga.resize( imga.width/charW, imga.height/charH );

    for (let y=0;  y<imga.height;  y++) {
        for (let x=0;  x<imga.width;  x++) {
            let col = imga.get( x, y );
            let tone = lightness(col) / toneDiv;
            let letter = letters.charAt( tone );
            vec3 salida = text( letter, x*charW, y*charH );
        }
    }
	gl_Position = vec4(salida, 1.0);
}