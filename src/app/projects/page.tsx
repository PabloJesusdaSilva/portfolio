'use client';

import ProjectSection from '../partials/ProjectSection';

export default function ProjectsPage () {
   return(
      <main className='flex flex-col items-center w-full h-auto mb-28'>
         <h1 className='mt-28 text-5xl md:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400'>
            Projetos
         </h1>

         <ProjectSection />
      </main>
   )
}