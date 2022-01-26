import { Canvas } from '@react-three/fiber'

type MainCanvasProps = {
  children: any
}

const MainCanvas = (props: MainCanvasProps) => {
  const { children } = props
  return (
    <Canvas
      camera={{ position: [0, -10, 80], rotation: [0, 0, 0], fov: 50 }}
      dpr={[1, 2]}
    >
      {children}
    </Canvas>
  )
}

export default MainCanvas
