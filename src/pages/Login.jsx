import React from 'react'
import InputComponent from '../components/InputComponent'
import GlowingButton from '../components/GlowingButton'

export default function Login() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden bg-[#151C2F]">

      <div className='my-6'>
        <img src="assets/logo.png" alt="" className='w-fit' />
      </div>
      <h4 className='text-white text-xl font-semibold'>Welcome back</h4>
      <p className='text-white text-lg'>Play trivia and arcade games</p>

      <div className='w-full max-w-md mx-auto mt-4 relative'>
        <InputComponent placeholder="Enter your email address" />

        <GlowingButton label="Continue" />


        <div className="absolute -top-20 right-0">
          <img src="assets/ball.png" alt="" />
        </div>
        <div className="absolute -bottom-10 -left-10">
          <img src="assets/ball.png" alt="" />
        </div>
      </div>
    </div>
  )
}
