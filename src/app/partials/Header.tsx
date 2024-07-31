'use client'

import ToggleMenu from '../components/ToogleMenu';

export default function Header () {
   return (
      <header className='relative flex justify-center items-center w-full h-10'>
         <nav className='relative z-20'>
            <ToggleMenu />
         </nav>
      </header>
   )
}