// import React from 'react'
// import HeroSectionCard from './HeroSectionCard'
// import EmblaCarouselComponent from './CarouselComponent'
// import { Slidedata } from '../constants/SideNavItems'

// export default function HeroSection() {


//   return (

//     <div className=' h-[30vh] md:h-[50vh] lg:h-[80vh] w-full my-16'>
//       <HeroSectionCard item={Slidedata[0]} />
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import HeroSectionCard from './HeroSectionCard';
import { Slidedata } from '../constants/SideNavItems';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? Slidedata.length - 1 : prev - 1));
  // };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === Slidedata.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative h-[30vh] md:h-[50vh] lg:h-[80vh] w-full lg:my-32 '>
      <div
        className='flex transition-transform duration-500 ease-in-out h-full'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Slidedata.map((item, index) => (
          <div className='w-full flex-shrink-0 h-full' key={index}>
            <HeroSectionCard item={item} index={index} currentIndex={currentIndex} />
          </div>
        ))}
      </div>


    </div>
  );
}
