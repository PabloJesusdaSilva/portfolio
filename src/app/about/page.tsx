import Image from "next/image";

import AboutImage from "../assets/eu.jpg"

export default function () {
   return (
      <main className="flex flex-col items-center w-full h-auto mt-32 text-zinc-400">
         <div className="w-5/6 md:w-3/6 pb-2 mb-3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400">
               Coffe. Code. Repeat.
            </h2>
         </div>

         <div className="flex flex-col items-center space-x-0 space-y-8 md:flex-row justify-center w-5/6 md:space-x-28 md:space-y-0">
            <Image src={AboutImage} alt="" width={200} height={200} className="w-80 h-96 rounded-xl shadow-lg object-cover"/>

            <p className="w-10/12 md:w-4/12 tracking-wider leading-10 text-xl text-zinc-300">
            Olá! Meu nome é Pablo, eu tenho 19 anos. Sou um desenvolvedor Front End e usando tecnologias em alta como NextJs, ReactJs, Node, Tailwind entre muitas outras.

            Sempre fui uma pessoa curiosa e criativa, e sempre gostei de aprender coisas novas. Quando era criança, eu adorava desmontar aparelhos eletrônicos para ver como funcionavam. Depois, comecei a aprender a programar, e foi aí que descobri minha paixão pela tecnologia.

            Hoje, eu estudo análise e desenvolvimento de sistemas na UAM - Universidade Anhembi Morumbi. Estou sempre procurando novas maneiras de usar a tecnologia para criar coisas incríveis. Além disso, sou músico e toco violoncelo.
            </p>
         </div>

         <div className="w-4/6 -ml-0 md:w-2/6 md:-ml-80 mb-28 space-y-11 tracking-wider">
            <h3 className="-ml-3 mt-40 -mb-3 text-5xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
               Training
            </h3>

            <article className="space-y-2">
               <h4 className="text-xl text-zinc-200 font-medium">
                  Análise e Desenvolvimento de Sistemas
               </h4>
               <h5 className="text-lg pb-3 text-zinc-400 font-medium">
                  <span className="text-zinc-300 mr-1">
                     UAM - Universidade Anhembi Morumbi 
                  </span>
                   - SP
               </h5>
               <span>
                  02 - 2023 / 07 - 2025
               </span>
            </article>

            <article className="space-y-2">
               <h4 className="text-xl text-zinc-200 font-medium">
                  Ford &lt;Enter&gt;
               </h4>
               <h5 className="text-lg pb-3 text-zinc-400 font-medium">
                  <span className="text-zinc-300 mr-1">
                     Ford / Senai 
                  </span>
                   - SP
               </h5>
               <span>
                  02 - 2023 / 06 - 2023
               </span>
            </article>

            <article className="space-y-2">
               <h4 className="text-xl text-zinc-200 font-medium">
                  Javascript FullStack
               </h4>
               <h5 className="text-lg pb-3 text-zinc-400 font-medium">
                  <span className="text-zinc-300 mr-1">
                     Hotmart
                  </span>
                   - EAD
               </h5>
               <span>
                  02 - 2023 / 07 - 2025
               </span>
            </article>
         </div>
      </main>
   );
}