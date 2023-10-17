import ProjectCard from "../components/ProjectCard"
import VtexImage from "@/app/assets/vtex-page.png"
import AnunxImage from '@/app/assets/anunx-page.png'
import MemojiImage from '@/app/assets/memoji.jpeg'

export default function ProjectsPage () {
   return(
      <main className="flex flex-col items-center w-full h-auto mb-28">
         <h1 className="mt-28 text-5xl md:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400">
            Projetos
         </h1>

         <section className="w-8/12 space-y-16 md:space-y-28 mt-20 text-zinc-300">
            <ProjectCard 
               image={VtexImage}
               title="Vtex"
               description="Lorem uibusdam cum asperiores excepturi exercitationem velit deleniti, minima corporis!"
               codePath="https://github.com/PabloJesusdaSilva/vtex-teste"
               deployPath="https://vtex-teste-jr.vercel.app/"
            />
            <ProjectCard 
               image={MemojiImage}
               title="Memoji"
               description="Lorem uibusdam cum asperiores excepturi exercitationem velit deleniti, minima corporis!"
               codePath="https://github.com/PabloJesusdaSilva/memoji"
               deployPath="https://codemoji-red.vercel.app/"
            />
            <ProjectCard 
               image={AnunxImage}
               title="Anunx"
               description="Lorem uibusdam cum asperiores excepturi exercitationem velit deleniti, minima corporis!"
               codePath="https://github.com/PabloJesusdaSilva/Anunx"
               deployPath="#"
            />
         </section>
      </main>
   )
}