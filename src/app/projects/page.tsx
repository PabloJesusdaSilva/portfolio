import Image from "next/image"

import ProjectCard from "../components/ProjectCard"
import VtexImage from "@/app/assets/vtex-page.png"

export default function ProjectsPage () {
   return(
      <main className="flex flex-col items-center w-full h-auto mb-28">
         <h1 className="mt-28 text-4xl md:text-6xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400">
            Projetos
         </h1>

         <section className="w-8/12 mt-20 space-y-28 text-zinc-300">
            <ProjectCard 
               image={VtexImage}
               title="Vtex"
               description="Lorem uibusdam cum asperiores excepturi exercitationem velit deleniti, minima corporis!"
            />
            <ProjectCard 
               image={VtexImage}
               title="Vtex"
               description="Lorem uibusdam cum asperiores excepturi exercitationem velit deleniti, minima corporis!"
            />
            <ProjectCard 
               image={VtexImage}
               title="Vtex"
               description="Lorem uibusdam cum asperiores excepturi exercitationem velit deleniti, minima corporis!"
            />
         </section>
      </main>
   )
}