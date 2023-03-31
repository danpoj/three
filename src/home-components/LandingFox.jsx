import {
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  Sky,
  Sparkles,
  Stars,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Fox from '../models/Fox'

export default function LandingFox() {
  return (
    <div className='flex justify-end'>
      <div className='w-[80%] aspect-video'>
        <Canvas
          camera={{
            position: [1.439, 0.859, 4.44],
          }}
        >
          <Environment preset='lobby'>
            <Lightformer
              intensity={20}
              position={[0, 0, 3]}
              rotation={[0, Math.PI, 0]}
            />
          </Environment>

          <Fox />

          <Box />

          <Sparkles
            size={10}
            count={60}
            scale={10}
            position-x={1.6}
            speed={0.5}
            opacity={0.8}
            color={`hsl(${Math.random() * 360},100%,90%)`}
          />
        </Canvas>
      </div>
    </div>
  )
}

function Box() {
  const box = useRef()

  useFrame((state, delta) => {
    box.current.rotation.y += delta / 2
  })

  return (
    <mesh ref={box} position={[6, 6, -14]} scale={3}>
      <boxGeometry />
      <meshStandardMaterial color={`hsl(${Math.random() * 360},100%,80%)`} />
    </mesh>
  )
}
