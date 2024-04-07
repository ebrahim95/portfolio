import{_ as i}from"./index-DaxqL-0B.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-fl60baT5.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-fl60baT5.js","assets/index-DaxqL-0B.js","assets/index-B-1N1OFl.css","assets/ValueWithRandom-DE7QmnfS.js","assets/AnimationOptions-DKP3ZTLn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
