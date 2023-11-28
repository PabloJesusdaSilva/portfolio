
import Link from 'next/link'

import {
   HomeIcon,
   UserCircleIcon,
   BracesIcon
} from 'lucide-react'

const ModalMenu = () => {
   return (
      <article className='w-full h-full absolute'>
         <nav className='w-full h-fit pt-6 pb-16 px-10 bg-zinc-950/95'>
            <h4 className='mb-10 pb-4 border-b-2 border-zinc-800'>
               Ir para
            </h4>
            <ul className='space-y-12 tracking-widest font-semibold text-xl'>
               <li>
                  <Link
                     href='/'
                     className='flex'
                  >
                     <HomeIcon />
                     <span className='pl-4'>
                        Home
                     </span>
                  </Link>
               </li>
               <li>
                  <Link
                     href='/about-me'
                     className='flex'
                  >
                     <UserCircleIcon />
                     <span className='pl-4'>
                        Sobre mim
                     </span>
                  </Link>
               </li>
               <li>
                  <Link
                     href='/projects'
                     className='flex'
                  >
                     <BracesIcon />
                     <span className='pl-4'>
                        Projetos
                     </span>
                  </Link>
               </li>
            </ul>
         </nav>
      </article>
   )
}

export default ModalMenu