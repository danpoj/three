import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { state } from '../components/Picker'
import { useCapture } from '../../hooks/useCapture'

export default function Shoe(props) {
  const { nodes, materials } = useGLTF('/models/shoe-draco.glb')
  const shoe = useRef()
  const snap = useSnapshot(state)
  const [hovered, set] = useState(null)
  useCapture('shoe')

  useFrame((state) => {
    shoe.current.position.y = Math.sin(state.clock.elapsedTime / 3) / 10
    shoe.current.rotation.z = Math.cos(state.clock.elapsedTime / 3) / 10
  })

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`

    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`

    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`
      return () =>
        // (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        //   auto
        // )}'), auto`)
        (document.body.style.cursor = '')
    }
  }, [hovered])

  return (
    <group
      ref={shoe}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation()
        set(e.object.material.name)
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0
        set(null)
      }}
      onPointerMissed={() => {
        state.current = null
      }}
      onClick={(e) => {
        e.stopPropagation()
        state.current = e.object.material.name
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
        name='laces'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
        name='mesh'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
        name='caps'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
        name='inner'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
        name='sole'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
        name='stripes'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
        name='band'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
        name='patch'
      />
    </group>
  )
}

useGLTF.preload('/models/shoe-draco.glb')
