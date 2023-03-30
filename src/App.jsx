import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { button, useControls } from 'leva'
import { useRef } from 'react'
import Background from './components/Background'
import Light from './components/Light'
import Picker from './components/Picker'
import Shoe from './components/Shoe'

export default function App() {
  const canvas = useRef()

  // const captureCanvas = useControls({
  //   capture: button(() => {
  //     const dataURL = canvas.current.toDataURL()

  //     const link = document.createElement('a')
  //     link.href = dataURL
  //     link.download = 'shoe.png'
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //   }),
  // })

  return (
    <>
      <Canvas
        ref={canvas}
        shadows
        camera={{
          fov: 45,
          position: [-2, 1, -4],
        }}
        // gl={{
        //   preserveDrawingBuffer: true,
        // }}
      >
        <Shoe />

        <Background />
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <ContactShadows position-y={-1} opacity={0.25} blur={1.5} scale={10} />
        <Light />
      </Canvas>

      <Picker />
    </>
  )
}
