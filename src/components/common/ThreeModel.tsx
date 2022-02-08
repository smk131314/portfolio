import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

useGLTF.preload('/main_icons.gltf')

type ThreeModelProps = {
  name: string
  color?: string
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: number
}

const ThreeModel = (props: ThreeModelProps) => {
  const {
    name,
    color = 'white',
    position = new THREE.Vector3(0, 0, 0),
    rotation = new THREE.Euler(0, 0, 0),
    scale = 1,
  } = props

  const modelRef = useRef<THREE.Mesh>(null)
  const { nodes } = useGLTF('/main_icons.gltf') as any
  const { geometry } = nodes[name]

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (modelRef.current) {
      // modelRef.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
      // modelRef.current.rotation.y = Math.sin(t / 4) / 8
      // modelRef.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
      // modelRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        Math.cos(t / 2) / 8 + 0.25,
        0.1,
      )
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        Math.sin(t / 4) / 4,
        0.1,
      )
      modelRef.current.rotation.z = THREE.MathUtils.lerp(
        modelRef.current.rotation.z,
        Math.sin(t / 4) / 4,
        0.1,
      )
      modelRef.current.position.y = THREE.MathUtils.lerp(
        modelRef.current.position.y,
        (-2 + Math.sin(t)) / 3,
        0.1,
      )
    }
  })

  return (
    <mesh
      ref={modelRef}
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

export default ThreeModel
