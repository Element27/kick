import React from 'react'
import InputComponent from '../components/InputComponent'
import GlowingButton from '../components/GlowingButton'

export default function OnBoarding() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden bg-[#151C2F]">

      <div className='my-6'>
        <img src="assets/logo.png" alt="" className='w-fit' />
      </div>
      <h4 className='text-white text-xl font-semibold'>Set Up Your KICK Account</h4>
      <p className='text-white text-md'>We’ll use your email to keep your account secure and send updates</p>

      <div className='w-full max-w-md mx-auto mt-4 relative'>
        <InputComponent placeholder="Enter your first name" />
        <InputComponent placeholder="Enter your last name" />
        <InputComponent placeholder="Enter your email address" />


        <GlowingButton label="Continue" />


        <div className="absolute -top-20 right-0">
          <img src="assets/ball.png" alt="" />
        </div>
        <div className="absolute -bottom-20 -left-10">
          <img src="assets/ball.png" alt="" />
        </div>
      </div>
    </div>
  )
}
