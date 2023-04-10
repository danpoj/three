import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarPicker from './examples/CarPicker'
import PhysicsCanvas from './examples/Physics'
import Player from './examples/Player'
import ScrollAnimation from './examples/ScrollAnimation'
import ShoePicker from './examples/ShoePicker'

import Home from './home-components/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shoe-picker' element={<ShoePicker />} />
        <Route path='/car-picker' element={<CarPicker />} />
        <Route path='/physics' element={<PhysicsCanvas />} />
        <Route path='/scroll' element={<ScrollAnimation />} />
        <Route path='/player' element={<Player />} />
      </Routes>
    </BrowserRouter>
  )
}
