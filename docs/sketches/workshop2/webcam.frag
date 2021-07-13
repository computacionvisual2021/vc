precision mediump float;

// grab texcoords from the vertex shader
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform int u_key;

// this is a common glsl function of unknown origin to convert rgb colors to luminance
// it performs a dot product of the input color against some known values that account for our eyes perception of brighness
// i pulled this one from here https://github.com/hughsk/glsl-luma/blob/master/index.glsl

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float grayRGB(vec3 color) {
  float lightness=(color.r + color.g + color.b) / 3.0; // Promedio de los tres componentes
  return lightness;
}
void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 1.0 - uv;

  // get the webcam as a vec4 using texture2D
  vec4 tex = texture2D(tex0, uv);

   float gray;
   //Keep it original from start

   float threshR = tex.r ;
   float threshG = tex.g ;
   float threshB = tex.b ;
  
  if (u_key==1){

    gray =grayRGB(tex.rgb);

    threshR = gray ;
    threshG = gray ;
    threshB = gray ;
  }else if (u_key==2){
    // convert the texture to grayscale by using the luma function 
    gray = luma(tex.rgb);

    threshR = gray ;
    threshG = gray ;
    threshB = gray ;
  }

  // convert the texture to grayscale by using the luma function  
  //gray = luma(tex.rgb);

  // output the grayscale value in all three rgb color channels
  //gl_FragColor = vec4(gray, gray, gray, 1.0);

  vec3 thresh = vec3(threshR, threshG, threshB);

  // Render de la salida
  gl_FragColor = vec4(thresh, 1.0);
}