import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  ScrollControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Characters, CrossyRoadGodzilla } from '../models/CrossyRoadGodzilla'

export default function ScrollAnimation() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [12, 14, -14],
          // fov: 55,
        }}
      >
        <Perf position='top-left' />
        {/* <OrbitControls /> */}

        <ambientLight intensity={0.25} />
        <directionalLight
          castShadow
          intensity={2}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach='shadow-camera'
            left={-20}
            right={20}
            top={20}
            bottom={-20}
          />
        </directionalLight>
        <Environment preset='apartment' background blur={1} />

        <mesh
          receiveShadow
          scale={2}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial />
        </mesh>

        <ScrollControls pages={10} damping={0}>
          <Characters />
        </ScrollControls>
      </Canvas>
    </>
  )
}
