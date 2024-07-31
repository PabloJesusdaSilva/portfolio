'use client'

import ToggleMenu from '../components/toogleMenu';

export default function Header () {
   return (
      <header className='relative flex justify-center items-center w-full h-10'>
         <nav className='relative z-20'>
            <ToggleMenu />
         </nav>
      </header>
   )
}