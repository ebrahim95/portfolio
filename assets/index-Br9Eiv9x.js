import{_ as o}from"./index-CHGfPJ1Y.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-DHURNGf7.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-DHURNGf7.js","assets/index-CHGfPJ1Y.js","assets/index-CAB09hAP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}