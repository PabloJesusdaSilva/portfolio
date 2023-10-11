import { Command } from 'lucide-react';

export default function Header () {
   return (
      <header className="flex justify-between w-full py-4 px-8 text-zinc-300 backdrop-blur-lg">
         <div className='font-bold text-2xl'>P</div>

         <nav>
            <ul className='flex space-x-6'>
               <li>
                  <span className='text-xl font-semibold'>
                     About
                  </span> 
               </li>
               <li>
                  <span className='text-xl font-semibold'>
                     Projects
                  </span> 
               </li>
            </ul>
         </nav>

         <div>
            <Command className=''/>
         </div>
      </header>
   )
}