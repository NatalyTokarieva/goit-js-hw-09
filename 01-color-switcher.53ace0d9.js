const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;function a(){e.disabled?(e.disabled=!1,t.disabled=!0):(e.disabled=!0,t.disabled=!1)}e.addEventListener("click",(e=>{a(),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(e=>{clearInterval(d),a()}));
//# sourceMappingURL=01-color-switcher.53ace0d9.js.map
