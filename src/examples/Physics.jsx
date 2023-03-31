import { Base, Geometry } from '@react-three/csg'
import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
  CuboidCollider,
  InstancedRigidBodies,
  Physics,
  RigidBody,
} from '@react-three/rapier'
import { useMemo } from 'react'
import { MathUtils } from 'three'

export default function PhysicsCanvas() {
  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      camera={{
        position: [-6, 37, -62],
        near: 10,
        far: 100,
        fov: 10,
      }}
    >
      <color attach='background' args={['#f0f0f0']} />
      <ambientLight intensity={0.5} />

      <directionalLight position={[-10, 10, 5]} castShadow>
        <orthographicCamera
          attach='shadow-camera'
          args={[-100, 100, -20, 20]}
        />
      </directionalLight>

      <Environment resolution={32}>
        <Lightformer position={[10, 10, 10]} scale={10} intensity={4} />
        <Lightformer
          position={[10, 0, -10]}
          scale={10}
          color='blue'
          intensity={6}
        />
        <Lightformer
          position={[-10, 0, 10]}
          scale={10}
          color='salmon'
          intensity={6}
        />
        <Lightformer position={[-10, -10, -10]} scale={10} intensity={4} />
      </Environment>

      <Physics gravity={[0, -14, 0]}>
        <Scene position={[1, 0, -1.5]} />
        <Suzi />
        <RigidBody position={[0, -1, 0]} type='fixed' colliders='false'>
          <CuboidCollider restitution={0.1} args={[1000, 1, 1000]} />
        </RigidBody>
      </Physics>

      <ContactShadows width={4} height={4} blur={1} opacity={0.5} scale={6} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}

function Scene(props) {
  const { nodes, materials } = useGLTF(
    '/models/blender-threejs-journey-20k-transformed.glb'
  )

  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boxBase.geometry}
          material={materials.boxBase}
        />
        <mesh
          receiveShadow
          geometry={nodes.boxBack.geometry}
          material={materials.inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials.boxBase}
        />
      </RigidBody>
    </group>
  )
}

function Suzi({ count = 20, rand = MathUtils.randFloatSpread }) {
  const { nodes } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-low-poly/model.gltf'
  )

  const instances = useMemo(() => {
    const instances = []

    for (let i = 0; i < count; i++) {
      instances.push({
        key: 'instance_' + Math.random(),
        position: [rand(2) + 2, 14 + i, rand(2) - 3],
        rotation: [Math.random(), Math.random(), Math.random()],
      })
    }

    return instances
  }, [])

  return (
    <InstancedRigidBodies instances={instances} colliders='hull'>
      <instancedMesh
        receiveShadow
        castShadow
        args={[undefined, undefined, count]}
      >
        <Geometry useGroups>
          <Base castShadow geometry={nodes.Suzanne.geometry}>
            <meshStandardMaterial
              color={`hsl(${Math.random() * 360},100%,65%)`}
            />
          </Base>
        </Geometry>
      </instancedMesh>
    </InstancedRigidBodies>
  )
}
