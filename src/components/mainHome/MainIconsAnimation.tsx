import React, { Suspense } from 'react'
import MainCanvas from '@components/common/MainCanvas'
import {
  Bounds,
  useBounds,
  OrbitControls,
  ContactShadows,
  useGLTF,
} from '@react-three/drei'

useGLTF.preload('/main_icons.gltf')

const Model = (props: any) => {
  const { name, color = 'white' } = props
  const { nodes } = useGLTF('/main_icons.gltf') as any

  const { geometry, position, rotation, scale } = nodes[name]

  return (
    <mesh
      geometry={geometry}
      material-roughness={1}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshPhongMaterial color={color} />
    </mesh>
  )
}

const SelectToZoom = (props: any) => {
  const { children } = props
  const api = useBounds()
  const handleClick = (e: any) => {
    e.stopPropagation()
    if (e.delta <= 2) {
      api.refresh(e.object).fit()
    }
  }
  return (
    <group
      onClick={handleClick}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  )
}

const MainIconsAnimation = () => {
  return (
    <MainCanvas>
      <spotLight
        position={[-100, -100, -100]}
        intensity={0.2}
        angle={0.3}
        penumbra={1}
      />
      <hemisphereLight
        color="white"
        groundColor="#ff0f00"
        position={[-7, 25, 13]}
        intensity={1}
      />
      <Suspense fallback={null}>
        <Bounds fit clip margin={1.2}>
          <SelectToZoom>
            <Model name="Travel" color="#4654C8" />
            <Model name="MapPin" color="#DF769C" />
            <Model name="VideoCamera" color="#43F558" />
            <Model name="Star" />
            <Model name="Cylinder" />
            <Model name="Helix" />
            <Model name="Sphere" />
          </SelectToZoom>
        </Bounds>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -35, 0]}
          opacity={0.2}
          width={200}
          height={200}
          blur={1}
          far={50}
        />
      </Suspense>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </MainCanvas>
  )
}

export default MainIconsAnimation
