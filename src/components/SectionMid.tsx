import React from 'react'
import Image from "next/image"
const SectionMid = () => {
  return (
    <main className='w-full h-full'>
      <h1 className="text-[23px] font-medium mt-12">
        Featured
      </h1>
      <div className='w-full'>
        <Image className='w-full h-auto'
          src={"/nike-2.png"}
          alt="shoes"
          width={1344}
          height={700} /></div>

      <div className="text-center mt-[60px]">
        <h1 className="uppercase text-[30px] lg:text-[56px] font-medium text-black">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-[15px] font-normal">Cause everyone should know the feeling of running in that perfect pair.</p>
        <div className="w-auto mt-6">

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-950 transition duration-300">
            Find Your Shoe
          </button>
        </div>
      </div>

      <div className=' flex justify-between items-center text-[22px] font-semibold mb-4'>
        <h1 className="text-black">Don&#39;t Miss</h1>
      </div>

      <div className='w-full'>
        <Image className='w-full h-auto'
          src={"/nike-3.png"}
          alt="shoes"
          width={1344}
          height={700} />
      </div>

    </main>


  )
}

export default SectionMid
