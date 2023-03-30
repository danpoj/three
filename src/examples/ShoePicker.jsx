import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Background from '../components/Background'
import Picker from '../components/Picker'
import Shoe from '../models/Shoe'

const cameraSetting = {
  fov: 45,
  position: [-2, 1, -4],
}

export default function ShoePicker() {
  return (
    <>
      <Canvas shadows camera={cameraSetting}>
        <Shoe />

        <Background defaultBackground='warehouse' />

        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <ContactShadows position-y={-1} opacity={0.25} blur={1.5} scale={10} />
      </Canvas>

      <Picker />
    </>
  )
}
