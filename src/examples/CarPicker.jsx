import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Background from '../components/Background'
import Light from '../components/Light'
import Picker from '../components/Picker'
import Car from '../models/Car'
import Shoe from '../models/Shoe'

const cameraSetting = {
  fov: 45,
  position: [-4, 2, 4],
}

export default function CarPicker() {
  return (
    <>
      <Canvas shadows camera={cameraSetting}>
        <Car />

        <Background defaultBackground='apartment' />
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <ContactShadows position-y={-1} opacity={1} blur={2} scale={4} />
        <Light />
      </Canvas>
    </>
  )
}
