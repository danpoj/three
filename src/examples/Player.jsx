import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { useMemo, useState } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'

THREE.ColorManagement.enabled = true

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const floor1Material = new THREE.MeshStandardMaterial({ color: 'limegreen' })
const floor2Material = new THREE.MeshStandardMaterial({ color: 'greenyellow' })
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'orangered' })
const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })

export default function Player() {
  return (
    <Canvas
      shadows
      camera={{
        position: [12, 14, 13],
      }}
    >
      <Physics>
        <Debug />
        <Lights />
        <Level />
      </Physics>

      <OrbitControls makeDefault />
    </Canvas>
  )
}

const Lights = () => {
  return (
    <>
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={0.5} />
    </>
  )
}

const Level = ({ count = 5, types = [BlockSpinner, BlockAxe, BlockLimbo] }) => {
  const blocks = useMemo(() => {
    const blocks = []

    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * types.length)
      blocks.push(types[index])
    }

    return blocks
  }, [count, types])

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((Block, i) => (
        <Block position={[0, 0, -(i + 1) * 4]} key={i} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
    </>
  )
}

const BlockStart = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  )
}

const BlockEnd = ({ position = [0, 0, 0] }) => {
  const { scene, nodes } = useGLTF('./models/fox.glb')

  scene.children.forEach((mesh) => {
    mesh.castShadow = true
  })

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody type='fixed' colliders='cuboid' restitution={0.2} friction={0}>
        <primitive object={scene} scale={0.6} position={[0, 0.6, -1]} />
      </RigidBody>
    </group>
  )
}

const BlockSpinner = ({ position = [0, 0, 0] }) => {
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  )
  const obstacle = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    const rotation = new THREE.Quaternion()
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
    obstacle.current.setNextKinematicRotation(rotation)
  })

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}

const BlockLimbo = ({ position = [0, 0, 0] }) => {
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)
  const obstacle = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    const y = Math.sin(time + timeOffset) + 1.15

    const nextPosition = {
      x: position[0],
      y: position[1] + y,
      z: position[2],
    }

    obstacle.current.setNextKinematicTranslation(nextPosition)
  })

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}

const BlockAxe = ({ position = [0, 0, 0] }) => {
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)
  const obstacle = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    const x = Math.sin(time + timeOffset) * 1.25

    const nextPosition = {
      x: position[0] + x,
      y: position[1] + 0.75,
      z: position[2],
    }

    obstacle.current.setNextKinematicTranslation(nextPosition)
  })

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}

const Bounds = ({ length = 1 }) => {
  return <></>
}
