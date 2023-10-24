'use client';

import ProjectCard from "../components/ProjectCard"
import VtexImage from "@/app/assets/vtex-page.png"
import AnunxImage from '@/app/assets/anunx-page.png'
import MemojiImage from '@/app/assets/memoji.jpeg'
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProjectsPage () {
   const [repositories, setRepositories] = useState([]);

   useEffect(() => {
      axios.get('https://api.github.com/users/PabloJesusdaSilva/repos')
         .then(res => {
            setRepositories(res.data)
         });
   })

   return(
      <main className="flex flex-col items-center w-full h-auto mb-28">
         <h1 className="mt-28 text-5xl md:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400">
            Projetos
         </h1>

         <section className="mt-12">
            <div className="flex flex-col items-center space-x-0 space-y-10 md:flex-row justify-center md:space-x-20">
               <ProjectCard 
                  title='Memoji'
                  deployPath=''
                  repositoriePath=''
               />
               <ProjectCard 
                  title='Memoji'
                  deployPath=''
                  repositoriePath=''
               />
            </div>
         </section>
      </main>
   )
}