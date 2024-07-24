'use client'

import { useState } from 'react';
import { Command } from 'lucide-react';
import Link from 'next/link';

import ModalMenu from '../components/MenuModal';

export default function Header () {
   const [openMenuModal, setOpenMenuModal] = useState(false)

   const handleOpenMenuModal = () => {
      setOpenMenuModal(!openMenuModal)

      return;
   }

   return (
      <header className='absolute flex justify-center items-center w-full h-10'>
         <nav>
            <ul className='flex space-x-5 text-zinc-500 tracking-wide text-base font-medium'>
               <li>
                  <span>Menu</span>
               </li>
            </ul>
         </nav>
      </header>
   )
}