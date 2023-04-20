import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id');
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // });
  // const product = await res.json();
    const anime = await prisma.user.findUnique({
      where: {
        id: 1
      }
    })

    

  return NextResponse.json(anime)
}

export async function POST(request: Request) {
  const body = await request.json()
  
  const data = body.status === 'watching' ?
   {
    watching: {
      push: body.id,
    }
  } : body.status === 'seen' ? 
  {
    watched: {
      push: body.id,
    }
  } : {
    planning: {
      push: body.id,
    }
  }
  const addAnime = await prisma.user.update({
    where: {
      id: 1,
    },
    data: data,
  })

  return NextResponse.json({msg: 'successfully added to list'})
}