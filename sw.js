if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>s(e,n),d={module:{uri:n},exports:o,require:t};i[n]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-926a8ce9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"ecuaciones.jpg",revision:"37d8fde35eb7632999b2598b11619c9b"},{url:"icono_matematicas.jpg",revision:"d9666fa971c28625f22533cc68fdc800"},{url:"index.html",revision:"e767927ff347c7e050f440b6e932f5eb"},{url:"manifest.json",revision:"9e01ecd52f647d6389ce0b49284772a7"},{url:"questions.js",revision:"4e1b9a2cb802d8560446187e12d2fb70"},{url:"script.js",revision:"c79c558e4c0bfda9336d13e6ed536a38"},{url:"style.css",revision:"b13413cc4abe848a9bd476eb2a9464a6"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
