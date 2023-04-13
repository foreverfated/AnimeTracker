import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex-1 bg-red-200">
      <div className=''>
        Hello world - anime trakcer project :
      </div>
    </main>
  )
}
