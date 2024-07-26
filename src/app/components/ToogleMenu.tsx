import { CommandIcon } from 'lucide-react';

import { useNav } from '../context/MenuModal';

const ToggleMenu: React.FC = () => {
   const { isOpen, toggleNav } = useNav();

   return (
      <nav className='flex'>
          <button onClick={toggleNav} className='absolute top-1 text-zinc-300'>
            {isOpen ? <CommandIcon /> : <CommandIcon />}
         </button>
         {
            isOpen && (
               <div className='absolute top-10 text-zinc-200 text-lg'>
                  <ul className='flex flex-col items-center mt-2 space-x-2 tracking-wider font-medium'>
                     <li>
                        <span>
                           Home
                        </span>
                     </li>
                     <li>
                        <span>
                        About Me
                        </span>
                     </li>
                  </ul>
               </div>
            )
         }
      </nav>
   )
}

export default ToggleMenu;