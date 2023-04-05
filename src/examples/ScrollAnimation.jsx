import { ScrollControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Characters } from '../models/CrossyRoadGodzilla'

export default function ScrollAnimation() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [-12, 3, -10.7],
          fov: 55,
        }}
      >
        <Perf position='top-left' />
        {/* <OrbitControls /> */}

        <ambientLight intensity={0.25} />
        <directionalLight
          castShadow
          intensity={1}
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

        <color attach='background' args={['#111111']} />

        <Stars count={800} radius={10} saturation={100} depth={10} />

        <mesh
          receiveShadow
          scale={[0.8, 4, 0.5]}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color='#343434' />
        </mesh>

        <ScrollControls pages={12} damping={0.1}>
          <Characters />
        </ScrollControls>
      </Canvas>
    </>
  )
}
