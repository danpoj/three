import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarPicker from './examples/CarPicker'
import ShoePicker from './examples/ShoePicker'

import Home from './home-components/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shoe-picker' element={<ShoePicker />} />
        <Route path='/car-picker' element={<CarPicker />} />
      </Routes>
    </BrowserRouter>
  )
}
