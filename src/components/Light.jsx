import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useControls } from 'leva'

export default function Light() {
  const { light1, light2, light3 } = useControls('preview', {
    light1: {
      value: -1,
      min: -1,
      max: -0.7,
    },
    light2: {
      value: 0,
      min: 0,
      max: 1,
    },
    light3: {
      value: 0,
      min: 0,
      max: 1,
    },
  })

  return (
    <>
      <pointLight position={[0, 4, 0]} intensity={light1} />
      <pointLight position={[0, 2, 6]} intensity={light2} />
      <pointLight position={[-2, 4, -4]} intensity={light3} />
    </>
  )
}
