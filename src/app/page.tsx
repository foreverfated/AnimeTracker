import Image from 'next/image'
import { Inter } from 'next/font/google'
// import HeroSection from '../../components/heroSection'
import demonslayer1 from '../../public/demonslayer1.jpg'
const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

function HeroSection(){
    return (
//         <>
// <section className="bg-gray-900 text-white">
//   <div
//     className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
//   >
//     <div className="mx-auto max-w-3xl text-center">
//       <h1
//         className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
//       >
//         W Anime

//         <span className="sm:block"> Tracker </span>
//       </h1>

//       <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
//         tenetur fuga ducimus numquam ea!
//       </p>


//     </div>
//   </div>
//   <div className="fixed right-0 bottom-0">
//     2023 inc forever fateed w windows boi
// </div>
// </section>


// </>
  <>
  <div className='w-screen p-4  z-50 fixed text-white text-2xl'>Anime tracker</div>
  <div className='z-40 text-white text-center sm:text-left w-screen h-screen flex flex-col justify-center p-4 space-y-8 relative md:pl-[7rem]  bg-gradient-to-r from-black text-3xl'>
    <div className='text-6xl font-extrabold'>Easily track anime<br/> and manga</div>
    <p className=''>track any anime and manga here Anime Tracking Website</p>
    <div className=" flex flex-wrap gap-4">
       <Link
          className="block w-full rounded border border-blue-600 hover:bg-blue-600 px-12 py-3 text-sm font-medium text-white  hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/home"
        >
          login
        </Link>

       <Link
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/home"
        >
        browse anime
        </Link>
      </div>
  </div>



    <div className='absolute top-0 left-0 w-screen h-screen z-10'>
    <Image src={demonslayer1} className='w-screen h-screen' style={{ transform: 'scalex(-1)', width: '100%', objectFit: 'cover'}} alt={'fds'} />
    </div>
    
      
      
      

</>

    )
}

export default function Home() {
  return (
      <>
      
      <HeroSection />



      </>
  )
}
