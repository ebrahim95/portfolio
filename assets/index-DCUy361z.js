import{_ as c}from"./index-DaxqL-0B.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DDi8H-4J.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-DDi8H-4J.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DaxqL-0B.js","assets/index-B-1N1OFl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
