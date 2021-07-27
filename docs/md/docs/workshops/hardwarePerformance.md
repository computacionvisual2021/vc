
<h1 align="center">Desempe&ntilde;o Computacional Software y Hardware M&aacute;scaras de Convoluci&oacute;n</h1>

# Introducci&oacute;n

A continuaci&oacute;n se visualizan las correspondientes conversiones en video por software y hardware a ciertas m&aacute;scaras de convoluci&oacute;n y las mediciones de frames por segundo, frames totales, tiempo entre frames y promedio de frames por segundo realizadas. Para el manejo de los componentes de implementaci&oacute;n por ***Hardware*** se deber&aacute; hacer uso de los siguientes comandos (note que no hay una equivalencia en la implementaci&oacute;n de Software de la m&aacute;scara "RGB Negative ?" por lo que puede obviarla para la comparaci&oacute;n):

| Tecla |      M&aacute;scara      |
|:-----:|:------------------------:|
|   0   |   Identidad (Original)   |
|   1   |      RGB Negative ?      |
|   2   |          Inverse         |
|   3   |     Single Pass Blur     |
|   4   | Outline (Edge Detection) |
|   5   |          Emboss          |


En el caso de la implementaci&oacute;n por ***Software***, el usuario podr&aacute; usar el selector de la parte superior del canvas para escoger la m&aacute;scara de convoluci&oacute;n deseada.

# Soluci&oacute;n y Resultados

## Hardware
 
> :P5 sketch=/docs/sketches/workshop2/PerformanceHardMascarasVideo.js, width=710, height=655

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
<table id="tg-u88PX" class="tg" style="undefined;table-layout: fixed; width: 645px">
<colgroup>
<col style="width: 73px">
<col style="width: 90px">
<col style="width: 73px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 66px">
<col style="width: 76px">
</colgroup>
<thead>
  <tr>
    <th class="tg-wa1i" rowspan="24">Hardware</th>
    <th class="tg-nrix" colspan="2" rowspan="2"></th>
    <th class="tg-wa1i" colspan="3">Outline Mask</th>
    <th class="tg-wa1i" rowspan="2">Total</th>
    <th class="tg-wa1i" rowspan="2">Promedio</th>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecución 1</td>
    <td class="tg-wa1i">Ejecución 2</td>
    <td class="tg-wa1i">Ejecución 3</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.047,00</td>
    <td class="tg-nrix">1.243,00</td>
    <td class="tg-nrix">1.068,00</td>
    <td class="tg-wa1i">3.358,00</td>
    <td class="tg-wa1i">1.119,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.024,00</td>
    <td class="tg-nrix">1.031,00</td>
    <td class="tg-nrix">1.027,00</td>
    <td class="tg-wa1i">3.082,00</td>
    <td class="tg-wa1i">1.027,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">60,07</td>
    <td class="tg-nrix">60,02</td>
    <td class="tg-nrix">60,06</td>
    <td class="tg-wa1i">180,15</td>
    <td class="tg-wa1i">60,05</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">60,06</td>
    <td class="tg-nrix">60,09</td>
    <td class="tg-nrix">63,10</td>
    <td class="tg-wa1i">183,25</td>
    <td class="tg-wa1i">61,08</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">7,40%</td>
    <td class="tg-nrix">9,20%</td>
    <td class="tg-nrix">7,50%</td>
    <td class="tg-wa1i">24,10</td>
    <td class="tg-wa1i">8,03</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">19,80%</td>
    <td class="tg-nrix">16,60%</td>
    <td class="tg-nrix">14,50%</td>
    <td class="tg-wa1i">50,90</td>
    <td class="tg-wa1i">16,97</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">22,40%</td>
    <td class="tg-nrix">23,90%</td>
    <td class="tg-nrix">22,50%</td>
    <td class="tg-wa1i">68,80</td>
    <td class="tg-wa1i">22,93</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">18,90%</td>
    <td class="tg-nrix">19,40%</td>
    <td class="tg-nrix">18,10%</td>
    <td class="tg-wa1i">56,40</td>
    <td class="tg-wa1i">18,80</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">235,60</td>
    <td class="tg-nrix">235,80</td>
    <td class="tg-nrix">254,80</td>
    <td class="tg-wa1i">726,20</td>
    <td class="tg-wa1i">242,07</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">315,12</td>
    <td class="tg-nrix">307,82</td>
    <td class="tg-nrix">308,90</td>
    <td class="tg-wa1i">931,84</td>
    <td class="tg-wa1i">310,61</td>
  </tr>
  <tr>
    <td class="tg-nrix" colspan="2" rowspan="2"></td>
    <td class="tg-wa1i" colspan="3">Reverse Mask</td>
    <td class="tg-wa1i" rowspan="2">Total</td>
    <td class="tg-wa1i" rowspan="2">Promedio</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecución 4</td>
    <td class="tg-wa1i">Ejecución 5</td>
    <td class="tg-wa1i">Ejecución 6</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.060,00</td>
    <td class="tg-nrix">1.027,00</td>
    <td class="tg-nrix">1.123,00</td>
    <td class="tg-wa1i">3.210,00</td>
    <td class="tg-wa1i">1.070,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.029,00</td>
    <td class="tg-nrix">1.044,00</td>
    <td class="tg-nrix">1.023,00</td>
    <td class="tg-wa1i">3.096,00</td>
    <td class="tg-wa1i">1.032,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">59,98</td>
    <td class="tg-nrix">59,90</td>
    <td class="tg-nrix">60,03</td>
    <td class="tg-wa1i">179,91</td>
    <td class="tg-wa1i">59,97</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">62,48</td>
    <td class="tg-nrix">61,91</td>
    <td class="tg-nrix">63,28</td>
    <td class="tg-wa1i">187,67</td>
    <td class="tg-wa1i">62,56</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">7,00%</td>
    <td class="tg-nrix">7,50%</td>
    <td class="tg-nrix">7,50%</td>
    <td class="tg-wa1i">22,00</td>
    <td class="tg-wa1i">7,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">19,21%</td>
    <td class="tg-nrix">16,02%</td>
    <td class="tg-nrix">14,23%</td>
    <td class="tg-wa1i">49,46</td>
    <td class="tg-wa1i">16,49</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">22,40%</td>
    <td class="tg-nrix">21,70%</td>
    <td class="tg-nrix">22,20%</td>
    <td class="tg-wa1i">66,30</td>
    <td class="tg-wa1i">22,10</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">18,23%</td>
    <td class="tg-nrix">17,91%</td>
    <td class="tg-nrix">18,30%</td>
    <td class="tg-wa1i">54,44</td>
    <td class="tg-wa1i">18,15</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">234,20</td>
    <td class="tg-nrix">172,70</td>
    <td class="tg-nrix">169,40</td>
    <td class="tg-wa1i">576,30</td>
    <td class="tg-wa1i">192,10</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">340,30</td>
    <td class="tg-nrix">317,82</td>
    <td class="tg-nrix">313,72</td>
    <td class="tg-wa1i">971,84</td>
    <td class="tg-wa1i">323,95</td>
  </tr>
</thead>
</table>
<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>

## Software

> :P5 sketch=/docs/sketches/workshop2/PerformanceSoftConvolMasks.js, width=710, height=710

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
<table id="tg-e0hgx" class="tg" style="undefined;table-layout: fixed; width: 642px">
<colgroup>
<col style="width: 71px">
<col style="width: 89px">
<col style="width: 73px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 89px">
<col style="width: 66px">
<col style="width: 76px">
</colgroup>
<thead>
  <tr>
    <th class="tg-wa1i" rowspan="24">Software</th>
    <th class="tg-nrix" colspan="2" rowspan="2"></th>
    <th class="tg-wa1i" colspan="3">Outline Mask</th>
    <th class="tg-wa1i" rowspan="2">Total</th>
    <th class="tg-wa1i" rowspan="2">Promedio</th>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecución 1</td>
    <td class="tg-wa1i">Ejecución 2</td>
    <td class="tg-wa1i">Ejecución 3</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.010,00</td>
    <td class="tg-nrix">1.004,00</td>
    <td class="tg-nrix">1.060,00</td>
    <td class="tg-wa1i">3.074,00</td>
    <td class="tg-wa1i">1.024,67</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.002,00</td>
    <td class="tg-nrix">1.073,00</td>
    <td class="tg-nrix">1.001,00</td>
    <td class="tg-wa1i">3.076,00</td>
    <td class="tg-wa1i">1.025,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">10,05</td>
    <td class="tg-nrix">9,65</td>
    <td class="tg-nrix">9,94</td>
    <td class="tg-wa1i">29,64</td>
    <td class="tg-wa1i">9,88</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">10,67</td>
    <td class="tg-nrix">10,04</td>
    <td class="tg-nrix">10,25</td>
    <td class="tg-wa1i">30,96</td>
    <td class="tg-wa1i">10,32</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">18,60%</td>
    <td class="tg-nrix">20,40%</td>
    <td class="tg-nrix">18,20%</td>
    <td class="tg-wa1i">57,20</td>
    <td class="tg-wa1i">19,07</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">41,90%</td>
    <td class="tg-nrix">43,12%</td>
    <td class="tg-nrix">42,21%</td>
    <td class="tg-wa1i">127,23</td>
    <td class="tg-wa1i">42,41</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">10,20%</td>
    <td class="tg-nrix">8,40%</td>
    <td class="tg-nrix">9,60%</td>
    <td class="tg-wa1i">28,20</td>
    <td class="tg-wa1i">9,40</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">3,50%</td>
    <td class="tg-nrix">3,80%</td>
    <td class="tg-nrix">3,30%</td>
    <td class="tg-wa1i">10,60</td>
    <td class="tg-wa1i">3,53</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">251</td>
    <td class="tg-nrix">214,6</td>
    <td class="tg-nrix">217,6</td>
    <td class="tg-wa1i">683,20</td>
    <td class="tg-wa1i">227,73</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">286,61</td>
    <td class="tg-nrix">291,51</td>
    <td class="tg-nrix">305,4</td>
    <td class="tg-wa1i">883,52</td>
    <td class="tg-wa1i">294,51</td>
  </tr>
  <tr>
    <td class="tg-wa1i" colspan="2" rowspan="2"></td>
    <td class="tg-wa1i" colspan="3">Reverse Mask</td>
    <td class="tg-wa1i" rowspan="2">Total</td>
    <td class="tg-wa1i" rowspan="2">Promedio</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecución 4</td>
    <td class="tg-wa1i">Ejecución 5</td>
    <td class="tg-wa1i">Ejecución 6</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.014,00</td>
    <td class="tg-nrix">1.010,00</td>
    <td class="tg-nrix">1.027,00</td>
    <td class="tg-wa1i">3.051,00</td>
    <td class="tg-wa1i">1.017,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.109,00</td>
    <td class="tg-nrix">1.000,00</td>
    <td class="tg-nrix">1.000,00</td>
    <td class="tg-wa1i">3.109,00</td>
    <td class="tg-wa1i">1.036,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">9,32</td>
    <td class="tg-nrix">9,22</td>
    <td class="tg-nrix">9,18</td>
    <td class="tg-wa1i">27,72</td>
    <td class="tg-wa1i">9,24</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">9,08</td>
    <td class="tg-nrix">9,64</td>
    <td class="tg-nrix">9,06</td>
    <td class="tg-wa1i">27,78</td>
    <td class="tg-wa1i">9,26</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">19,80%</td>
    <td class="tg-nrix">20%</td>
    <td class="tg-nrix">18%</td>
    <td class="tg-wa1i">57,80</td>
    <td class="tg-wa1i">19,27</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">41,70%</td>
    <td class="tg-nrix">40,56%</td>
    <td class="tg-nrix">41,20%</td>
    <td class="tg-wa1i">123,46</td>
    <td class="tg-wa1i">41,15</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">7,60%</td>
    <td class="tg-nrix">7,70%</td>
    <td class="tg-nrix">9,70%</td>
    <td class="tg-wa1i">25,00</td>
    <td class="tg-wa1i">8,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">3,60%</td>
    <td class="tg-nrix">3,50%</td>
    <td class="tg-nrix">3,49%</td>
    <td class="tg-wa1i">10,59</td>
    <td class="tg-wa1i">3,53</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">201,80</td>
    <td class="tg-nrix">192,60</td>
    <td class="tg-nrix">205,10</td>
    <td class="tg-wa1i">599,50</td>
    <td class="tg-wa1i">199,83</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">282,45</td>
    <td class="tg-nrix">286,67</td>
    <td class="tg-nrix">289,23</td>
    <td class="tg-wa1i">858,35</td>
    <td class="tg-wa1i">286,12</td>
  </tr>
</thead>
</table>
<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>

<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>

# Referencias y Bibliograf&iacute;a

[DeltaTime Reference](https://p5js.org/es/reference/#/p5/deltaTime)

[FrameCount Reference](https://p5js.org/es/reference/#/p5/frameCount)

[FrameRate Reference ](https://p5js.org/es/reference/#/p5/frameRate)

[Performance metricts Base Idea](https://sfdelgadop.github.io/computacion-visual/video-1/)

[Html components for display shaders frames values idea](https://github.com/nicrodriguezval/vc/blob/main/docs/sketches/hardware/asciimosaic/w2_asciivideo.js)

[Html Table Generator](https://www.tablesgenerator.com/html_tables)

> :ToCPrevNext