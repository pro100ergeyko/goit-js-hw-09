const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(n){t.btnStop.disabled=!1,t.btnStart.disabled=!0,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(function(n){t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.9afc55f5.js.map