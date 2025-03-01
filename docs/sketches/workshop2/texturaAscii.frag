// Las modificaciones y ajustes fueron compartidos en clase por el compañero Camilo Gómez
// del código original: https://www.shadertoy.com/view/lssGDj
// código del compañero: https://drive.google.com/file/d/1Fg_p77X0wvyK4cY4txpmdsc743M2FCIz/view

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D tex;

// Implementación Operador a nivel de bits
int getBit(int n, int a) {
  float value = float(n);
  for(float i = 27.0; i >= 0.0; i -= 1.0) {
    float val = pow(2.0,i*1.0);

    if (val <= value) {
      value -= val;
      if(i == float(a)) return 1;
    }
  }
  return 0;
}

// Reducción tamaño de 8x8 a 5x5 y activación brilo
float character(int n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);
    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)    
        {
            int a = int(floor(p.x+0.5) + 5.0 * floor(p.y+0.5));
            if (getBit(n,a) == 1) return 1.0;
        }    
    }
    return 0.0;
}

void main() {
  vec2 pix = gl_FragCoord.xy;
  pix.y = 393.0*2.0 - pix.y;
  vec2 resol = vec2(393.0*2.0, 393.0*2.0);
    // Partición de la imagen en 8x8 pixeles
    vec3 col = texture2D(tex, floor(pix/8.0)*8.0/resol).rgb;    
   // Calculo LUMA
    float luma = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
    // Máscaras a aplicar dependiendo del LUMA
    // n = codificación del caracter en entero
    // página para codificación de caracteres: http://thrill-project.com/archiv/coding/bitmap/

    int n =  4096;                // .
    if (luma > 0.2) n = 65600;    // :
    if (luma > 0.3) n = 332772;   // *
    if (luma > 0.4) n = 15255086; // o 
    if (luma > 0.5) n = 23385164; // &
    if (luma > 0.6) n = 15252014; // 8
    if (luma > 0.7) n = 13199452; // @
    if (luma > 0.8) n = 11512810; // # 

    //Cálculo de separación entre caracteres
    vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);

    col = vec3(character(n, p));

    gl_FragColor = vec4(col, 1.0);
}