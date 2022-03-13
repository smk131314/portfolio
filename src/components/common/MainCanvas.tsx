import { Canvas } from '@react-three/fiber'

type MainCanvasProps = {
  children: any
  cameraSetting?: any
}

const MainCanvas = (props: MainCanvasProps) => {
  const {
    children,
    cameraSetting = { position: [0, -10, 80], rotation: [0, 0, 0], fov: 50 },
  } = props
  return (
    <Canvas camera={cameraSetting} dpr={[1, 2]}>
      {children}
    </Canvas>
  )
}

export default MainCanvas
