"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProjectInformation {
   image: any
   title: string;
   deployPath: string;
   repositoriePath: string;
}

export default function ProjectCard ({
   image,
   title,
   repositoriePath,
   deployPath
}: ProjectInformation ) {
   return (
      <div className='group w-full pr-3 lg:w-3/4'>
         <Image
            alt=''
            src={image} 
            className='rounded-lg transition-all group-hover:-translate-y-2'
         />

         <article 
            className='
               flex flex-col items-start  
               md:flex-row justify-between md:items-center w-full
            '>
            <div className='opacity-0 transition-all duration-300 flex space-x-8 mt-6 group-hover:opacity-100'>
               <button className='px-5 py-2 font-semibold text-xl text-zinc-50 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 transition-all duration-300 delay-75 ease-in-out  group-hover:-translate-y-2'>
                  Deploy
               </button>

               <button className='px-5 py-2 font-semibold text-xl text-zinc-50 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 transition-all duration-300 delay-75 ease-in-out  group-hover:-translate-y-2'>
                  Code
               </button>
            </div>

            <div 
               className='
                  -order-1 mt-5 opacity-0 cpr-1 transition-all duration-300 delay-75 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100
                  md:order-1
               '>
               <h4 className='font-bold text-2xl text-zinc-200 tracking-wider'>
                  {title}
               </h4>
            </div>
         </article>
      </div>
   )
}