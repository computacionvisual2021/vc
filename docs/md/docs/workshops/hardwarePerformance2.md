
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
<table id="tg-ltJ9D" class="tg" style="undefined;table-layout: fixed; width: 651px">
<colgroup>
<col style="width: 75px">
<col style="width: 94px">
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
    <th class="tg-wa1i" colspan="2" rowspan="2"></th>
    <th class="tg-wa1i" colspan="3">Promedio RGB</th>
    <th class="tg-wa1i" rowspan="2">Total</th>
    <th class="tg-wa1i" rowspan="2">Promedio</th>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecuci&oacute;n 1</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 2</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 3</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.041,00</td>
    <td class="tg-nrix">1.044,00</td>
    <td class="tg-nrix">1.059,00</td>
    <td class="tg-wa1i">3.144,00</td>
    <td class="tg-wa1i">1.048,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.027,00</td>
    <td class="tg-nrix">1.023,00</td>
    <td class="tg-nrix">1.026,00</td>
    <td class="tg-wa1i">3.076,00</td>
    <td class="tg-wa1i">1.025,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">60,00</td>
    <td class="tg-nrix">60,00</td>
    <td class="tg-nrix">60,01</td>
    <td class="tg-wa1i">180,01</td>
    <td class="tg-wa1i">60,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">60,06</td>
    <td class="tg-nrix">60,08</td>
    <td class="tg-nrix">62,38</td>
    <td class="tg-wa1i">182,52</td>
    <td class="tg-wa1i">60,84</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">10,00%</td>
    <td class="tg-nrix">9,80%</td>
    <td class="tg-nrix">8,50%</td>
    <td class="tg-wa1i">28,30</td>
    <td class="tg-wa1i">9,43</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">22,70%</td>
    <td class="tg-nrix">23,10%</td>
    <td class="tg-nrix">16,12%</td>
    <td class="tg-wa1i">61,92</td>
    <td class="tg-wa1i">20,64</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">26,60%</td>
    <td class="tg-nrix">26,70%</td>
    <td class="tg-nrix">26,60%</td>
    <td class="tg-wa1i">79,90</td>
    <td class="tg-wa1i">26,63</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">20,70%</td>
    <td class="tg-nrix">21,30%</td>
    <td class="tg-nrix">19,62%</td>
    <td class="tg-wa1i">61,62</td>
    <td class="tg-wa1i">20,54</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">353,70</td>
    <td class="tg-nrix">369,10</td>
    <td class="tg-nrix">399,70</td>
    <td class="tg-wa1i">1.122,50</td>
    <td class="tg-wa1i">374,17</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">412,40%</td>
    <td class="tg-nrix">429,60</td>
    <td class="tg-nrix">378,80</td>
    <td class="tg-wa1i">812,52</td>
    <td class="tg-wa1i">270,84</td>
  </tr>
  <tr>
    <td class="tg-wa1i" colspan="2" rowspan="2"></td>
    <td class="tg-wa1i" colspan="3">Luma</td>
    <td class="tg-wa1i" rowspan="2">Total</td>
    <td class="tg-wa1i" rowspan="2">Promedio</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecuci&oacute;n 4</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 5</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 6</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.057,00</td>
    <td class="tg-nrix">1.059,00</td>
    <td class="tg-nrix">1.029,00</td>
    <td class="tg-wa1i">3.145,00</td>
    <td class="tg-wa1i">1.048,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.030,00</td>
    <td class="tg-nrix">1.036,00</td>
    <td class="tg-nrix">1.029,00</td>
    <td class="tg-wa1i">3.095,00</td>
    <td class="tg-wa1i">1.031,67</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">60,02</td>
    <td class="tg-nrix">60.07</td>
    <td class="tg-nrix">60,02</td>
    <td class="tg-wa1i">120,04</td>
    <td class="tg-wa1i">60,02</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">60,08</td>
    <td class="tg-nrix">61,23</td>
    <td class="tg-nrix">60,06</td>
    <td class="tg-wa1i">181,37</td>
    <td class="tg-wa1i">60,46</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">8,00%</td>
    <td class="tg-nrix">9,20%</td>
    <td class="tg-nrix">7,80%</td>
    <td class="tg-wa1i">25,00</td>
    <td class="tg-wa1i">8,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">20,21%</td>
    <td class="tg-nrix">21,22%</td>
    <td class="tg-nrix">20,62%</td>
    <td class="tg-wa1i">62,05</td>
    <td class="tg-wa1i">20,68</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">26,70%</td>
    <td class="tg-nrix">26,70%</td>
    <td class="tg-nrix">27,50%</td>
    <td class="tg-wa1i">80,90</td>
    <td class="tg-wa1i">26,97</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">20,71%</td>
    <td class="tg-nrix">20,74%</td>
    <td class="tg-nrix">20,70%</td>
    <td class="tg-wa1i">62,15</td>
    <td class="tg-wa1i">20,72</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">254,30</td>
    <td class="tg-nrix">257,80</td>
    <td class="tg-nrix">260,90</td>
    <td class="tg-wa1i">773,00</td>
    <td class="tg-wa1i">257,67</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">343,91</td>
    <td class="tg-nrix">343,96</td>
    <td class="tg-nrix">343,90</td>
    <td class="tg-wa1i">1.031,77</td>
    <td class="tg-wa1i">343,92</td>
  </tr>
