if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const o=e=>n(e,c),r={module:{uri:c},exports:s,require:o};i[c]=Promise.all(d.map((e=>r[e]||o(e)))).then((e=>(f(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"872.bundle.js",revision:"111c74b9411f973f459a1f8ad0ea1e4f"},{url:"app.webmanifest",revision:"acb9ace48f1a359021003fdf44b745a6"},{url:"app~6b882012.bundle.js",revision:"e337c1d3530e8602bf54518e36bc2278"},{url:"app~6b882012.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~7e49303a.bundle.js",revision:"b30e9d181f6de2fc6025d2c5b54db7a2"},{url:"app~7e49303a.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~cfa0e69c.bundle.js",revision:"1e71628805f4be6fd6248a840e4345ba"},{url:"app~cfa0e69c.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e1537fd5.css",revision:"a8b70b6a6dc84a7e7435fa2d1ff12f97"},{url:"favicon.png.png",revision:"3163ce3c3105de6b8fa2ab4884579867"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"614d31f1401a39b5f0ef21ffbeaa8910"}],{})}));
//# sourceMappingURL=sw.bundle.js.map