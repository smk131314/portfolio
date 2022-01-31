import React, { Suspense } from 'react'
import MainCanvas from '@components/common/MainCanvas'
import ThreeModel from '@components/common/ThreeModel'
import {
  ContactShadows,
  useGLTF,
  PresentationControls,
} from '@react-three/drei'

type SingleModelAnimationProps = {
  name: string
  color: string
}

const SingleModelAnimation = (props: SingleModelAnimationProps) => {
  const { name, color } = props

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
          <ThreeModel name={name} color={color} />
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

export default SingleModelAnimation
