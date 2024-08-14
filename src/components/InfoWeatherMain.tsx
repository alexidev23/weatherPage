import Image from "next/image"
import { FaMapMarkerAlt } from "react-icons/fa"

const InfoWeatherMain = () => {
  return (
    <div className='bg-[#14918963] w-[420px] rounded-3xl px-6 py-4 flex justify-between'>
      <div className="w-[200px] flex flex-col items-center justify-between">
        <div>
          <div className="flex text-white font-semibold items-center gap-1 mb-1">
            <FaMapMarkerAlt className="text-white text-2xl" />
            <h1 className="text-3xl">Argentina</h1>
          </div>
          <div className="text-white font-semibold text-xs flex gap-2 px-4">
            <span>Mon, 13:23 PM</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 text-white font-semibold">
          <div className="flex">
            <span className="text-6xl">23</span><span className="text-lg">°C</span>
          </div>
          <div className="flex flex-col justify-around">
            <span className="text-sm">10°C</span>
            <span className="text-sm">29°C</span>
          </div>
        </div>
      </div>
      <div className="w-[200px] flex items-center justify-center pl-12">
        <Image
          src='/cloudSun.svg'
          alt="Imagen del clima"
          width={140}
          height={140}
        />
      </div>
    </div>
  )
}

export default InfoWeatherMain