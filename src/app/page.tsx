import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <div className='w-screen h-screen flex items-center justify-center'>
        Hello world - anime trakcer project :)
      </div>
    </main>
  )
}
