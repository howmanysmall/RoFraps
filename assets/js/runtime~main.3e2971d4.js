(()=>{"use strict";var e,t,r,o,n,a={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return a[e].call(r.exports,r,r.exports,c),r.exports}c.m=a,e=[],c.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var f=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(f=!1,n<a&&(a=n));if(f){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(n,a),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",132:"0b416957",145:"327214df",217:"3b8c55ea",267:"b23037e9",342:"944f1c08",374:"d3874e59",472:"89f80957",514:"1be78505",530:"d6d5099f",540:"f6c15eec",556:"8deedfb8",671:"0e384e19",784:"0cd12273",795:"558760ca",918:"17896441",933:"8742a7b6",995:"b63c6054"}[e]||e)+"."+{53:"522670cc",85:"7e51e6d1",132:"5b86dd7d",145:"e4eee5db",210:"2ef1ce13",217:"fc0b5e36",245:"4533cda9",267:"818be7d7",342:"66532d77",343:"0365238a",374:"25da6dab",472:"9976ee99",514:"a99f56fd",530:"ad79d010",540:"fb597bb8",556:"89f87582",671:"6abbf144",784:"b9c6d8b6",795:"7594377d",878:"055ad319",918:"0c1d5390",933:"cb9b0ee5",972:"d6d4b8fb",995:"c22313cd"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="docs:",c.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var f,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var b=d[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+r){f=b;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",n+r),f.src=e),o[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var n=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),n&&n.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/RoFraps/",c.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","0b416957":"132","327214df":"145","3b8c55ea":"217",b23037e9:"267","944f1c08":"342",d3874e59:"374","89f80957":"472","1be78505":"514",d6d5099f:"530",f6c15eec:"540","8deedfb8":"556","0e384e19":"671","0cd12273":"784","558760ca":"795","8742a7b6":"933",b63c6054:"995"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=c.p+c.u(t),f=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,o[1](f)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],f=r[1],i=r[2],d=0;if(a.some((t=>0!==e[t]))){for(o in f)c.o(f,o)&&(c.m[o]=f[o]);if(i)var u=i(c)}for(t&&t(r);d<a.length;d++)n=a[d],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(u)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();