import React from 'react'

export default function InputComponent({ placeholder }) {
  return (
    <div className="max-w-md mx-auto mt-5">
      <input
        type="text"
        id="firstName"
        // value={firstName}
        // onChange={handleChange}
        className="w-full px-4 py-2 border border-[#ff1975] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-white"
        placeholder={placeholder}
      />
    </div>

  )
}
