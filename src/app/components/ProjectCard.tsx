"use client"

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

interface ProjectProps {
   image: any
   title: string  
   description: string
   codePath: string
   deployPath: string
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
   top: -279px;
   display: flex;
   flex-direction: column;
   transition: all .4s ease-in-out;   

   ${Project}:hover & {
      top: -5px
   }
   
   @media (min-width: 768px) {
      top: 0;
      left: -200px;

      ${Project}:hover & {
         z-index: 10;
         left: 85px;
      }
   }
   
`

export default function ProjectCard ({ 
   image, 
   title, 
   description,
   codePath,
   deployPath 
}: ProjectProps) {
   return (
      <Project className="space-x-0 space-y-6 md:space-x-14">
            <Image 
               src={image}
               alt="screenshot of the project Vtex" 
               className="w-[700px] h-64 object-cover object-left rounded-lg transition-all duration-500 ease-in-out hover:object-bottom left-0 -top-2  md:w-4/5 md:h-auto relative hover:-left-8"
            />

         <ProjectDescription className="space-y-4">
            <h4 className="text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-orange-300">
               {title}
            </h4>

            <p className="w-12/12 md:pb-5 text-lg tracking-wide leading-8 font-medium w-[240px]">
               {description}
            </p>

            <div className="space-x-8">
               <button className="bg-gradient-to-tr from-violet-500 to-orange-300 py-2 px-5 rounded-md font-semibold text-lg uppercase">
                  <Link href={codePath}>
                     Code
                  </Link>
               </button>
               <button className="bg-gradient-to-tr from-violet-500 to-orange-300 py-2 px-5 rounded-md font-semibold text-lg uppercase">
                  <Link href={deployPath}>
                     Deploy
                  </Link>
               </button>
            </div>
         </ProjectDescription>
      </Project>
   )
}