

const CardDescription = () => {
   return(
      <div className='sm:flex flex-col space-y-8 ml-10 md: hidden'>
         <span className='py-2 px-5 h-12 rounded-full text-zinc-50 text-xl font-semibold bg-gradient-to-r from-rose-300 via-fuchsia-400 to-indigo-400'>
            Vite
         </span>
         <span className='py-2 px-5 h-12 rounded-full text-zinc-50 text-xl font-semibold bg-gradient-to-r from-rose-300 via-fuchsia-400 to-indigo-400'>
            ReactJs
         </span>
         <span className='py-2 px-5 h-12 rounded-full text-zinc-50 text-xl font-semibold bg-gradient-to-r from-rose-300 via-fuchsia-400 to-indigo-400'>
            Tailwind
         </span>
      </div>
   )
}

export default CardDescription;