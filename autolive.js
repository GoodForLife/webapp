// ==UserScript==
// @name         HK Result Blur – Klik 1 Per 1 (Support Live Draw)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Blur semua angka result HK, hilangkan blur dengan klik 1 per 1. Support live draw & sembunyikan elemen tertentu.
// @author       YourName
// @match        https://togel02.livedrawtoto.online/live-hk.php
// @grant        none
// ==/UserScript==

!function(){"use strict";const e=document.createElement("style");function t(){["/html/body/div[2]","/html/body/div[1]/table/tbody/tr[8]"].forEach((e,t)=>{try{const n=document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;n?(n.style.display="none",console.log(`[Userscript] Elemen XPath ke-${t+1} berhasil disembunyikan.`)):console.warn(`[Userscript] Elemen XPath "${e}" tidak ditemukan.`)}catch(t){console.error(`[Userscript] Gagal memproses XPath: ${e}`,t)}})}function n(){document.querySelectorAll(".numprize img").forEach(e=>{"true"!==e.dataset.blurProcessed&&(e.classList.add("blur-digit"),e.addEventListener("click",function(e){this.classList.remove("blur-digit"),this.dataset.unblurred="true"}),e.dataset.blurProcessed="true")})}function r(){t(),n()}e.textContent="\n        .blur-digit {\n            filter: blur(5px);\n            transition: filter 0.2s ease;\n            cursor: pointer;\n        }\n    ",document.head.appendChild(e),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",r):r();new MutationObserver(e=>{let r=!1;e.forEach(e=>{e.addedNodes.length&&e.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.matches&&e.matches(".numprize img")&&(r=!0),e.querySelectorAll&&e.querySelectorAll(".numprize img").length>0&&(r=!0))})}),r&&(console.log("[Userscript] Mendeteksi angka baru muncul (Live Draw) -> memberikan blur."),n(),t())}).observe(document.body,{childList:!0,subtree:!0})}();
