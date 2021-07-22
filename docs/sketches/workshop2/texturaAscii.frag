// Estas son definiciones necesarias que le permiten a la tarjeta gr�fica saber c�mo representar el sombreador
// #ifdef GL_ES
// precision mediump float;
// #endif

//   varying vec2 vTexCoord;
//   varying vec2 fragCoord;
//   // Valores que se pasan desde p5
//   uniform sampler2D u_img;

// float character(int n, vec2 p)
// {
// 	p = floor(p*vec2(4.0, -4.0) + 2.5);
//     if (clamp(p.x, 0.0, 4.0) == p.x)
// 	{
//         if (clamp(p.y, 0.0, 4.0) == p.y)	
// 		{
//         	int a = int(round(p.x) + 5.0 * round(p.y));
// 			if (((n >> a) & 1) == 1) return 1.0;
// 		}	
//     }
// 	return 0.0;
// }

// void main( )
// {   
//     vec2 uv = vTexCoord;
//     //Invierte la posicion de la cordenada  para que la imagen no quede alrreves
//     uv.y = 1.0 - uv.y;
// 	vec3 col = texture2D(u_img,uv).rgb;	
// 	float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
	
// 	int n =  4096;                // .
// 	if (gray > 0.2) n = 65600;    // :
// 	if (gray > 0.3) n = 332772;   // *
// 	if (gray > 0.4) n = 15255086; // o 
// 	if (gray > 0.5) n = 23385164; // &
// 	if (gray > 0.6) n = 15252014; // 8
// 	if (gray > 0.7) n = 13199452; // @
// 	if (gray > 0.8) n = 11512810; // #
	
// 	vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);

//     col = gray*vec3(character(n, p))

// 	fragColor   = vec4(col, 1.0);
// }

uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform int       iFrame;                // shader playback frame
uniform float     iChannelTime[4];       // channel playback time (in seconds)
uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube
uniform vec4      iDate;                 // (year, month, day, time in seconds)
uniform float     iSampleRate;

float character(int n, vec2 p)
{
	p = floor(p*vec2(4.0, -4.0) + 2.5);
    if (clamp(p.x, 0.0, 4.0) == p.x)
	{
        if (clamp(p.y, 0.0, 4.0) == p.y)	
		{
        	int a = int(round(p.x) + 5.0 * round(p.y));
			if (((n >> a) & 1) == 1) return 1.0;
		}	
    }
	return 0.0;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 pix = fragCoord.xy;
	vec3 col = texture(iChannel0, floor(pix/8.0)*8.0/iResolution.xy).rgb;	
	
	float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
	
	int n =  4096;                // .
	if (gray > 0.2) n = 65600;    // :
	if (gray > 0.3) n = 332772;   // *
	if (gray > 0.4) n = 15255086; // o 
	if (gray > 0.5) n = 23385164; // &
	if (gray > 0.6) n = 15252014; // 8
	if (gray > 0.7) n = 13199452; // @
	if (gray > 0.8) n = 11512810; // #
	
	vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);
    
	col = col*character(n, p);
	
	fragColor = vec4(col, 1.0);
}