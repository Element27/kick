import React from 'react'
import InputComponent from '../components/InputComponent'
import GlowingButton from '../components/GlowingButton'

export default function Signup() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden bg-[#151C2F]">

      <div className='my-6'>
        <img src="assets/logo.png" alt="" className='w-fit' />
      </div>
      <h4 className='text-white text-xl font-semibold'>Sign up to continue</h4>
      <p className='text-white text-lg'>Get started with KICK by signing up with your details below</p>

      <div className='w-full max-w-md mx-auto mt-4 relative'>
        <InputComponent placeholder="Enter your first name" />
        <InputComponent placeholder="Enter your last name" />
        <InputComponent placeholder="Enter your email address" />
        <InputComponent placeholder="Enter your phone number" />


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
