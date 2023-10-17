import {
   HomeIcon,
   UserCircleIcon,
   BracesIcon
} from "lucide-react"

const ModalMenu = () => {
   return (
      <div className="w-72 h-60 backdrop-blur-xl rounded-xl bg-black/95 ">
         <nav className="flex flex-col items-start p-5 pl-8">
            <span className="font-medium text-xs uppercase mb-7">
               Ir para
            </span>
            <ul className="space-y-8 font-semibold text-lg">
               <li className="flex space-x-4">
                  <HomeIcon/>
                  <span className="text-lg text-zinc-300">
                     Home
                  </span>
               </li>
               <li className="flex space-x-4">
                  <UserCircleIcon/>
                  <span className="text-lg text-zinc-300">
                     About Me
                  </span>
               </li>
               <li className="flex space-x-4">
                  <BracesIcon/>
                  <span className="text-lg text-zinc-300">
                     Projects
                  </span>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default ModalMenu