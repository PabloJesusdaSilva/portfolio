"use client";

import Image from 'next/image';
import styled from 'styled-components';

import Memoji from '@/app/assets/memoji.jpeg';

const ProjectContainer = styled.div`
   width: 35%;
   height: auto;
   border-radius: 12px;

   @media (max-width: 600px) {
      width: 86%;
   }
`

const ProjectImage = styled.div`
   width: 100%;
`

const ProjectDescription = styled.div`
   position: relative;
   top: -90px;
   z-index: -10;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 90px;
   padding: 10px 14px;
   font-weight: 700;
   border-radius: 0 0 20px 20px;
   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
   transition: all .4s ease-in-out;
   background-color: #27272a;
   
   ${ProjectContainer}:hover & {
      position: relative;
      z-index: 10;
      top: -4px;
   }

   @media (max-width: 600px) {
      height: 70px;
   }
`

const ProjectTitle = styled.h2`
   position: relative;
   bottom: -6px;
   font-size: 22px;
   letter-spacing: 2px;
   color: #d4d4d8;

   @media (max-width: 600px) {
      font-size: 18px;
   }
`

const PathButtons = styled.div`
   display: flex;
   position: relative;
   bottom: -6px;
   cursor: pointer;
   color: #FFF;
`

const PathCodeButton = styled.button`
   position: relative;
   z-index: 20;
   padding: 8px 22px;
   font-size: 18px;
   letter-spacing: 3px;
   border-radius: 40px;
   background: linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116));
   
   @media (max-width: 600px) {
      font-size: 16px;
      padding: 6px 10px;
   }
`

const PathDeployButton = styled.button`
   margin-left: 15px;
   padding: 8px 22px;
   font-size: 18px;
   letter-spacing: 3px;
   border-radius: 40px;
   background: linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116));

   @media (max-width: 600px) {
      font-size: 16px;
      margin-left: 10px;
      padding: 6px 10px;
   }
`

interface ProjectInformation {
   title: string;
   deployPath: string;
   repositoriePath: string;
}

export default function ProjectCard ({
   title,
   deployPath,
   repositoriePath
}: ProjectInformation ) {
   return (
      <ProjectContainer>
         <ProjectImage>
            <Image
               className='rounded-xl'
               src={Memoji}
               alt='Image of the project Memoji'
            />
         </ProjectImage>

          <ProjectDescription>
            <ProjectTitle>
               {title}
            </ProjectTitle>
            <PathButtons>
               <PathCodeButton>
                  Code
               </PathCodeButton>
               <PathDeployButton>
                  Deploy
               </PathDeployButton>
            </PathButtons>
          </ProjectDescription>
      </ProjectContainer>
   )
}