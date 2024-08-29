import React from 'react'
import { WiCloudyGusts, WiHail, WiHumidity } from 'react-icons/wi'

const DescriptionWeather = () => {
  return (
    <div className='w-[420px] rounded-2xl py-4 px-6 bg-[#ffffff2a] text-white'>
      <div className='flex justify-between'>
        <div>
          <WiCloudyGusts />
          10kph
        </div>
        <div>
          <WiHail />
          44%
        </div>
        <div>
          <WiHumidity />
          33%
        </div>
      </div>
    </div>
  )
}

export default DescriptionWeather