import{_ as e}from"./index-CHGfPJ1Y.js";import{O as s}from"./OptionsColor-Dx_eBxyn.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-CH__Z38E.js"),__vite__mapDeps([0,1,2,3,4,5]));return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-CH__Z38E.js","assets/CanvasUtils-A-2GCT-u.js","assets/index-CHGfPJ1Y.js","assets/index-CAB09hAP.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-Dx_eBxyn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
