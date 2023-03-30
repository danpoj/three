import { Environment } from '@react-three/drei'
import { useControls } from 'leva'

const backgroundLists = [
  'warehouse',
  'forest',
  'sunset',
  'dawn',
  'night',
  'apartment',
  'studio',
  'city',
  'park',
  'lobby',
]

export default function Background() {
  const { background } = useControls({
    background: {
      value: 'warehouse',
      options: backgroundLists,
    },
  })

  return <Environment preset={background} blur={1} background />
}
