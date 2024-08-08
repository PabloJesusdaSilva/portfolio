import { 
   CommandIcon,
   HomeIcon,
   UserIcon
 } from 'lucide-react';

import { useNav } from '../context/MenuModal';
import Link from 'next/link';

const ToggleMenu: React.FC = () => {
   const { isOpen, toggleNav } = useNav();

   return (
      <nav className='flex w-full justify-center'>
          <button onClick={toggleNav} className='absolute top-1 text-zinc-300'>
            {isOpen ? <CommandIcon /> : <CommandIcon />}
         </button>
         {
            isOpen && (
               <div className='absolute top-12 flex w-80 h-28 backdrop-blur-lg text-zinc-200 text-lg z-20 rounded-xl border-zinc-950'>
                  <ul className='flex flex-col pl-8 justify-center mt-2 space-y-4 tracking-wider font-medium  min-w-full'>
                     <li className='flex w-max'>
                        <HomeIcon className='mr-2' />
                        <Link href="/">
                           Home
                        </Link>
                     </li>
                     <li className='flex w-max'>
                        <UserIcon className='mr-2' />
                        <Link href="/about-me">
                        About Me
                        </Link>
                     </li>
                  </ul>
               </div>
            )
         }
      </nav>
   )
}

export default ToggleMenu;