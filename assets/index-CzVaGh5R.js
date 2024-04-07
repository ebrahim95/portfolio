import{_ as i}from"./index-CHGfPJ1Y.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BkJGYtVE.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BkJGYtVE.js","assets/ValueWithRandom-CleijQG2.js","assets/index-CHGfPJ1Y.js","assets/index-CAB09hAP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