</thead>
</table>
<script charset="utf-8">var TGSort=window.TGSort||function(n){"use strict";function r(n){return n?n.length:0}function t(n,t,e,o=0){for(e=r(n);o<e;++o)t(n[o],o)}function e(n){return n.split("").reverse().join("")}function o(n){var e=n[0];return t(n,function(n){for(;!n.startsWith(e);)e=e.substring(0,r(e)-1)}),r(e)}function u(n,r,e=[]){return t(n,function(n){r(n)&&e.push(n)}),e}var a=parseFloat;function i(n,r){return function(t){var e="";return t.replace(n,function(n,t,o){return e=t.replace(r,"")+"."+(o||"").substring(1)}),a(e)}}var s=i(/^(?:\s*)([+-]?(?:\d+)(?:,\d{3})*)(\.\d*)?$/g,/,/g),c=i(/^(?:\s*)([+-]?(?:\d+)(?:\.\d{3})*)(,\d*)?$/g,/\./g);function f(n){var t=a(n);return!isNaN(t)&&r(""+t)+1>=r(n)?t:NaN}function d(n){var e=[],o=n;return t([f,s,c],function(u){var a=[],i=[];t(n,function(n,r){r=u(n),a.push(r),r||i.push(n)}),r(i)<r(o)&&(o=i,e=a)}),r(u(o,function(n){return n==o[0]}))==r(o)?e:[]}function v(n){if("TABLE"==n.nodeName){for(var a=function(r){var e,o,u=[],a=[];return function n(r,e){e(r),t(r.childNodes,function(r){n(r,e)})}(n,function(n){"TR"==(o=n.nodeName)?(e=[],u.push(e),a.push(n)):"TD"!=o&&"TH"!=o||e.push(n)}),[u,a]}(),i=a[0],s=a[1],c=r(i),f=c>1&&r(i[0])<r(i[1])?1:0,v=f+1,p=i[f],h=r(p),l=[],g=[],N=[],m=v;m<c;++m){for(var T=0;T<h;++T){r(g)<h&&g.push([]);var C=i[m][T],L=C.textContent||C.innerText||"";g[T].push(L.trim())}N.push(m-v)}t(p,function(n,t){l[t]=0;var a=n.classList;a.add("tg-sort-header"),n.addEventListener("click",function(){var n=l[t];!function(){for(var n=0;n<h;++n){var r=p[n].classList;r.remove("tg-sort-asc"),r.remove("tg-sort-desc"),l[n]=0}}(),(n=1==n?-1:+!n)&&a.add(n>0?"tg-sort-asc":"tg-sort-desc"),l[t]=n;var i,f=g[t],m=function(r,t){return n*f[r].localeCompare(f[t])||n*(r-t)},T=function(n){var t=d(n);if(!r(t)){var u=o(n),a=o(n.map(e));t=d(n.map(function(n){return n.substring(u,r(n)-a)}))}return t}(f);(r(T)||r(T=r(u(i=f.map(Date.parse),isNaN))?[]:i))&&(m=function(r,t){var e=T[r],o=T[t],u=isNaN(e),a=isNaN(o);return u&&a?0:u?-n:a?n:e>o?n:e<o?-n:n*(r-t)});var C,L=N.slice();L.sort(m);for(var E=v;E<c;++E)(C=s[E].parentNode).removeChild(s[E]);for(E=v;E<c;++E)C.appendChild(s[v+L[E-v]])})})}}n.addEventListener("DOMContentLoaded",function(){for(var t=n.getElementsByClassName("tg"),e=0;e<r(t);++e)try{v(t[e])}catch(n){}})}(document)</script>

## Software

