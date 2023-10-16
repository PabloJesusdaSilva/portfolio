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
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   
   ${Project}:hover & {
      margin-left: -10px;
   }
`

export default function ProjectCard ({ image, title, description }: ProjectProps) {
   return (
      <Project className="space-x-0 space-y-6 md:space-x-14">
         <Image 
            src={image}
            alt="screenshot of the project Vtex" 
            className="w-12/12 rounded-lg md:w-3/5 project-image"
         />

         <ProjectDescription className="space-y-3">
            <h4 className="text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-orange-300">
               {title}
            </h4>

            <p className="w-12/12 md:text-lg tracking-wide leading-9 font-medium w-10/12 group-hover:text-zinc-800">
               {description}
            </p>
         </ProjectDescription>
      </Project>
   )
}