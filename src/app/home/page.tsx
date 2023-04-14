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
  useEffect(() => {
    console.log(data)
  }, [search])
  if (data) console.log(data.Page.media)
    return (
        <div className='w-full h-full p-2 bg-gray-200 flex flex-col items-center justify-center'>
            <div className=' font-bold'>Search thousands of anime </div>
            <div className="mb-3 xl:w-96">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 block  w-[300px] flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="...demon slayer"
      aria-label="Search"
      aria-describedby="button-addon2"
      value={search}
      onChange={(i) => setSearch(i.target.value)} />


    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
    </span>
  </div>
</div>
      {search === "" && <Trending /> }
      {loading && 'loading'}
      {data && data?.Page?.media.map((anime: any, index: number) => {
        return (
          <div key={index} className='w-full h-full p-4 flex justify-between rounded-md border-2 border-gray shadow-md'>
            <div>{anime.title.english} {anime.title.native}</div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">Add to list</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-max ">
                <li><a>set as Watching</a></li>
                <li><a>set as Seen</a></li>
                <li><a>set as planning</a></li>
              </ul>
            </div>
            </div>
        )
      })}
      
        </div>
    )
}


const Trending = () => {
  const {loading, error, data} = useQuery(get_anime, {
    variables: {id: 15125}
  })
    return (
        <div className="w-full h-full flex-1 flex flex-wrap p-4">
            {[...Array(10).keys()].map(card => {
                return (
                    <div key={card} className="w-1/3 h-[200px] p-4"><div className='rounded-lg h-full bg-gray-400   flex items-center justify-center'>anime {card}</div></div>
                )
            })}
        </div>
        
    )

}


export default function Home() {
  return (
    <main className="flex-1 h-full w-full flex flex-col">
        <HomePage />
    </main>
  )
}