> :P5 sketch=/docs/sketches/workshop2/PerformanceSoftGrayScale.js, width=710, height=710


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
<table id="tg-gXTb7" class="tg" style="undefined;table-layout: fixed; width: 645px">
<colgroup>
<col style="width: 71px">
<col style="width: 92px">
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
    <th class="tg-wa1i" colspan="2" rowspan="2"></th>
    <th class="tg-wa1i" colspan="3">Promedio RGB</th>
    <th class="tg-wa1i" rowspan="2">Total</th>
    <th class="tg-wa1i" rowspan="2">Promedio</th>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecuci&oacute;n 1</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 2</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 3</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.003,00</td>
    <td class="tg-nrix">1.005,00</td>
    <td class="tg-nrix">1.009,00</td>
    <td class="tg-wa1i">3.017,00</td>
    <td class="tg-wa1i">1.005,67</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.004,00</td>
    <td class="tg-nrix">1.003,00</td>
    <td class="tg-nrix">1.003,00</td>
    <td class="tg-wa1i">3.010,00</td>
    <td class="tg-wa1i">1.003,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">8,24</td>
    <td class="tg-nrix">8,26</td>
    <td class="tg-nrix">8,76</td>
    <td class="tg-wa1i">25,26</td>
    <td class="tg-wa1i">8,42</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">10,23</td>
    <td class="tg-nrix">10,07</td>
    <td class="tg-nrix">10,11</td>
    <td class="tg-wa1i">30,41</td>
    <td class="tg-wa1i">10,14</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">16,50%</td>
    <td class="tg-nrix">18,30%</td>
    <td class="tg-nrix">16,40%</td>
    <td class="tg-wa1i">51,20</td>
    <td class="tg-wa1i">17,07</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">38,90%</td>
    <td class="tg-nrix">39,12%</td>
    <td class="tg-nrix">39,00%</td>
    <td class="tg-wa1i">117,02</td>
    <td class="tg-wa1i">39,01</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">23,20%</td>
    <td class="tg-nrix">17,70%</td>
    <td class="tg-nrix">21,20%</td>
    <td class="tg-wa1i">62,10</td>
    <td class="tg-wa1i">20,70</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">16,80%</td>
    <td class="tg-nrix">15,90%</td>
    <td class="tg-nrix">17,30%</td>
    <td class="tg-wa1i">50,00</td>
    <td class="tg-wa1i">16,67</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">542,10</td>
    <td class="tg-nrix">558,10</td>
    <td class="tg-nrix">331,30</td>
    <td class="tg-wa1i">1.431,50</td>
    <td class="tg-wa1i">477,17</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">526,90</td>
    <td class="tg-nrix">384,80</td>
    <td class="tg-nrix">433,12</td>
    <td class="tg-wa1i">1.344,82</td>
    <td class="tg-wa1i">448,27</td>
  </tr>
  <tr>
    <td class="tg-wa1i" colspan="2" rowspan="2"></td>
    <td class="tg-wa1i" colspan="3">Luma</td>
    <td class="tg-wa1i" rowspan="2">Total</td>
    <td class="tg-wa1i" rowspan="2">Promedio</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Ejecuci&oacute;n 4</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 5</td>
    <td class="tg-wa1i">Ejecuci&oacute;n 6</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Frames Procesados</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">1.018,00</td>
    <td class="tg-nrix">1.011,00</td>
    <td class="tg-nrix">1.004,00</td>
    <td class="tg-wa1i">3.033,00</td>
    <td class="tg-wa1i">1.011,00</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">1.004,00</td>
    <td class="tg-nrix">1.011,00</td>
    <td class="tg-nrix">1.001,00</td>
    <td class="tg-wa1i">3.016,00</td>
    <td class="tg-wa1i">1.005,33</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">FPS Promedio</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">7,99</td>
    <td class="tg-nrix">7,98</td>
    <td class="tg-nrix">7,78</td>
    <td class="tg-wa1i">23,75</td>
    <td class="tg-wa1i">7,92</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">9,62</td>
    <td class="tg-nrix">9,32</td>
    <td class="tg-nrix">9,09</td>
    <td class="tg-wa1i">28,03</td>
    <td class="tg-wa1i">9,34</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">CPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">15,90%</td>
    <td class="tg-nrix">15,30%</td>
    <td class="tg-nrix">16,40%</td>
    <td class="tg-wa1i">47,60</td>
    <td class="tg-wa1i">15,87</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">39,50%</td>
    <td class="tg-nrix">42,20%</td>
    <td class="tg-nrix">40,51%</td>
    <td class="tg-wa1i">122,21</td>
    <td class="tg-wa1i">40,74</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">GPU</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">23,10%</td>
    <td class="tg-nrix">22,50%</td>
    <td class="tg-nrix">21%</td>
    <td class="tg-wa1i">66,60</td>
    <td class="tg-wa1i">22,20</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">16,45%</td>
    <td class="tg-nrix">17,30%</td>
    <td class="tg-nrix">15,50%</td>
    <td class="tg-wa1i">49,25</td>
    <td class="tg-wa1i">16,42</td>
  </tr>
  <tr>
    <td class="tg-wa1i" rowspan="2">Memoria</td>
    <td class="tg-wa1i">Equipo A</td>
    <td class="tg-nrix">349,50</td>
    <td class="tg-nrix">375,30</td>
    <td class="tg-nrix">355,50</td>
    <td class="tg-wa1i">1.080,30</td>
    <td class="tg-wa1i">360,10</td>
  </tr>
  <tr>
    <td class="tg-wa1i">Equipo B</td>
    <td class="tg-nrix">427,34</td>
    <td class="tg-nrix">435,70</td>
    <td class="tg-nrix">477,34</td>
    <td class="tg-wa1i">1.340,38</td>
    <td class="tg-wa1i">446,79</td>
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