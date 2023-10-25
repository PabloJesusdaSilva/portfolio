import Link from "next/link"

import {
   HomeIcon,
   UserCircleIcon,
   BracesIcon
} from "lucide-react"

const ModalMenu = () => {
   return (
      <div className="w-96 h-60 backdrop-blur-xl rounded-xl bg-black/95 ">
         <nav className="flex flex-col items-start p-5 pl-8">
            <span className="font-medium text-xs uppercase mb-7">
               Ir para
            </span>
            <ul className="space-y-8 font-semibold text-lg">
               <li className="flex space-x-4">
                  <HomeIcon/>
                  <Link 
                     href="/"
                     className="text-lg text-zinc-300"
                  >
                     Home
                  </Link>
               </li>
               <li className="flex space-x-4">
                  <UserCircleIcon/>
                  <Link 
                     href="/about-me"
                     className="text-lg text-zinc-300"
                  >
                     About Me
                  </Link>
               </li>
               <li className="flex space-x-4">
                  <BracesIcon/>
                  <Link 
                     href="/projects"
                     className="text-lg text-zinc-300"
                  >
                     Projects
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default ModalMenu