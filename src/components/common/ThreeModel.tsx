import { useGLTF } from '@react-three/drei'

useGLTF.preload('/main_icons.gltf')

type ThreeModelProps = {
  name: string
  color: string
}

const ThreeModel = (props: ThreeModelProps) => {
  const { name, color = 'white' } = props
  const { nodes } = useGLTF('/main_icons.gltf') as any

  const { geometry, position, rotation } = nodes[name]

  return (
    <mesh
      geometry={geometry}
      material-roughness={1}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={2.1}
    >
      <meshPhongMaterial color={color} />
    </mesh>
  )
}

export default ThreeModel
