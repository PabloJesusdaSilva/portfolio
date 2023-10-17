"use client"

import { Command } from "lucide-react";
import Link from "next/link";

export default function Header () {
   return (
      <header className="fixed z-20 flex justify-between w-full py-5 px-8 text-zinc-200 backdrop-blur-xl">
         <div className="font-bold text-2xl transition-all duration-300 hover:text-zinc-300">
            <Link href="/">
               P
            </Link>
         </div>

         <nav className="hidden md:block">
            <ul className="flex space-x-6">
               <li>
                  <Link href="/about-me"className="text-xl font-semibold transition-all duration-300 hover:text-zinc-300">
                     About
                  </Link> 
               </li>
               <li>
                  <Link href="/projects" className="text-xl font-semibold transition-all duration-300 hover:text-zinc-300">
                     Projects
                  </Link> 
               </li>
            </ul>
         </nav>

         <div>
            <Command className="transition-all duration-500 hover:rotate-180"
            />
         </div>
      </header>
   )
}