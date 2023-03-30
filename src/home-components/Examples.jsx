import { Link } from 'react-router-dom'
import { examples } from '../contents/examples'

export default function Examples() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {examples.map(({ image, title, path, tags }) => (
        <Link
          key={title}
          to={path}
          className='rounded-xl overflow-hidden bg-white shadow group hover:bg-gradient-to-r hover:from-cyan-200 hover:to-rose-200 transition-colors duration-300'
        >
          <div className='overflow-hidden h-80 sm:h-72 lg:h-60 bg-stone-100'>
            <img
              src={image}
              className='group-hover:scale-105 transition duration-300  w-full h-full object-cover'
            />
          </div>
          <div className='p-2'>
            <span className='font-mono font-bold text-lg'>{title}</span>
            <div className='text-xs text-slate-500 font-bold flex gap-2 my-2 flex-wrap'>
              {tags.map((tag) => (
                <pre key={tag} className='bg-slate-100 p-1 rounded'>
                  {tag}
                </pre>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
