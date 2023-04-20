'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import prisma from '@/lib/prisma';



export default function Home() {
  const [animelist, setAnimelist] = useState()
  useEffect(() => {
    const fetchAnime = async () => {
    const res = await fetch('/api/hello')
    const animelist = await res.json()
    setAnimelist(animelist)}

    fetchAnime();
  }, [])
  return (
    <main className="flex-1">
      <div className=''>
        <h1 className='text-2xl'>My Anime list: </h1>
        
        {animelist ? 
        <div className='p-8 flex flex-col space-y-4'>
          <div>Watching: </div>
          <div className='space-y-4'>
            {animelist?.watching.length > 0 ? animelist?.watching.map((anime, index) => {
              return (
                <div key={index} className='w-full shadow-md h-full p-4 flex justify-between rounded-md bg-gray-200 '>
                  <div> {anime}</div>
                  
                </div>
              )
            }) : 'None watching'}</div>
            <div>Planning to watch: </div>
            {animelist?.planning.length > 0 ? animelist?.planning.map((anime, index) => {
              return (
                <div key={index} className='w-full shadow-md h-full p-4 flex justify-between rounded-md bg-gray-200 '>
                  <div> {anime}</div>
                </div>
              )
            }) : 'None planning to watch '}

            <div>Seen:  </div>
            {animelist?.watched.length > 0 ? animelist?.watched.map((anime, index) => {
              return (
                <div key={index} className='w-full shadow-md h-full p-4 flex justify-between rounded-md bg-gray-200 '>
                  <div> {anime}</div>
                </div>
              )
            }) : 'None seen '}
        </div>: <div className='p-8'>loading</div>}
      </div>
      
    </main>
  )
}
