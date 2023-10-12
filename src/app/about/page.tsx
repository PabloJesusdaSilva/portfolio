import Image from "next/image";

import AboutImage from "../assets/eu.jpg"

export default function () {
   return (
      <main className="flex flex-col items-center w-full h-auto text-zinc-400">
            <h2 className="w-64 pb-2 mt-16 mb-12 text-5xl font-bold border-b-4 border-purple-400 tracking-wider text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-orange-400">
               About me
            </h2>

         <div className="flex justify-center space-x-8 w-5/6">
            <Image src={AboutImage} alt="" className="w-96 rounded-xl shadow-xl shadow-zinc-900 border-2 border-zinc-800/25"/>

            <p className="w-1/5 tracking-wide leading-8 text-xl text-zinc-300">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit assumenda architecto sed, accusantium quia qui reprehenderit rerum itaque odio rem dolorem. Exercitationem reprehenderit nemo cum eveniet blanditiis inventore vitae laboriosam.Exercitationem reprehenderit nemo cum eveniet blanditiis inventore vitae laboriosam.
            </p>
         </div>

         <div className="-ml-80 space-y-10 tracking-wider">
            <h3 className="text-4xl font-semibold text-zinc-300 mt-40 -mb-6">
               Training
            </h3>

            <article className="space-y-6">
               <h4 className="text-lg text-zinc-400 font-medium">
                  UAM - Universidade Anhembi Morumbi
               </h4>
               <span className="text-zinc-500">
                  02 - 2023 / 07 - 2025
               </span>
            </article>

            <article className="space-y-6">
               <h4 className="text-lg text-zinc-400 font-medium">
                  Ford &lt;Enter&gt;
               </h4>
               <span className="text-zinc-500">
                  02 - 2023 / 06 - 2023
               </span>
            </article>

            <article className="space-y-6">
               <h4 className="text-lg text-zinc-400 font-medium">
                  Javascript FullStack
               </h4>
               <span className="text-zinc-500">
                  02 - 2023 / 07 - 2025
               </span>
            </article>
         </div>
      </main>
   );
}