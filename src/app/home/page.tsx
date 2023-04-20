'use client'

import { useQuery, gql } from '@apollo/client';

import { useEffect, useState } from 'react';



const get_anime = gql`query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`

const searchForAnime = gql`query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
}`


const HomePage = () => {
  const [search, setSearch] = useState("")
  const {loading, error, data} = useQuery(searchForAnime, {
    variables: { 
      search: search,
      page: 1,
      perPage: 3
  }
  })

  const getuseranime = async () => {
    const res = await fetch('/api/hello')
    const animelist = await res.json()
    setAnimelist(animelist)
  }

  const addAnimeToList = async (status: string, id: number, anime: string)  => {
    const data = {
      status: status, 
      anime: anime,
      id: id,
    }
    const res = await fetch('/api/hello', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    getuseranime()
  }

  const [animelist, setAnimelist] = useState<any>([])

  useEffect(() => {
    getuseranime()
  }, [])

    return (
        <div className='w-full h-full  flex flex-col items-center justify-center'>
            <div className=' font-bold text-2xl'>Search thousands of anime </div>
            <div className="mb-3 xl:w-96">
    <input
      type="search"
      className="relative shadow-2xl m-0 block  w-[600px] flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="...demon slayer"
      value={search}
      onChange={(i) => setSearch(i.target.value)} />
</div>
      {search === "" && <HomePageContent /> }
      {loading && 'loading'}
      {data && (
        <div className='w-full flex flex-col gap-8 p-4'>
          {data.Page.media.map((anime: any, index: number) => (
            <div key={index} className='w-full shadow-md h-full p-4 flex justify-between rounded-md bg-gray-200 '>
              <div>{`${anime.title.english} ${anime.title.native}`}</div>
              {animelist?.watching?.includes(anime.id) || animelist?.watched?.includes(anime.id) || animelist?.planning?.includes(anime.id) ? `currently ${animelist?.planning?.includes(anime.id) ? 'planned' : animelist?.watched?.includes(anime.id) ? 'completed': 'watching'}` : <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1">Add to list</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-max ">
                  <li onClick={() => addAnimeToList('watching', anime.id, anime.title.english ? anime.title.english : anime.title.native )}><a>set as Watching</a></li>
                  <li onClick={() => addAnimeToList('seen', anime.id, anime.title.english ? anime.title.english : anime.title.native)}><a>set as Seen</a></li>
                  <li onClick={() => addAnimeToList('planning', anime.id, anime.title.english ? anime.title.english : anime.title.native)}><a>set as planning</a></li>
                </ul>
              </div>}
            </div>
          ))}
        </div>
      )}

      
        </div>
    )
}

interface IpropsSection {
  title: string,
}

const AnimeSection = ({title}: IpropsSection) => {
  return (
    <div className='flex flex-col w-full h-max p-8 '>
      <div className='text-4xl'>{title}</div>
      <div className="w-full h-full flex-1 flex flex-wrap">
            {[...Array(4).keys()].map(card => {
                return (
                    <div key={card} className="w-1/4 h-[400px] p-4"><div className='rounded-lg h-full bg-gray-400   flex items-center shadow-2xl justify-center'>anime {card}</div></div>
                )
            })}
        </div>
    </div>
  )
}

interface Itop10anime {
  rank: number, 
  animeDetails: string,
  genre: string, 
  rating: number, 
  lastAired: string,
}

const Top10Anime = ({animeList}: {animeList: Itop10anime[]}) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>rank</th>
            <th>anime details</th>
            <th>genre</th>
            <th>rating</th>
            <th>last aired</th>
          </tr>
        </thead>
        <tbody>
          {animeList.map(({rank, animeDetails, genre, rating, lastAired}) => (
            <tr key={rank} className='text-2xl'>
              <th className='p-12'>{rank}</th>
              <td>{animeDetails}</td>
              <td>{genre}</td>
              <td>{rating}</td>
              <td>{lastAired}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



const HomePageContent = () => {
  const {loading, error, data} = useQuery(get_anime, {
    variables: {id: 15125}
  })

  const FakeAnimelist: Itop10anime[] = [
    {
      rank: 1,
      animeDetails: 'Attack on Titan',
      genre: 'Action, Drama, Fantasy',
      rating: 9.0,
      lastAired: '2022-03-28',
    },
    {
      rank: 2,
      animeDetails: 'Fullmetal Alchemist: Brotherhood',
      genre: 'Action, Adventure, Drama',
      rating: 9.1,
      lastAired: '2010-07-04',
    },
    {
      rank: 3,
      animeDetails: 'Death Note',
      genre: 'Mystery, Psychological, Supernatural',
      rating: 8.6,
      lastAired: '2007-06-27',
    },
    {
      rank: 4,
      animeDetails: 'One Punch Man',
      genre: 'Action, Comedy, Parody',
      rating: 8.0,
      lastAired: '2019-07-02',
    },
    {
      rank: 5,
      animeDetails: 'Naruto',
      genre: 'Action, Adventure, Martial Arts',
      rating: 8.2,
      lastAired: '2007-02-08',
    },
  ];
  
    return (
      <div className='w-full h-full'>
        
      <AnimeSection title={"Trending"} />
      <AnimeSection title={"Popular this season"} />
      <AnimeSection title={"All Time popular"} />
      <Top10Anime animeList={FakeAnimelist} />
        </div>
    )
}

export default function Home() {
  return (
    <main className="flex-1 h-full w-full">
        <HomePage />
    </main>
  )
}
