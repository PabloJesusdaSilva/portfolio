import { ChevronRightIcon } from 'lucide-react';

export default function BriefDescription () {
   return (
      <main className='flex mb-28 w-full h-full text-zinc-300 lg:mb-16'>
         <div className='
            mt-32 ml-10 
            md:mt-40 md:ml-36
         '>
            <h1 className='text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-violet-600 to-orange-400 md:text-8xl'>
               Pablo Silva
            </h1>

            <div className='mt-4 tracking-widest space-y-1'>
               <h3 className='text-zinc-300 text-xl font-bold'>Front End Developer</h3>
               <p className='w-80 text-zinc-500 text-lg font-semibold'>Typescript | React.js | SASS | Node.js | SQL</p>
            </div>

            <button className='flex h-6 items-center mt-20 -ml-2 px-3 py-5 rounded-xl font-medium text-lg tracking-wider transition-all duration-300 hover:bg-zinc-800'>
               Clique para iniciar
               <ChevronRightIcon className='ml-2' />
            </button>
         </div>
      </main>
   )
}