import React from 'react'

export default function GlowingButton({ label }) {
  return (
    <button className="w-full max-w-md my-5 px-8 py-3 rounded-xl text-white font-bold text-xs lg:text-md 
    bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600
    shadow-[0_0_30px_rgba(255,0,128,0.6)]
    hover:scale-105 transition-transform duration-200 ease-in-out font-bungee">
      {label}
    </button>
  )
}
