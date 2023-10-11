export default function Footer () {
   return (
      <footer className="absolute bottom-0 p-4 backdrop-blur-lg w-full flex justify-center">
         <nav>
            <ul className="flex space-x-16 text-zinc-400 font-medium tracking-widest">
               <li>
                  <span>
                     Github
                  </span>
               </li>
               <li>
                  <span>
                     Linkedin
                  </span>
               </li>
               <li>
                  <span>
                     Vercel
                  </span>
               </li>
            </ul>
         </nav>
      </footer>
   )
}