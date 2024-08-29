import Image from "next/image"

const DaysInfo = () => {
  return (
    <div className='text-white w-24 flex flex-col items-center py-1 bg-cyan-400 rounded-[8px]'>
      <div>Day 1</div>
      <div className='text-center'>
        <Image 
          src='/cloudSun.svg'
          alt="Day 1" 
          height={48}
          width={48}
        />
        <div className='mt-2'>33/4</div>
      </div>
  </div>
  )
}

export default DaysInfo