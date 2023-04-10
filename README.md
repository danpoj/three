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
// Material == Color, Texture... (how it looks)
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
// 사진 한장을 찍는다고 생각하면 됨!
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```

<img width="800" alt="basic scene" src="https://user-images.githubusercontent.com/88086373/230824492-77ac1652-82cc-4006-b604-ed278e55cd17.png">

## Transform objects

1. `position`: [Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)
2. `scale`: [Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)
3. `rotation`: [Euler](https://threejs.org/docs/index.html#api/en/math/Euler)
4. `quaternion`: [Quaternion](https://threejs.org/docs/index.html#api/en/math/Quaternion)

[Object3D](https://threejs.org/docs/index.html?q=object3d#api/en/core/Object3D)를 상속받았으면 위의 4가지 transform이 가능하다. `PerspectiveCamera`, `Mesh`, `Group` ...

## `Object3D`

### properties

`.lookAt ( vector : Vector3 ) : undefined`

`.lookAt ( x : Float, y : Float, z : Float ) : undefined`

```js
// example
const mesh = new THREE.Mesh(...)
const camera = new THREE.PerspectiveCamera(...)

camera.lookAt(mesh.position)
```

## `Vector3`

### properties

- `length()`: (0,0,0) ~ (x,y,z) 길이를 구한다. `Math.sqrt(x**2 + y**2 + z**2)`
- `distanceTo(v: Vector3)`: 두 위치 사이의 길이를 구한다.
- `normalize()`: [unit vector](https://en.wikipedia.org/wiki/Unit_vector)로 변환한다. 방향은 같고 길이가 1인 벡터가 된다.

## `rotation`

`rotation`, `quaternion`를 사용해 회전을 시킬 수 있으며, 둘 중 하나가 변하면 나머지 하나도 변하게 된다.

같은 회전 기능을 왜 두가지 방법으로 나누었을까? 나누어져있으면 다 이유가 있는거다!
`rotation`의 예시를 들어보자.

`rotation`은 기본적으로 `XYZ` 순서를 따르며 회전을 적용한다. 여기서 회전 순서가 중요한데, `object`에 박혀있는 회전 축을 기준으로 회전을 하기 때문이다. `x`축을 기준으로 45도 회전을 하게되면 `object`에 박혀있는 `y`축이 위쪽 방향이 아닌 사선 방향을 가리킬것이다. 바뀐 축의 방향을 기준으로 `y`축 회전을 하게되면 생각했던 방향과 다른 결과물이 보이게될 것이다.

```js
const mesh = new THREE.Mesh(...)

// 기본값은 'XYZ' 이고, 아래의 코드는 'YXZ' 순서로 회전을 적용한 결과이다.
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI / 4
mesh.rotation.x = Math.PI / 4
```

이처럼 `rotation`의 복잡성 때문에 `quaternion`이 등장하게 되었다.

## Animation

매 프레임마다 함수를 호출해주는 [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)을 사용해 애니메이션 효과를 적용할 수 있다.

```js
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

// 매 프레임마다 tick 함수 실행
const tick = () => {
  // 매 프레임마다 씬을 렌더링한다.
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()
```

> ⚠️ 컴퓨터마다 다른 framerate 문제

144fps의 컴퓨터는 1초마다 tick을 144번 실행하지만, 60fps의 컴퓨터는 60번 실행하게된다. `mesh.position.y += 1`처럼 하드 코딩하게되면 144fps의 컴퓨터에선 y의 위치가 144, 60fps의 컴퓨터에선 y의 위치가 60이 되는 문제가있다.

### solution 1

```js
let prev = Date.now()

const tick = () => {
  const cur = Date.now()
  const delta = curTime - prev
  prev = cur

  mesh.rotation.y += 0.01 * deltaTime

  // ...
}

tick()
```

### solution 2

```js
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  mesh.rotation.y = elapsedTime

  // ...
}

tick()
```

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
