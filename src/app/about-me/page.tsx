import Image from 'next/image';

import javascriptIcon from '@/app/assets/javascript.svg';
import typescriptIcon from '@/app/assets/typescript.svg';
import reactjsIcon from '@/app/assets/react.svg';
import nextjsIcon from '@/app/assets/nextjs.svg';
import nodejsIcon from '@/app/assets/nodejs.svg';
import mysqlIcon from '@/app/assets/mysql.svg';
import sassIcon from '@/app/assets/sass.svg';
import styledComponentsIcon from '@/app/assets/styledcomponents.svg';
import tailwindCSSIcon from '@/app/assets/tailwindcss.svg';
import gitIcon from '@/app/assets/git.svg';

import AboutImage from '@/app/assets/eu.jpg'

const AboutMePage = () => {
   return (
      <main className='flex flex-col items-center w-full h-auto mt-32 text-zinc-400'>
         <div className='w-5/6 lg:w-4/6 pb-2 mb-3'>
            <h2 className='text-4xl ml-4 md:text-5xl lg:-ml-10 font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400'>
               Coffe. Code. Repeat.
            </h2>
         </div>

         <div className='
            flex flex-col items-center space-x-0 space-y-8 
            lg:items-start lg:flex-row justify-center w-5/6 lg:space-x-16 lg:space-y-0
         '>
            <Image 
               src={AboutImage} 
               alt='imagem de perfil' 
               width={200} 
               height={200} 
               className='
                  w-4/5 h-80  
                  lg:w-80 lg:h-96 rounded-xl shadow-lg object-cover
            '/>

            <p className='w-10/12 lg:w-6/12 tracking-wider leading-9 text-lg text-zinc-300'>
               Olá! Meu nome é Pablo, eu tenho 19 anos. Sou um desenvolvedor Front End e usando tecnologias em alta como NextJs, ReactJs, Node, Tailwind entre muitas outras. Sempre fui uma pessoa curiosa e criativa, e sempre gostei de aprender coisas novas. Quando era criança, eu adorava desmontar aparelhos eletrônicos para ver como funcionavam. Depois, comecei a aprender a programar, e foi aí que descobri minha paixão pela tecnologia. Hoje, eu estudo análise e desenvolvimento de sistemas na UAM - Universidade Anhembi Morumbi. Estou sempre procurando novas maneiras de usar a tecnologia para criar coisas incríveis. Além disso, sou músico e toco violoncelo.
            </p>
         </div>

         <div className='
            w-4/6 -ml-0 
            lg:w-4/6 mb-28 space-y-11 tracking-wider
         '>
            <h3 className='p-2 -ml-3 mt-40 -mb-3 text-5xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
               Training
            </h3>

            <article className='space-y-2'>
               <h4 className='text-xl text-zinc-200 font-medium'>
                  Análise e Desenvolvimento de Sistemas
               </h4>
               <h5 className='text-lg pb-3 text-zinc-400 font-medium'>
                  <span className='text-zinc-300 mr-1'>
                     UAM - Universidade Anhembi Morumbi 
                  </span>
                   - SP
               </h5>
               <span>
                  02 - 2023 / 07 - 2025
               </span>
            </article>

            <article className='space-y-2'>
               <h4 className='text-xl text-zinc-200 font-medium'>
                  Ford &lt;Enter&gt;
               </h4>
               <h5 className='text-lg pb-3 text-zinc-400 font-medium'>
                  <span className='text-zinc-300 mr-1'>
                     Ford / Senai 
                  </span>
                   - SP
               </h5>
               <span>
                  02 - 2023 / 06 - 2023
               </span>
            </article>

            <article className='space-y-2'>
               <h4 className='text-xl text-zinc-200 font-medium'>
                  Javascript FullStack
               </h4>
               <h5 className='text-lg pb-3 text-zinc-400 font-medium'>
                  <span className='text-zinc-300 mr-1'>
                     Hotmart
                  </span>
                   - EAD
               </h5>
               <span>
                  08 - 2023 / 02 - 2024
               </span>
            </article>
            
            <article className='space-y-2'>
               <h4 className='text-xl text-zinc-200 font-medium'>
                  Web Moderno
               </h4>
               <h5 className='text-lg pb-3 text-zinc-400 font-medium'>
                  <span className='text-zinc-300 mr-1'>
                     Cod3r
                  </span>
                   - EAD
               </h5>
               <span>
                  12 - 2022 / 2 - 2024
               </span>
            </article>
         </div>

         <div className='w-5/6 ml-12 lg:ml-28'>
            <h3 className='p-2 ml-4 mb-7 text-5xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
               Tecnologias
            </h3>

            <article className='flex flex-wrap w-full'>
               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo Javascript'
                     src={javascriptIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo Typescript'
                     src={typescriptIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo ReactJs'
                     src={reactjsIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo NextJs'
                     src={nextjsIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo NodeJs'
                     src={nodejsIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo MySQL'
                     src={mysqlIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo SASS'
                     src={sassIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo Styled Components'
                     src={styledComponentsIcon}
                     width={200}
                     height={200} 
                  />
               </div>

               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo TailwindCSS'
                     src={tailwindCSSIcon}
                     width={200}
                     height={200} 
                  />
               </div>
               
               <div className='w-36 h-36 m-5 rounded-xl p-8 transition-all duration-300 bg-zinc-700/75 hover:scale-105'>
                  <Image
                     alt='Logo GIT'
                     src={gitIcon}
                     width={200}
                     height={200} 
                  />
               </div>
            </article>
         </div>
      </main>
   )
}

export default AboutMePage