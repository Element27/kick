import React from 'react'
import GamesCard from './GamesCard'
import { cardplaceholder } from '../constants/SideNavItems'

export default function AllGames() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[90%] mx-auto'>

      {Array.from({ length: 9 }).map((_, index) => (
        <GamesCard key={index} item={cardplaceholder[index % cardplaceholder.length]} />
      ))}
    </div>
  )
}
