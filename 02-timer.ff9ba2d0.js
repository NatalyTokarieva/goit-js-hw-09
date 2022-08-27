function t(t){return String(t).padStart(2,"0")}({start(){const o=Date.now();setInterval((()=>{const e=Date.now()-o,{hours:n,mins:s,secs:r}=function(o){const e=t(Math.floor(o%864e5/36e5)),n=t(Math.floor(o%36e5/6e4)),s=t(Math.floor(o%6e4/1e3));return{hours:e,mins:n,secs:s}}(e);console.log(`${n}:${s}:${r}`)}),1e3)}}).start();
//# sourceMappingURL=02-timer.ff9ba2d0.js.map
