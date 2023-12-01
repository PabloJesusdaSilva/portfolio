import Link from 'next/link';

export default function Footer () {
   return (
      <footer className='mt-8 p-4 backdrop-blur-lg w-full flex justify-center'>
         <nav>
            <ul className='flex space-x-16 text-zinc-400 font-medium tracking-widest'>
               <li className='transition-all duration-300 hover:text-zinc-200'>
                  <Link
                     href='https://github.com/PabloJesusdaSilva'
                  >
                     Github
                  </Link>
               </li>
               <li className='transition-all duration-300 hover:text-zinc-200'>
                  <Link
                     href='https://www.linkedin.com/in/pablojesusdasilva/'
                  >
                     Linkedin
                  </Link>
               </li>
               <li className='transition-all duration-300 hover:text-zinc-200'>
                  <Link
                     href='https://vercel.com/pablojesusdasilva'
                  >
                     Vercel
                  </Link>
               </li>
            </ul>
         </nav>
      </footer>
   )
}