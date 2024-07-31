import Image from 'next/image';

import AboutImage from '@/app/assets/eu.jpg'

const stacks: string[] = ["HTML5", "CSS3", "Javascript", "Typescript", "React.js", "Next.js", "Java", "Spring Boot", "PostgresSQL", "MySQL", "MongoDB"];

const AboutMePage = () => {
   return (
      <section className='w-full space-y-28 mt-20'>
         <div className='flex justify-center'>
            <Image 
               alt='' 
               src={AboutImage} 
               width={300}
               height={300}
               className='rounded-2xl'
            />

            <article className='w-1/3 relative left-10 text-zinc-300 tracking-wider leading-8'>
               <span className='text-3xl font-semibold tracking-widest'>
                  Olá, eu sou o Pablo
               </span>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptates suscipit aspernatur vitae incidunt minus? Temporibus at aperiam quod accusantium delectus? Assumenda pariatur illo fugit quod soluta minus iusto deserunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis 
                  voluptates suscipit aspernatur vitae incidunt minus? Temporibus at 
                  aperiam quod accusantium delectus? Assumenda pariatur illo fugit quod 
                  soluta minus iusto deserunt!
               </p>
            </article>
         </div>

         <div className='flex flex-col items-center'>
            <div className='w-3/5'>
               <h1 className='text-zinc-200 text-4xl font-bold tracking-wider'>
                  Formação
               </h1>

               <div className='flex flex-col mt-5 text-zinc-400 tracking-wide'>
                  <span className='text-xl'>Engenharia de Software - Bacharelado</span>
                  <span className='text-zinc-500'>Anhanguera Educacional - 08/2024 a 01/2028</span>
               </div>
            </div>
         </div>

         <div className='flex flex-col items-center'>
            <div className='w-3/5'>
               <h1 className='text-zinc-200 text-4xl font-bold tracking-wider'>
                  Cursos e certificados
               </h1>
               <div className='flex flex-col mt-5 text-zinc-400 tracking-wide space-y-5'>
                  <article className='flex flex-col'>
                     <span className='text-xl'>MiniCurso Java</span>
                     <span className='text-zinc-500'>
                        Rocketseat - 07/2024 
                     </span>
                  </article>

                  <article className='flex flex-col'>
                     <span className='text-xl'>Javascript FullStack</span>
                     <span className='text-zinc-500'>
                        Hotmart - 09/2019 a 06/2020 
                     </span>
                  </article>

                  <article className='flex flex-col'>
                     <span className='text-xl'>Desenvolvimento Front End</span>
                     <span className='text-zinc-500'>
                        Senai - 02/2023 a 08/2023 
                     </span>
                  </article>
               </div>
            </div>
         </div>

         <div className='flex flex-col items-center'>
            <div className='w-3/5'>
               <h1 className='text-zinc-200 text-4xl font-bold tracking-wider'>
                  Stacks
               </h1>
               <div className='flex flex-wrap text-zinc-400 text-lg tracking-widest space-x-4 mt-5'>
                  {
                     stacks.map(item => {
                        return (
                           <span 
                              key={item}
                              className='transition-all duration-500 bg-zinc-800 text-zinc-400 px-2 py-1 rounded-2xl shadow-xl mb-4 hover:scale-105 hover:bg-purple-800 hover:text-zinc-200 font-medium'
                           >
                              {item}
                           </span>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutMePage