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
    <div className='p-2 bg-[#fcfcfc]'>
      <h1 className=' font-black text-center mb-12 bg-landing text-transparent bg-clip-text text-responsive-sm'>
        @danpoj / R3F
      </h1>

      <h2 className='text-5xl font-black text-slate-700 mb-6 bg-gradient-to-tr from-black to-transparent text-transparent bg-clip-text tracking-tight'>
        examples
      </h2>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {Array.from({ length: 6 }, () => 0).map((_, i) => (
          <Link
            to='/shoe-picker'
            key={i}
            className='rounded-xl overflow-hidden bg-white shadow group hover:bg-gradient-to-r hover:from-cyan-200 hover:to-rose-200 transition-colors duration-300'
          >
            <div className='overflow-hidden'>
              <img
                src={shoePickerImage}
                className='group-hover:scale-105 transition duration-300'
              />
            </div>
            <div className='p-2'>
              <span className='font-mono font-bold text-lg'>Shoe Picker</span>
              <div className='text-xs text-slate-500 font-bold flex gap-2 my-2'>
                <pre className='bg-slate-100 p-1 rounded'>capture</pre>
                <pre className='bg-slate-100 p-1 rounded'>color picker</pre>
                <pre className='bg-slate-100 p-1 rounded'>valtio</pre>
                <pre className='bg-slate-100 p-1 rounded'>leva</pre>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
