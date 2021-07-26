
<h1 align="center">Desempe&ntilde;o Computacional Software y Hardware RGB y Luma</h1>

# Introducci&oacute;n

A continuaci&oacute;n se visualizan las correspondientes conversiones en video por software y hardware a escalas de grises y las mediciones de frames por segundo, frames totales, tiempo entre frames y promedio de frames por segundo realizadas. Para el manejo de los componentes de implementaci&oacute;n por ***Hardware*** se deber&aacute; hacer uso de los siguientes comandos:

| Tecla |         Resultado         |
|:-----:|:-------------------------:|
|   0   |   Imagen/Video Original   |
|   1   | Imagen/Video Promedio RGB |
|   2   |     Imagen/Video Luma     |


En el caso de la implementaci&oacute;n por ***Software***, el usuario podr&aacute; usar el selector de la parte superior del canvas para escoger la escala de grises deseada.

# Soluci&oacute;n y Resultados

## Hardware
 > :P5 sketch=/docs/sketches/workshop2/PerformanceHardGrayScale.js, width=710, height=655

## Software

 > :P5 sketch=/docs/sketches/workshop2/PerformanceSoftGrayScale.js, width=710, height=710

## Resultados


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-wa1i{font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-uzvj{border-color:inherit;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-yla0{font-weight:bold;text-align:left;vertical-align:middle}
.tg-sort-header::-moz-selection{background:0 0}
.tg-sort-header::selection{background:0 0}.tg-sort-header{cursor:pointer}
.tg-sort-header:after{content:'';float:right;margin-top:7px;border-width:0 5px 5px;border-style:solid;
  border-color:#404040 transparent;visibility:hidden}
.tg-sort-header:hover:after{visibility:visible}
.tg-sort-asc:after,.tg-sort-asc:hover:after,.tg-sort-desc:after{visibility:visible;opacity:.4}
.tg-sort-desc:after{border-bottom:none;border-width:5px 5px 0}</style>
<table id="tg-nIaD6" class="tg" style="undefined;table-layout: fixed; width: 1069px">
<colgroup>
<col style="width: 63px">
<col style="width: 94px">
<col style="width: 25px">
<col style="width: 134px">
<col style="width: 133px">
<col style="width: 134px">
<col style="width: 139px">
<col style="width: 135px">
<col style="width: 135px">
<col style="width: 77px">
</colgroup>
<thead>
  <tr>
    <th class="tg-uzvj" colspan="3" rowspan="2">H: Hardware<br>S: Software</th>
    <th class="tg-uzvj" colspan="3">Promedio RGB</th>
    <th class="tg-uzvj" colspan="3">Luma</th>
    <th class="tg-wa1i" rowspan="2">Total/ Promedio</th>
  </tr>
  <tr>
    <td class="tg-uzvj">Ejecuci&oacute;n 1</td>
    <td class="tg-uzvj">Ejecuci&oacute;n 2</td>
    <td class="tg-uzvj">Ejecuci&oacute;n 3</td>
    <td class="tg-uzvj">Ejecuci&oacute;n 4</td>
    <td class="tg-uzvj">Ejecuci&oacute;n 5</td>
    <td class="tg-uzvj">Ejecuci&oacute;n 6</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-uzvj" rowspan="10">Equipo A</td>
    <td class="tg-uzvj" rowspan="2">Frames Procesados</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8">404</td>
    <td class="tg-9wq8">403</td>
    <td class="tg-9wq8">407</td>
    <td class="tg-9wq8">401</td>
    <td class="tg-9wq8">400</td>
    <td class="tg-9wq8">401</td>
    <td class="tg-yla0">2416/403</td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8">406</td>
    <td class="tg-9wq8">407</td>
    <td class="tg-9wq8">405</td>
    <td class="tg-9wq8">399</td>
    <td class="tg-9wq8">401</td>
    <td class="tg-9wq8">405</td>
    <td class="tg-yla0">2423/404</td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">FPS Promedio</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8">10.728</td>
    <td class="tg-9wq8">10.558</td>
    <td class="tg-9wq8">10.774</td>
    <td class="tg-9wq8">7.485</td>
    <td class="tg-9wq8">7.301</td>
    <td class="tg-9wq8">7.367</td>
    <td class="tg-yla0">9.0355</td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8">11.148</td>
    <td class="tg-9wq8">10.99</td>
    <td class="tg-9wq8">11.277</td>
    <td class="tg-9wq8">7.397</td>
    <td class="tg-9wq8">8.37</td>
    <td class="tg-9wq8">7.468</td>
    <td class="tg-yla0">9.442</td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">CPU</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8">19%</td>
    <td class="tg-9wq8">23%</td>
    <td class="tg-9wq8">22%</td>
    <td class="tg-9wq8">20%</td>
    <td class="tg-9wq8">19%</td>
    <td class="tg-9wq8">28%</td>
    <td class="tg-yla0">22%</td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8">21%</td>
    <td class="tg-9wq8">20%</td>
    <td class="tg-9wq8">20%</td>
    <td class="tg-9wq8">20%</td>
    <td class="tg-9wq8">59%</td>
    <td class="tg-9wq8">24%</td>
    <td class="tg-yla0">27%</td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">GPU</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8">35%</td>
    <td class="tg-9wq8">24%</td>
    <td class="tg-9wq8">32%</td>
    <td class="tg-9wq8">27%</td>
    <td class="tg-9wq8">27%</td>
    <td class="tg-9wq8">30%</td>
    <td class="tg-yla0">29%</td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8">29%</td>
    <td class="tg-9wq8">35%</td>
    <td class="tg-9wq8">34%</td>
    <td class="tg-9wq8">26%</td>
    <td class="tg-9wq8">30%</td>
    <td class="tg-9wq8">27%</td>
    <td class="tg-yla0">30%</td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">Memoria</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8">52%</td>
    <td class="tg-9wq8">51%</td>
    <td class="tg-9wq8">53%</td>
    <td class="tg-9wq8">58%</td>
    <td class="tg-9wq8">59%</td>
    <td class="tg-9wq8">61%</td>
    <td class="tg-yla0">56%</td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8">51%</td>
    <td class="tg-9wq8">53%</td>
    <td class="tg-9wq8">54%</td>
    <td class="tg-9wq8">58%</td>
    <td class="tg-9wq8">64%</td>
    <td class="tg-9wq8">64%</td>
    <td class="tg-yla0">57%</td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="10">Equipo B</td>
    <td class="tg-uzvj" rowspan="2">Frames Procesados</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">FPS Promedio</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">CPU</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">GPU</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj" rowspan="2">Memoria</td>
    <td class="tg-uzvj">H</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
  <tr>
    <td class="tg-uzvj">S</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8"></td>
    <td class="tg-yla0"></td>
  </tr>
</tbody>
</table>
<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>




# Referencias y Bibliograf&iacute;a

[DeltaTime Reference](https://p5js.org/es/reference/#/p5/deltaTime)

[FrameCount Reference](https://p5js.org/es/reference/#/p5/frameCount)

[FrameRate Reference ](https://p5js.org/es/reference/#/p5/frameRate)

[Performance metricts Base Idea](https://sfdelgadop.github.io/computacion-visual/video-1/)

[Html components for display shaders frames values idea](https://github.com/nicrodriguezval/vc/blob/main/docs/sketches/hardware/asciimosaic/w2_asciivideo.js)


> :ToCPrevNext