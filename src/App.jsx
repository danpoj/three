import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ShoePicker from './examples/ShoePicker'
import shoePickerImage from '/landing-images/shoe-picker.png'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shoe-picker' element={<ShoePicker />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className='p-2'>
      <h1 className=' font-black text-center mb-20 bg-landing text-transparent bg-clip-text text-responsive-sm'>
        @danpoj / R3F
      </h1>

      <h2 className='text-5xl font-black text-slate-700 mb-6 bg-gradient-to-tr from-black to-transparent text-transparent bg-clip-text tracking-tight'>
        examples
      </h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        <div className='rounded-xl overflow-hidden'>
          <img src={shoePickerImage} className='' />
          <div className='p-2'>
            <Link to='/shoe-picker' className='font-mono font-bold text-lg'>
              Shoe Picker
            </Link>
            <div className='text-xs'>
              <pre>capture</pre>
              <pre>color picker</pre>
              <pre>valtio</pre>
              <pre>leva</pre>
            </div>
          </div>
        </div>
        <div>
          <img src={shoePickerImage} className='' />
          <Link
            to='/shoe-picker'
            className='font-mono font-bold text-lg tracking-tight'
          >
            Shoe Picker
          </Link>
          <div className='text-xs tracking-tighter'>
            <pre>capture</pre>
            <pre>color picker</pre>
            <pre>valtio</pre>
            <pre>leva</pre>
          </div>
        </div>
        <div>
          <img src={shoePickerImage} className='' />
          <Link to='/shoe-picker' className='font-mono font-bold text-lg'>
            Shoe Picker
          </Link>
          <div className='text-xs'>
            <pre>capture</pre>
            <pre>color picker</pre>
            <pre>valtio</pre>
            <pre>leva</pre>
          </div>
        </div>
        <div>
          <img src={shoePickerImage} className='' />
          <Link to='/shoe-picker' className='font-mono font-bold text-lg'>
            Shoe Picker
          </Link>
          <div className='text-xs'>
            <pre>capture</pre>
            <pre>color picker</pre>
            <pre>valtio</pre>
            <pre>leva</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
