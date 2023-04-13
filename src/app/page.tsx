import Image from 'next/image'
import { Inter } from 'next/font/google'
// import HeroSection from '../../components/heroSection'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

function HeroSection(){
    return (
        <>
<section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        W Anime

        <span className="sm:block"> Tracker </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
       <Link
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
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
  </div>
  <div className="fixed right-0 bottom-0">
    2023 inc forever fateed w windows boi
</div>
</section>


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
