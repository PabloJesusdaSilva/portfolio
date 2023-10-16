import { ChevronRightIcon } from 'lucide-react';

export default function BriefDescription () {
   return (
      <main className="flex ml-64 mb-48 w-full h-full text-zinc-300 flex-1">
         <div className="mt-16 ml-14 md:mt-60 ml-32">
            <h1 className="text-8xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-violet-600 to-orange-400 hover:bg-gradient-to-tl">
               Pablo Silva
            </h1>

            <div className="mt-4 tracking-wider space-y-1">
               <h3 className="text-zinc-300 text-xl font-bold">Front End Developer</h3>
               <p className="text-zinc-500 text-lg font-semibold">NextJs | ReactJs | Typescript | SASS | Tailwind</p>
            </div>

            <button className="flex h-6 items-center mt-20 -ml-2 px-3 py-5 rounded-xl font-medium text-lg tracking-wider transition-all duration-300 hover:bg-zinc-800">
               Clique para iniciar

               <ChevronRightIcon className='ml-2' />
            </button>
         </div>
      </main>
   )
}