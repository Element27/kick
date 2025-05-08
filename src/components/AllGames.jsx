import React from 'react'
import GamesCard from './GamesCard'
import { cardplaceholder } from '../constants/SideNavItems'

export default function AllGames() {

  const section = [
    { title: "All Games", id: 1 },
    { title: "Action", id: 2 },
    { title: "Puzzle", id: 3 },
    { title: "Racing", id: 4 },
    { title: "Adventure", id: 5 },

  ]

  return (
    <div className='text-white gap-4 p-4 w-full mx-auto'>
      {/* <div className=' gap-4 p-4 w-[90%] mx-auto'> */}

      {
        section.map((item) => (
          <div key={item.id} className='my-4 w-full'>
            <div className='flex items-center justify-between w-11/12 mx-auto my-4'>
              <h4 className='text-lg font-semibold'>{item.title}</h4>
              <button className='text-[10px] cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out bg-[#EA3D17] px-2 py-1 rounded-lg'>View All</button>
            </div>
            <div className='flex gap-4 w-11/12 mx-auto my-4 pb-4 overflow-x-scroll scrollbar-none'>
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className='flex-shrink-0'>
                  <GamesCard key={index} item={cardplaceholder[index % cardplaceholder.length]} />
                </div>
              ))}
            </div>
            <div className='w-11/12 mx-auto my-4 border-b border-b-[#EA3D17]' />
          </div>
        ))}

    </div>
  )
}
