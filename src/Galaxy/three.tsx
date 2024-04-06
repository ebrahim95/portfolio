import { Canvas } from "@react-three/fiber"
// import { OrbitControls } from "@react-three/drei"

export default function Galaxy() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry />
      </mesh>
      {/* <OrbitControls dampingFactor={0.05} minDistance={1} maxDistance={16384} screenSpacePanning={false} maxPolarAngle={(Math.PI / 2) - (Math.PI / 360)} /> */}
    </Canvas >
  )
}

