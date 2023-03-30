import Examples from './Examples'

export default function Home() {
  return (
    <div className='p-2 bg-[#fcfcfc]'>
      <h1 className=' font-black text-center mb-12 bg-landing text-transparent bg-clip-text text-responsive-sm'>
        @danpoj / R3F
      </h1>

      <h2 className='text-5xl font-black text-slate-700 mb-6 bg-gradient-to-tr from-black to-transparent text-transparent bg-clip-text tracking-tight'>
        examples
      </h2>

      <Examples />
    </div>
  )
}
