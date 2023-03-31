import Examples from './Examples'
import LandingFox from './LandingFox'
import githubLogo from '/github.svg'

export default function Home() {
  return (
    <div className='p-2 bg-[#fcfcfc]'>
      <h1 className='font-black mb-12 bg-landing text-transparent bg-clip-text text-responsive-sm absolute left-4 top-2 z-50 select-none'>
        @danpoj / R3F
      </h1>

      <LandingFox />

      <div className='flex gap-2 items-top mt-10 md:mt-0'>
        <h2 className='text-4xl md:text-5xl font-black text-slate-700 mb-6 bg-gradient-to-tr from-black to-transparent text-transparent bg-clip-text tracking-tight leading-10'>
          examples
        </h2>
        <a href='https://github.com/danpoj/THREEJS-PRACTICE'>
          <img
            className='aspect-square w-12 h-12 md:w-14 md:h-14 p-2 rounded bg-gradient-to-tr hover:from-cyan-100 hover:to-fuchsia-100  hover:shadow-xl cursor-pointer'
            src={githubLogo}
          />
        </a>
      </div>

      <Examples />
    </div>
  )
}
