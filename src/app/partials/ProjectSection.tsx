import ProjectCard from '../components/ProjectCard'

import VtexImage from '@/app/assets/vtex-page.png'
import AnunxImage from '@/app/assets/anunx-page.png'
import MemojiImage from '@/app/assets/memoji.jpeg'

const ProjectSection = () => {
   return(
      <section className='mt-16 ml-4'>
         <div className='flex flex-col items-center space-y-32'>
            <ProjectCard 
               image={MemojiImage}
               title='Memoji'
               repositoriePath='https://github.com/PabloJesusdaSilva/memoji'
               deployPath='https://codemoji-red.vercel.app/'
            />
            <ProjectCard 
               image={AnunxImage}
               title='Anunx'
               repositoriePath='https://github.com/PabloJesusdaSilva/Anunx'
               deployPath=''
            />
            <ProjectCard 
               image={VtexImage}
               title='Vtex'
               repositoriePath='https://github.com/PabloJesusdaSilva/vtex-teste'
               deployPath=''
            />
         </div>
      </section>
   )
}

export default ProjectSection;