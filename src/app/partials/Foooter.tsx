import Link from 'next/link';

export default function Footer () {
   return (
      <footer className='absolute flex w-full justify-center items-center bottom-0 h-8'>
         <ul className='flex space-x-5 text-zinc-500 tracking-wide text-base font-medium'>
            <li>
               <Link href="https://linkedin.com/in/pablojesusdasilva">
                  Linkedin
               </Link>
            </li>
            <li>
               <Link href="https://linkedin.com/in/pablojesusdasilva">
                  GitHub
               </Link>
            </li>
         </ul>
      </footer>
   )
}