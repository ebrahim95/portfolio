import{_ as n}from"./index-BiYJ8jH0.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DhC-vOlJ.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BrvVrexA.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DhC-vOlJ.js","assets/PolygonDrawerBase-D010_SHm.js","assets/index-BiYJ8jH0.js","assets/index-B-1N1OFl.css","assets/TriangleDrawer-BrvVrexA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
