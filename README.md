## **[Demo](https://threejs-practice-five.vercel.app/)**

`Three.js` 학습용 저장소입니다.

</br>
</br>
</br>

## Canvas capture

[https://github.com/pmndrs/react-three-fiber/discussions/2054](https://github.com/pmndrs/react-three-fiber/discussions/2054)

</br>

#### 1. dataURL from `CanvasRef` + `preserveDrawingBuffer`

```js
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

export default function Scene() {
  const canvas = useRef()

  const capture = () => {
    const dataURL = canvas.current.toDataURL()

    const link = document.createElement('a')

    link.href = dataURL
    link.download = 'shoe.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return <Canvas ref={canvas} gl={{ preserveDrawingBuffer: true }} />
}
```

</br>

#### 2. dataURL from `useThree`

```js
import { useThree } from '@react-three/fiber'

const { gl, scene, camera } = useThree()
gl.render(scene, camera)
const dataURL = gl.domElement.toDataURL()
```

</br>
</br>

## References

[r3f showcase](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)
