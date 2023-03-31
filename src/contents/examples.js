import shoePickerImage from '/landing-images/shoe-picker.png'
import carImage from '/landing-images/car.png'
import pokerunImage from '/landing-images/pokerun.png'
import physicsImage from '/landing-images/physics.png'

export const examples = [
  {
    title: 'Shoe Picker',
    path: '/shoe-picker',
    image: shoePickerImage,
    tags: ['capture', 'color picker', 'valtio', 'leva'],
  },
  {
    title: 'Car',
    path: 'car-picker',
    image: carImage,
    tags: ['capture', '@drei/MeshTransmissionMaterial', 'leva', 'pointLight'],
  },
  {
    title: 'Game',
    path: 'https://poke-run.vercel.app/',
    image: pokerunImage,
    tags: [
      'zustand',
      'rapier',
      '@drei/Float',
      '@drei/Text',
      '@drei/KeyboardControls',
      '@drei/useKeyboardControls',
    ],
  },
  {
    title: 'Physics',
    path: '/physics',
    image: physicsImage,
    tags: [
      '@react-three/csg',
      'Lightformer',
      'three/MathUtils',
      'rapier',
      '@rapier/InstancedRigidBodies',
      'instancedMesh',
    ],
  },
]
