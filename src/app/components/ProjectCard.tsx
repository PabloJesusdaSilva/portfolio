"use client"

import Image from "next/image"
import styled from "styled-components"

interface ProjectProps {
   image: any
   title: string  
   description: string
}

const Project = styled.article`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: all .4s ease-in-out;

   @media (min-width: 768px) {
      justify-content: center;
      flex-direction: row;
   }
`

const ProjectDescription = styled.div`
   position: relative;
   z-index: -10;
   left: -200px;
   display: flex;
   flex-direction: column;
   transition: all .4s ease-in-out;   
   
   ${Project}:hover & {
      left: 20px
   }
`


export default function ProjectCard ({ image, title, description }: ProjectProps) {
   return (
      <Project className="space-x-0 space-y-6 md:space-x-14">
            <Image 
               src={image}
               alt="screenshot of the project Vtex" 
               className="w-12/12 rounded-lg transition-all duration-500 ease-in-out md:relative left-56 w-3/5 hover:left-0"
            />

         <ProjectDescription className="space-y-3">
            <h4 className="text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-orange-300">
               {title}
            </h4>

            <p className="md:text-lg tracking-wide leading-8 font-medium w-10/12 group-hover:text-zinc-800">
               {description}
            </p>
         </ProjectDescription>
      </Project>
   )
}