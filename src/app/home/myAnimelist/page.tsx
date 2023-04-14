import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="flex-1">
      <div className=''>
        <h1>My Anime list: </h1>
      </div>
    </main>
  )
}
