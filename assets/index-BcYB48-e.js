import{_ as o}from"./index-DaxqL-0B.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DunX07Zj.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DunX07Zj.js","assets/index-DaxqL-0B.js","assets/index-B-1N1OFl.css","assets/OptionsColor-CLYiof7p.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
