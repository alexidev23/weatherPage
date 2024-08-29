import Image from "next/image"

const HourInfo = () => {
  return (
    <div className='flex border-t-2 justify-between items-center py-1 px-2'>
      <span>22:00</span>
      <Image
        src='/cloudSun.svg'
        alt='Nube con sol'
        width={40}
        height={40}
      />
      <span>33°C</span>
      <span>33%</span>
      <span>55Km/h</span>
    </div>
  )
}

export default HourInfo