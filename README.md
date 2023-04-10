## **[Demo](https://threejs-practice-five.vercel.app/)**

## `WebGL`

- `Javascript API`
- `WebGL`은 유저의 `GPU`를 사용한다. `GPU`는 `CPU`보다 느리지만, 수많은 프로세스를 병렬 처리한다.
- `3D Mesh`, `Model`들은 수많은 삼각형으로 이루어져있다. 각각의 삼각형들의 위치를 특정하고, 그 내부의 `Pixel`들을 그리는것을 `Shading`이라한다.

<img width="800" alt="cpu vs gpu" src="https://user-images.githubusercontent.com/88086373/230815256-0a491728-d5c3-45ec-afec-0d7c7a7337f5.png"/>

[image reference - cdw](https://www.cdw.com/content/cdw/en/articles/hardware/cpu-vs-gpu.html)

## `Three.js`

- `3D Javascript Library`
- 웹에서 `3D Experience` 를 구현 가능하다.
- 기존 `3D Javascript API`인 `WebGL`위에서 동작한다.

> **`WebGL`대신 `Three.js`를 쓰는 이유는?** </br></br> > `Native WebGL API`를 사용하면 상대적으로 `low-level`에서 개발자가 모든것을 컨트롤 가능하여 퍼포먼스적인 측면에 좋은 영향을 줄 수 있겠지만, 난이도가 높고 고려할것이 많아 `DX적 측면`에서 좋지 않다. 여타 편의 라이브러리들과 같은 개념이다! 후에는 `Three.js`보다 한층 더 사용하기 쉬운 `R3F(React-three-fiber)`를 다뤄볼 것이다. `R3F`는 `React` 환경에서 `Three.js`를 사용하기 위한 라이브러리이다.

## Getting Started

### 기본 구성요소

1. Scene - objects, lights, cameras등을 Scene에 추가하여 무엇을 렌더링 할지 정한다.
2. Objects - primitive geometries, models, particles, lights ...
3. Camera
4. Renderer - Scene을 `<canvas/>`에 렌더링 시켜준다.

```js
const canvas = document.querySelector('canvas')

// Scene
const scene = new THREE.Scene()

// Mesh(Geometry, Material)
// Geometry == Shape
// Material == Color, Texture...
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
  width: 1024,
  height: 620,
}

// Camera(fov, aspectRatio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer로 Scene을 canvas에 렌더링 한다.
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```

<img width="800" alt="basic scene" src="https://user-images.githubusercontent.com/88086373/230824492-77ac1652-82cc-4006-b604-ed278e55cd17.png">

</br></br></br></br></br></br></br></br></br></br></br></br></br></br>

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
