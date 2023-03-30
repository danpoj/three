import { Environment } from '@react-three/drei'
import { useControls } from 'leva'

export default function Background() {
  const { background } = useControls({
    background: {
      value: 'warehouse',
      options: [
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
      ],
    },
  })

  return <Environment preset={background} blur={1} background />
}
