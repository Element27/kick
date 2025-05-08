import React from 'react'
import { BiHeart, BiStar } from 'react-icons/bi'

export default function GamesCard({ item }) {
  return (
    <div className='rounded-2xl  w-[320px] text-white overflow-hidden relative lg:h-60 mx-auto'>

      <img src={item.src}
        alt=""
        className='w-md h-full'
      />
      <div className='bg-[#151C2F] z-10 absolute bottom-0 left-0 right-0'>
        <div className='flex justify-between p-2 lg:p-4   bg-white/10'>
          <button className="bg-[#EA3D17] rounded-md p-1 px-2 text-white font-light h-fit text-[8px] lg:text-[10px]">New</button>

          <div className='flex flex-col items-center justify-center text-sm lg:text-xl font-semibold '>
            <p>{item.label}</p>
            <div className='flex items-center justify-center text-[#EA3D17] my-2 gap-1 '>
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src="assets/star.png"
                  alt="img"
                  className="w-3 lg:w-4 "
                />))}
            </div>
          </div>
          <BiHeart className='text-xl' />
        </div>
      </div>


      {item.showCount && <div className='absolute top-3 right-3 bg-[#253253] flex items-center gap-2 p-1 rounded-lg'>
        <img
          src="assets/fa-solid.png"
          alt="img"
          className="w-3 "
        />

        <span className='text-xs'>{Math.floor(Math.random() * 5000)}</span></div>}
    </div>
  )
}
