import ProjectCard from '../components/ProjectCard'

import VtexImage from '@/app/assets/vtex-page.png'
import AnunxImage from '@/app/assets/anunx-page.png'
import MemojiImage from '@/app/assets/memoji.jpeg'

const data = [
   {
      image: MemojiImage,
      title: 'Memoji',
      repositoriePath: 'https://github.com/PabloJesusdaSilva/memoji',
      deployPath: 'https://codemoji-red.vercel.app/'
   },
   {
      image: VtexImage,
      title: 'Vtex',
      repositoriePath: 'https://github.com/PabloJesusdaSilva/vtex-teste',
      deployPath: 'https://codemoji-red.vercel.app/'
   },
   {
      image: MemojiImage,
      title: 'Config',
      repositoriePath: 'https://github.com/PabloJesusdaSilva/memoji',
      deployPath: 'https://codemoji-red.vercel.app/'
   },
   {
      image: AnunxImage,
      title: 'Anunx',
      repositoriePath: 'https://github.com/PabloJesusdaSilva/Anunx',
      deployPath: 'https://codemoji-red.vercel.app/'
   }
]

const ProjectSection = () => {
   return(
      <section className='mt-16 ml-4'>
         <div className='flex flex-col items-center space-y-28'>
            {
               data.map(card => (
                  <ProjectCard 
                     key={card.title}
                     image={card.image}
                     title={card.title}
                     repositoriePath={card.repositoriePath}
                     deployPath={card.deployPath}
                  />
               ))
            }
            
         </div>
      </section>
   )
}

export default ProjectSection;