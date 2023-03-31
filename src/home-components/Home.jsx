import Examples from './Examples'
import githubLogo from '/github.svg'

export default function Home() {
  return (
    <div className='p-2 bg-[#fcfcfc]'>
      <h1 className='font-black mb-12 bg-landing text-transparent bg-clip-text text-responsive-sm'>
        @danpoj / R3F
      </h1>

      <div className='flex gap-2 items-top'>
        <h2 className='text-5xl font-black text-slate-700 mb-6 bg-gradient-to-tr from-black to-transparent text-transparent bg-clip-text tracking-tight'>
          examples
        </h2>
        <a href='https://github.com/danpoj/THREEJS-PRACTICE'>
          <img
            className='aspect-square w-14 h-14 p-2 rounded bg-gradient-to-tr hover:from-cyan-100 hover:to-fuchsia-100  hover:shadow-xl cursor-pointer'
            src={githubLogo}
          />
        </a>
      </div>

      <Examples />
    </div>
  )
}
