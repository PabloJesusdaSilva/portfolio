
import Link from 'next/link'

import {
   HomeIcon,
   UserCircleIcon,
   BracesIcon
} from 'lucide-react'

const ModalMenu = () => {
   return (
      <article className='w-full h-full absolute'>
         <nav className='w-full h-fit pt-6 pb-12 px-8 bg-zinc-950/95'>
            <h4 className='mb-10 pb-4 border-b-2 border-zinc-800'>
               Ir para
            </h4>
            <ul className='space-y-12 tracking-widest font-semibold text-xl'>
               <li className='flex'>
                  <HomeIcon />
                  <span className='pl-4'>
                     Home
                  </span>
               </li>
               <li className='flex'>
                  <HomeIcon />
                  <span className='pl-4'>
                     About me
                  </span>
               </li>
               <li className='flex'>
                  <HomeIcon />
                  <span className='pl-4'>
                     Contact
                  </span>
               </li>
               <li className='flex'>
                  <HomeIcon />
                  <span className='pl-4'>
                     Project
                  </span>
               </li>
            </ul>
         </nav>
      </article>
   )
}

export default ModalMenu