import VtexImage from '@/app/assets/vtex-page.png'
import AnunxImage from '@/app/assets/anunx-page.png'
import MemojiImage from '@/app/assets/memoji.jpeg'
import React from 'react'

interface ICard {
   image: any;
   title: string;
   repositoriePath: string;
   deployPath: string;
}

const data: ICard[] = [
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
      <></>
   )
}

export default ProjectSection;