"use client";

import Image from 'next/image';
import styled from 'styled-components';

import Link from 'next/link';
import CardDescription from './CardDesciption';

const Container = styled.section`
   display: flex;
`

const ProjectContainer = styled.div`
   width: 60%;
   height: auto;
   border-radius: 12px;

   @media (max-width: 600px) {
      width: 96%;
   }
`

const ProjectImage = styled.div`
   width: 100%;
`

const Shadow = styled.div`
   position: relative;
   display: block;
   z-index: -10;
   top: -87.5%;
   width: 100%;
   height: 87.8%;
   opacity: 0;
   border-radius: 12px;
   transition: all .4s;
   background-color: #18181b;
   
   ${ProjectContainer}:hover & {
      position: relative;
      z-index: 10;
      opacity: 0.8;
   }

   @media (max-width: 600px) {
      top: -80%;
      height: 80%;
   }
`

const ProjectDescription = styled.div`
   position: relative;
   z-index: -10;
   top: -167.5%;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   width: 100%;
   height: 79.8%;
   padding: 10px 14px;
   opacity: 0;
   font-weight: 700;
   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
   transition: all .3s ease-in-out;
   
   ${ProjectContainer}:hover & {
      position: relative;
      z-index: 20;
      opacity: 1;
   }

   @media (max-width: 600px) {
      top: -150%;
      height: 71%;
      padding: 0 14px;
   }
`

const ProjectTitle = styled.h2`
   position: relative;
   bottom: -6px;
   font-size: 50px;
   letter-spacing: 4px;
   color: #d4d4d8;

   @media (max-width: 600px) {
      margin-bottom: 14px;
      font-size: 18px;
   }
`

const PathButtons = styled.div`
   display: flex;
   position: relative;
   top: -20px;
   cursor: pointer;
   color: #FFF;
`

const PathCodeButton = styled.button`
   position: relative;
   z-index: 20;
   padding: 12px 27px;
   font-size: 20px;
   letter-spacing: 3px;
   border-radius: 40px;
   background: linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116));
   
   @media (max-width: 600px) {
      font-size: 14px;
      padding: 4px 12px;
   }
`

const PathDeployButton = styled.button`
   margin-left: 18px;
   padding: 12px 27px;
   font-size: 20px;
   letter-spacing: 3px;
   border-radius: 40px;
   background: linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116));

   @media (max-width: 600px) {
      font-size: 14px;
      margin-left: 10px;
      padding: 4px 12px;
   }
`

interface ProjectInformation {
   image: any
   title: string;
   deployPath: string;
   repositoriePath: string;
}

export default function ProjectCard ({
   image,
   title,
   repositoriePath,
   deployPath
}: ProjectInformation ) {
   return (
      <Container>
         <ProjectContainer>
            <ProjectImage>
               <Image
                  className='rounded-xl'
                  src={image}
                  alt='Image of the project Memoji'
                  />
            </ProjectImage>

            <Shadow />

            <ProjectDescription>
               <ProjectTitle>
                  {title}
               </ProjectTitle>

               <PathButtons>
                  <PathCodeButton>
                     <Link href={repositoriePath}>
                        Code
                     </Link>
                  </PathCodeButton>

                  <PathDeployButton>
                     <Link href={deployPath}>
                        Deploy
                     </Link>
                  </PathDeployButton>
               </PathButtons>
            </ProjectDescription>
         </ProjectContainer>

         <CardDescription />
      </Container>
   )
}