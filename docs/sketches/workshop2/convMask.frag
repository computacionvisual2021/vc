// Estas son definiciones necesarias que le permiten a la tarjeta gráfica saber cómo representar el sombreador
#ifdef GL_ES
precision mediump float;
#endif
  
varying vec2 vTexCoord;
// Valores que se pasan desde p5
uniform sampler2D u_img;
uniform int u_key;
uniform vec2 stepSize; //Tamaño del texel a usar para cada paso ( 1.0 / width)

//Arreglo de 9 valores, cada uno representa un valor alrederor de un pixel (vecinos) y el pixel mismo
vec2 offset[9];

// Arreglo con los valores de la matriz de convolucion a usar
float kernel[9];

// valor de convolucion que sera renderizado en la pantalla
vec4 conv = vec4(0.0);

void main() {
  vec2 uv = vTexCoord;

  //Invierte la posicion de la cordenada  para que la imagen no quede alrreves
  uv.y = 1.0 - uv.y;

  // identity kernel 
  kernel[0] = 0.0; kernel[1] = 0.0; kernel[2] = 0.0;
  kernel[3] = 0.0; kernel[4] = 1.0; kernel[5] = 0.0;
  kernel[6] = 0.0; kernel[7] = 0.0; kernel[8] = 0.0;

  // Segun la tecla presionada por el usuario se define el kernel de la mascara respectiva
  
   if(u_key==1){
  
  // emboss kernel 
  kernel[0] = -2.0; kernel[1] = -1.0; kernel[2] = 0.0;
  kernel[3] = -1.0; kernel[4] = 1.0; kernel[5] = 1.0;
  kernel[6] = 0.0; kernel[7] = 1.0; kernel[8] = 2.0;

  }else if (u_key==2){
  
  // edge detection 
   kernel[0] = -1.0; kernel[1] = -1.0; kernel[2] = -1.0;
   kernel[3] = -1.0; kernel[4] = 8.0; kernel[5] = -1.0;
   kernel[6] = -1.0; kernel[7] = -1.0; kernel[8] = -1.0;

  }else if (u_key==3){
  
  // sharpen kernel
   kernel[0] = 0.0; kernel[1] = -1.0; kernel[2] = 0.0;
   kernel[3] = -1.0; kernel[4] = 5.0; kernel[5] = -1.0;
   kernel[6] = 0.0; kernel[7] = -1.0; kernel[8] = 0.0;

  }else if (u_key==4){
  
  // top sobel
   kernel[0] = 1.0; kernel[1] = 2.0; kernel[2] = 1.0;
   kernel[3] = 0.0; kernel[4] = 0.0; kernel[5] = 0.0;
   kernel[6] = -1.0; kernel[7] = -2.0; kernel[8] = -1.0;

  }else if (u_key==5){
  
  // blur kernel
   kernel[0] = 0.0625; kernel[1] = 0.125; kernel[2] = 0.0625;
   kernel[3] = 0.125; kernel[4] = 0.25; kernel[5] = 0.125;
   kernel[6] = 0.0625; kernel[7] = 0.125; kernel[8] = 0.0625;

  }else if (u_key==6){
  
  // left sobel kernel
   kernel[0] = 1.0; kernel[1] = 0.0; kernel[2] = -1.0;
   kernel[3] = 2.0; kernel[4] = 0.0; kernel[5] = -2.0;
   kernel[6] = 1.0; kernel[7] = 0.0; kernel[8] = -1.0;

  } else if (u_key==0){

  // identity kernel values
  kernel[0] = 0.0; kernel[1] = 0.0; kernel[2] = 0.0;
  kernel[3] = 0.0; kernel[4] = 1.0; kernel[5] = 0.0;
  kernel[6] = 0.0; kernel[7] = 0.0; kernel[8] = 0.0;

  }
  
  //Guardar la ubicación de los pixeles vecinos
	offset[0] = vec2(-stepSize.x, -stepSize.y); // top left
	offset[1] = vec2(0.0, -stepSize.y); // top middle
	offset[2] = vec2(stepSize.x, -stepSize.y); // top right
	offset[3] = vec2(-stepSize.x, 0.0); // middle left
	offset[4] = vec2(0.0, 0.0); //middle
	offset[5] = vec2(stepSize.x, 0.0); //middle right
	offset[6] = vec2(-stepSize.x, stepSize.y); //bottom left
	offset[7] = vec2(0.0, stepSize.y); //bottom middle
	offset[8] = vec2(stepSize.x, stepSize.y); //bottom right

	//Por cada pixel vecino
	for(int i = 0; i<9; i++){
		//sample a 3x3 grid of pixels
		vec4 color = texture2D(u_img, uv + offset[i]);

		//multiplicar el color del pixel por el valor correspondiente del kernel y añadirlo al valor total de la convolucion
		conv += color * kernel[i];
		
	}//for end
	
  // Se renderiza la salida con el valor de la convolucion
  gl_FragColor = vec4(conv.rgb, 1.0);

}