"use client"

import { useState } from "react";
import { Command } from "lucide-react";
import Link from "next/link";

import ModalMenu from "../components/MenuModal";

export default function Header () {
   const [openMenuModal, setOpenMenuModal] = useState(true)

   const handleOpenMenuModal = () => {
      setOpenMenuModal(!openMenuModal)
   }

   return (
      <>
         <header className="fixed z-20 flex justify-between w-full py-4 px-8 text-zinc-200 backdrop-blur-xl">
            <div className="p-2 font-bold text-2xl transition-all duration-300 cursor-pointer hover:text-zinc-300">
               <Link href="/">
                  P
               </Link>
            </div>

            <nav className="hidden md:block">
               <ul className="flex space-x-6">
                  <li className="p-2 cursor-pointer">
                     <Link 
                        href="/about-me"
                        className="text-xl font-semibold transition-all duration-300 hover:text-zinc-300"
                     >
                        About
                     </Link> 
                  </li>
                  <li className="p-2 cursor-pointer">
                     <Link 
                        href="/projects" 
                        className="text-xl font-semibold transition-all duration-300 hover:text-zinc-300"
                     >
                        Projects
                     </Link> 
                  </li>
               </ul>
            </nav>

            <div className="block p-2 cursor-pointer md:hidden">
               <Command 
                  className="transition-all duration-500 hover:rotate-180"
                  onClick={handleOpenMenuModal}
                  />
            </div>

            <div className="absolute z-40 left-20 top-36">
               {
                  openMenuModal 
                  ? <ModalMenu />
                  : ""
               }
            </div>
         </header>
      </>
   )
}