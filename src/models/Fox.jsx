/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Prinavu (https://sketchfab.com/Prinavu)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/floating-fox-497de71996cf4f4d86e387028938aceb
title: Floating Fox
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Fox(props) {
  const fox = useRef()
  const { nodes, materials, animations } = useGLTF('/models/fox.glb')
  const { actions } = useAnimations(animations, fox)

  useEffect(() => {
    const action = actions.Animation

    action.play()
    action.setDuration(10)
  }, [])

  return (
    <group
      ref={fox}
      {...props}
      dispose={null}
      scale={0.7}
      position-y={0.3}
      position-x={1.8}
    >
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='Star001_1'>
                <mesh
                  name='Object_4'
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.007']}
                />
                <mesh
                  name='Object_5'
                  geometry={nodes.Object_5.geometry}
                  material={materials['Material.010']}
                />
                <mesh
                  name='Object_6'
                  geometry={nodes.Object_6.geometry}
                  material={materials['Material.011']}
                />
              </group>
              <group name='Star004_2'>
                <mesh
                  name='Object_8'
                  geometry={nodes.Object_8.geometry}
                  material={materials['Material.012']}
                />
                <mesh
                  name='Object_9'
                  geometry={nodes.Object_9.geometry}
                  material={materials['Material.013']}
                />
              </group>
              <group name='Cube_3'>
                <mesh
                  name='Object_11'
                  geometry={nodes.Object_11.geometry}
                  material={materials.Material}
                />
                <mesh
                  name='Object_12'
                  geometry={nodes.Object_12.geometry}
                  material={materials['Material.002']}
                />
                <mesh
                  name='Object_13'
                  geometry={nodes.Object_13.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  name='Object_14'
                  geometry={nodes.Object_14.geometry}
                  material={materials['Material.005']}
                />
                <mesh
                  name='Object_15'
                  geometry={nodes.Object_15.geometry}
                  material={materials['Material.003']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/fox.glb')
