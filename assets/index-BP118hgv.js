import{_ as o}from"./index-DaxqL-0B.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-6zYYBGkx.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-6zYYBGkx.js","assets/index-DaxqL-0B.js","assets/index-B-1N1OFl.css","assets/ValueWithRandom-DE7QmnfS.js","assets/AnimationOptions-DKP3ZTLn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
