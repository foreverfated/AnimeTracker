

const Search = () => {
    return (
        <div className='w-full h-[600px] bg-gray-200  flex flex-col gap-4 items-center justify-center'>
            <div className='text-5xl font-bold'>Search thousands of anime </div>
            <div className="mb-3 xl:w-96">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 block  w-[300px] flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="...demon slayer"
      aria-label="Search"
      aria-describedby="button-addon2" />


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
        </div>
    )
}


const Trending = () => {
    return (
        <div className="w-full h-full flex-1 flex flex-wrap p-4">
            {[...Array(10).keys()].map(card => {
                return (
                    <div key={card} className="w-1/3 h-[200px] p-4"><div className='rounded-lg h-full bg-gray-200   flex items-center justify-center'>anime {card}</div></div>
                )
            })}
        </div>
        
    )

}


export default function Home() {
  return (
    <main className="flex-1 h-full w-full flex flex-col">
        <Search />
        <Trending />
    </main>
  )
}
