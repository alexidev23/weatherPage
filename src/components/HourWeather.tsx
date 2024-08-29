import Image from 'next/image'
import React from 'react'
import HourInfo from './HourInfo'

const HourWeather = () => {
  return (
    <div className='w-[460px] h-auto rounded-2xl py-4 px-6 bg-[#ffffff2a] text-white overflow-y-scroll'>
      <h2 className='text-sm'>Hour Weather:</h2>
      <div className='py-2'>
        <HourInfo />
        <HourInfo />
        <HourInfo />
        <HourInfo />
      </div>
    </div>
  )
}

export default HourWeather