import Image from 'next/image'
import React from 'react'
import DaysInfo from './DaysInfo'

const DaysWeather = () => {
  return (
    <div className='flex gap-2 justify-center py-1'>
      <DaysInfo />
      <DaysInfo />
      <DaysInfo />
      <DaysInfo />
    </div>
  )
}

export default DaysWeather