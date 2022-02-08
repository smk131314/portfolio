import React, { Suspense, useRef, useEffect } from 'react'
import MainCanvas from '@components/common/MainCanvas'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import {
  Bounds,
  useBounds,
  OrbitControls,
  ContactShadows,
  useGLTF,
  PresentationControls,
} from '@react-three/drei'

useGLTF.preload('/main_icons.gltf')

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

const Rig = (props: any) => {
  const { children } = props
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.05,
      )
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        (state.mouse.y * Math.PI) / 20,
        0.05,
      )
    }
  })

  return <group ref={ref}>{children}</group>
}

const ModelGroup = () => {
  const { nodes } = useGLTF('/main_icons.gltf') as any

  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(index * 1000 + t) / 50
        child.rotation.x += (Math.sin(index * 1000 + t) * Math.PI) / 2000
        child.rotation.y += (Math.cos(index * 1000 + t) * Math.PI) / 3000
        child.rotation.z += (Math.sin(index * 1000 + t) * Math.PI) / 4000
      })
    }
  })

  const { camera } = useThree()
  useEffect(() => {
    camera.zoom = 1.5
    camera.updateProjectionMatrix()
  }, [])

  return (
    <group ref={groupRef}>
      <SelectToZoom>
        <mesh
          geometry={nodes.Travel.geometry}
          material-roughness={1}
          dispose={null}
          position={nodes.Travel.position}
          rotation={nodes.Travel.rotation}
          scale={2.1}
        >
          <meshPhongMaterial color="#4654C8" />
        </mesh>
        <mesh
          geometry={nodes.MapPin.geometry}
          material-roughness={1}
          dispose={null}
          position={nodes.MapPin.position}
          rotation={nodes.MapPin.rotation}
          scale={2.1}
        >
          <meshPhongMaterial color="#DF769C" />
        </mesh>
        <mesh
          geometry={nodes.VideoCamera.geometry}
          material-roughness={1}
          dispose={null}
          position={nodes.VideoCamera.position}
          rotation={nodes.VideoCamera.rotation}
          scale={2.1}
        >
          <meshPhongMaterial color="#43F558" />
        </mesh>
      </SelectToZoom>
      <mesh
        geometry={nodes.Star.geometry}
        material-roughness={1}
        dispose={null}
        position={nodes.Star.position}
        rotation={nodes.Star.rotation}
        scale={2.1}
      >
        <meshPhongMaterial color="white" />
      </mesh>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material-roughness={1}
        dispose={null}
        position={nodes.Cylinder.position}
        rotation={nodes.Cylinder.rotation}
        scale={2.1}
      >
        <meshPhongMaterial color="white" />
      </mesh>
      <mesh
        geometry={nodes.Helix.geometry}
        material-roughness={1}
        dispose={null}
        position={nodes.Helix.position}
        rotation={nodes.Helix.rotation}
        scale={2.1}
      >
        <meshPhongMaterial color="white" />
      </mesh>
      <mesh
        geometry={nodes.Sphere.geometry}
        material-roughness={1}
        dispose={null}
        position={nodes.Sphere.position}
        rotation={nodes.Sphere.rotation}
        scale={2.1}
      >
        <meshPhongMaterial color="white" />
      </mesh>
    </group>
  )
}

const MainIconsAnimation = () => {
  return (
    <MainCanvas>
      <directionalLight
        castShadow
        position={[850000, 1300000, 1000000]}
        rotation={[-52.43, 27.4, -19.49]}
        intensity={1}
      />
      <hemisphereLight
        color="white"
        groundColor="#4F4F4F"
        position={[-5, 10, 20]}
        intensity={0.5}
      />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap
        zoom={1}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Suspense fallback={null}>
          <Bounds fit clip margin={1.2}>
            <Rig>
              <ModelGroup />
            </Rig>
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
      </PresentationControls>
    </MainCanvas>
  )
}

export default MainIconsAnimation
