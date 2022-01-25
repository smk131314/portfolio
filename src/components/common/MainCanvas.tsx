import { Canvas, useLoader } from '@react-three/fiber'

import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, './Poimandres.gltf')
//   return (
//     <>
//       <primitive object={gltf.scene} scale={0.4} />
//     </>
//   )
// }

const MainCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* <Model /> */}
        <OrbitControls />
        {/* <Environment preset='sunset' background /> */}
      </Suspense>
    </Canvas>
  )
}

export default MainCanvas
