<script src="../sketches/workshop1/p5.min.js" /></script>
<script src="../sketches/workshop1/p5.asciiart.min.js" /></script>
<script src="../sketches/workshop1/p5.dom.min.js" /></script>
<script src="../sketches/workshop1/p5.sound.min.js" /></script>

<h1 align="center">Desempe&ntilde;o Computacional Software y Hardware Ascii-Art</h1>

# Introducci&oacute;n

A continuaci&oacute;n se visualizan las correspondientes conversiones en video por software y hardware a Ascii-Art y las mediciones de frames por segundo, frames totales, tiempo entre frames y promedio de frames por segundo realizadas.

# Soluci&oacute;n y Resultados

## Hardware

> :P5 sketch=/docs/sketches/workshop2/PerformanceHardAscii.js, width=710, height=700

## Resultados

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-wa1i{font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-nrix{text-align:center;vertical-align:middle}
.tg-sort-header::-moz-selection{background:0 0}
.tg-sort-header::selection{background:0 0}.tg-sort-header{cursor:pointer}
.tg-sort-header:after{content:'';float:right;margin-top:7px;border-width:0 5px 5px;border-style:solid;
  border-color:#404040 transparent;visibility:hidden}
.tg-sort-header:hover:after{visibility:visible}
.tg-sort-asc:after,.tg-sort-asc:hover:after,.tg-sort-desc:after{visibility:visible;opacity:.4}
.tg-sort-desc:after{border-bottom:none;border-width:5px 5px 0}</style>
<table id="tg-zs3Ep" class="tg">
<thead>
  <tr>
    <th class="tg-wa1i" rowspan="12">Hardware</th>
    <th class="tg-wa1i" colspan="2" rowspan="2"></th>
    <th class="tg-wa1i" colspan="5">Ascii-Art</th>
    <th class="tg-wa1i" rowspan="2">Total</th>
    <th class="tg-wa1i" rowspan="2">Promedio</th>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecuci&oacute;n 1</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 2</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 3</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 4</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 5</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">2.032,00</td>
    <td class="tg-nrix">2.032,00</td>
    <td class="tg-nrix">2.048,00</td>
    <td class="tg-nrix">2.007,00</td>
    <td class="tg-nrix">2.024,00</td>
    <td class="tg-wa1i">10.143,00</td>
    <td class="tg-wa1i">2.028,60</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">2.015,00</td>
    <td class="tg-nrix">2.018,00</td>
    <td class="tg-nrix">2.016,00</td>
    <td class="tg-nrix">2.025,00</td>
    <td class="tg-nrix">2.021,00</td>
    <td class="tg-wa1i">10.095,00</td>
    <td class="tg-wa1i">2.019,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">60,00</td>
    <td class="tg-nrix">59,97</td>
    <td class="tg-nrix">60,03</td>
    <td class="tg-nrix">60.03</td>
    <td class="tg-nrix">59,97</td>
    <td class="tg-wa1i">239,97</td>
    <td class="tg-wa1i">59,99</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">60,03</td>
    <td class="tg-nrix">58,80</td>
    <td class="tg-nrix">60,02</td>
    <td class="tg-nrix">60.06</td>
    <td class="tg-nrix">60.16</td>
    <td class="tg-wa1i">178,85</td>
    <td class="tg-wa1i">59,62</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">8,40%</td>
    <td class="tg-nrix">8,30%</td>
    <td class="tg-nrix">8,80%</td>
    <td class="tg-nrix">9,90%</td>
    <td class="tg-nrix">7,80%</td>
    <td class="tg-wa1i">43,20</td>
    <td class="tg-wa1i">8,64</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">19,10%</td>
    <td class="tg-nrix">20,10%</td>
    <td class="tg-nrix">18,50%</td>
    <td class="tg-nrix">21.50%</td>
    <td class="tg-nrix">21,40%</td>
    <td class="tg-wa1i">79,10</td>
    <td class="tg-wa1i">19,78</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">20,30%</td>
    <td class="tg-nrix">24,10%</td>
    <td class="tg-nrix">22,80%</td>
    <td class="tg-nrix">23,4%%</td>
    <td class="tg-nrix">24,10%</td>
    <td class="tg-wa1i">91,30</td>
    <td class="tg-wa1i">22,83</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">17,40%</td>
    <td class="tg-nrix">17.80%</td>
    <td class="tg-nrix">18,70%</td>
    <td class="tg-nrix">17,80%</td>
    <td class="tg-nrix">18,00%</td>
    <td class="tg-wa1i">71,90</td>
    <td class="tg-wa1i">17,98</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">250,40</td>
    <td class="tg-nrix">243,90</td>
    <td class="tg-nrix">273,60</td>
    <td class="tg-nrix">255,50</td>
    <td class="tg-nrix">270,40</td>
    <td class="tg-wa1i">1.293,80</td>
    <td class="tg-wa1i">258,76</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">312,70</td>
    <td class="tg-nrix">315,80</td>
    <td class="tg-nrix">322,70</td>
    <td class="tg-nrix">353,15</td>
    <td class="tg-nrix">356,10</td>
    <td class="tg-wa1i">1.660,45</td>
    <td class="tg-wa1i">332,09</td>
  </tr>
</thead>
</table>
<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>

## Software

> :P5 sketch=/docs/sketches/workshop2/PerformanceSoftAscii.js, width=720, height=680


## Resultados

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-wa1i{font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-nrix{text-align:center;vertical-align:middle}
.tg-sort-header::-moz-selection{background:0 0}
.tg-sort-header::selection{background:0 0}.tg-sort-header{cursor:pointer}
.tg-sort-header:after{content:'';float:right;margin-top:7px;border-width:0 5px 5px;border-style:solid;
  border-color:#404040 transparent;visibility:hidden}
.tg-sort-header:hover:after{visibility:visible}
.tg-sort-asc:after,.tg-sort-asc:hover:after,.tg-sort-desc:after{visibility:visible;opacity:.4}
.tg-sort-desc:after{border-bottom:none;border-width:5px 5px 0}</style>
<table id="tg-d935S" class="tg" style="undefined;table-layout: fixed; width: 839px">
<colgroup>
<col style="width: 71px">
<col style="width: 100px">
<col style="width: 73px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 74px">
<col style="width: 76px">
</colgroup>
<thead>
  <tr>
    <th class="tg-wa1i" rowspan="12">Software</th>
    <th class="tg-wa1i" colspan="2" rowspan="2"></th>
    <th class="tg-wa1i" colspan="5">Ascii-Art</th>
    <th class="tg-wa1i" rowspan="2">Total</th>
    <th class="tg-wa1i" rowspan="2">Promedio</th>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecuci&oacute;n 1</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 2</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 3</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 4</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 5</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">2.039,00</td>
    <td class="tg-nrix">2.035,00</td>
    <td class="tg-nrix">2.009,00</td>
    <td class="tg-nrix">1.995,00</td>
    <td class="tg-nrix">1.973,00</td>
    <td class="tg-wa1i">10.051,00</td>
    <td class="tg-wa1i">2.010,20</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">2.016,00</td>
    <td class="tg-nrix">2.010,00</td>
    <td class="tg-nrix">2.013,00</td>
    <td class="tg-nrix">2.008,00</td>
    <td class="tg-nrix">2.009,00</td>
    <td class="tg-wa1i">10.056,00</td>
    <td class="tg-wa1i">2.011,20</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">22,87</td>
    <td class="tg-nrix">21,55</td>
    <td class="tg-nrix">21,86</td>
    <td class="tg-nrix">21,53</td>
    <td class="tg-nrix">21,49</td>
    <td class="tg-wa1i">109,30</td>
    <td class="tg-wa1i">21,86</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">25,14</td>
    <td class="tg-nrix">26,90</td>
    <td class="tg-nrix">27,54</td>
    <td class="tg-nrix">26,45</td>
    <td class="tg-nrix">28,77</td>
    <td class="tg-wa1i">134,80</td>
    <td class="tg-wa1i">26,96</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">25,10%</td>
    <td class="tg-nrix">24,20%</td>
    <td class="tg-nrix">23,20%</td>
    <td class="tg-nrix">24%</td>
    <td class="tg-nrix">24%</td>
    <td class="tg-wa1i">120,50</td>
    <td class="tg-wa1i">24,10</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">39,60%</td>
    <td class="tg-nrix">41,60%</td>
    <td class="tg-nrix">41,20%</td>
    <td class="tg-nrix">40,91%</td>
    <td class="tg-nrix">42,12%</td>
    <td class="tg-wa1i">205,43</td>
    <td class="tg-wa1i">41,09</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">4,80%</td>
    <td class="tg-nrix">5%</td>
    <td class="tg-nrix">5,20%</td>
    <td class="tg-nrix">5%</td>
    <td class="tg-nrix">4,90%</td>
    <td class="tg-wa1i">24,90</td>
    <td class="tg-wa1i">4,98</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">6,90%</td>
    <td class="tg-nrix">6,40%</td>
    <td class="tg-nrix">7,00%</td>
    <td class="tg-nrix">5,60%</td>
    <td class="tg-nrix">5,90%</td>
    <td class="tg-wa1i">31,80</td>
    <td class="tg-wa1i">6,36</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">279,70</td>
    <td class="tg-nrix">327,90</td>
    <td class="tg-nrix">313,40</td>
    <td class="tg-nrix">390,10</td>
    <td class="tg-nrix">420,60</td>
    <td class="tg-wa1i">1.731,70</td>
    <td class="tg-wa1i">346,34</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">345,60</td>
    <td class="tg-nrix">339,50</td>
    <td class="tg-nrix">322,60</td>
    <td class="tg-nrix">380,80</td>
    <td class="tg-nrix">374,00</td>
    <td class="tg-wa1i">1.762,50</td>
    <td class="tg-wa1i">352,50</td>
  </tr>
</thead>
</table>
<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>

# Referencias y Bibliograf&iacute;a

[DeltaTime Reference](https://p5js.org/es/reference/#/p5/deltaTime)

[FrameCount Reference](https://p5js.org/es/reference/#/p5/frameCount)

[FrameRate Reference ](https://p5js.org/es/reference/#/p5/frameRate)

[Performance metricts Base Idea](https://sfdelgadop.github.io/computacion-visual/video-1/)

[Html components for display shaders frames values idea](https://github.com/nicrodriguezval/vc/blob/main/docs/sketches/hardware/asciimosaic/w2_asciivideo.js)

[Html Table Generator](https://www.tablesgenerator.com/html_tables)

> :ToCPrevNext