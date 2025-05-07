import React from 'react'
import GlowingButton from './GlowingButton'
import { FaPlus } from 'react-icons/fa'

export default function HeroSectionCard({ item, index, currentIndex }) {


  return (
    // <div>
    <div className={`relative w-[80%] mx-auto  rounded-3xl shadow-2xl flex justify-center items-center h-[80%] ${index === currentIndex ? "opacity-100" : "opacity-0"} `}>
      <div className={`absolute top-0 left-0 w-[15%] `}>
        <img
          src={item.ratingSrc}
          alt="rate"
          className="w-full h-full animate-pulse"
        />
      </div>

      <div className={`absolute top-0 right-0 w-full `}>
        <img
          src={item.bgSrc}
          alt="bg"
          className="w-full h-full"
        />
      </div>

      <div className='relative z-10 flex justify-center items-end h-full w-full '>

        <div className='z-20 w-2/3 md:w-1/2  bg-black/20 p-1 rounded-md'>
          <div className='w-full lg:w-4/5 mx-auto'>
            <div className='text-white'>
              <h4 className='text-lg lg:text-4xl hidden md:block '>{item.title}</h4>
              <p className='text-xs lg:text-sm hidden lg:block'>{item.description}</p>
            </div>
            <div className="flex  items-center justify-between">
              <div>
                <p className='text-xs lg:text-sm text-white hidden md:block text-center'>Review {item.review}</p>
                <p className='text-xs md:text-lg text-white block md:hidden text-center'>{item.review}</p>
                <div className='flex items-center'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src='assets/hero_star.png'
                      alt="img"
                      className="w-2 md:w-3 lg:w-4"
                    />
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div >
                  <GlowingButton label="Play Now" />
                </div>
                <div className='hidden md:block'>
                  <GlowingButton label={<FaPlus />} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='z-20 w-1/3 md:w-1/2 flex justify-center items-center h-full'>
          <div className='w-full '>
            <img
              src={item.imgSrc}
              alt="bg"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
      <div className=' w-[75%] absolute -top-6 left-0  lg:-top-20 lg:-left-20'>
        <img
          src={item.monsterSrc}
          alt="img"
          className="w-full animate-move-x"
        />
      </div>

      <div className='absolute top-3 right-3 bg-[#428194] text-white flex items-center gap-2 p-2 px-4 rounded-full'>
        <span className='text-[10px]'>Free to Play</span></div>
    </div>



  )
}
