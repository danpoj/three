import { useThree } from '@react-three/fiber'
import { button, useControls } from 'leva'

export function useCapture() {
  const { gl, scene, camera } = useThree()

  useControls({
    capture: button(() => {
      gl.render(scene, camera)
      const dataURL = gl.domElement.toDataURL()

      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'shoe.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }),
  })
}
