import React from 'react'
import Image from "next/image"
const SectionMid = () => {
  return (
    <main>
      <div className="relative w-full h-screen">

        {/* Image Container */}
       <div className='w-full h-auto max-w-[1349px] max-h-[700px] mx-auto'>
              <Image className='w-[1349px] h-auto max-ss:w-[310px] max-ss:h-[235px]'
              src={"/nike-2.png"}
              alt="shoes"
              width={1344}
              height={700}/>
              </div>
      </div>

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
          <h1 className="text-black">Dont Miss</h1>
        </div>
        <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src="/nike-3.png"
            alt="Feature"
            className="w-full h-full object-cover"
          />
        </div>
        </div>
      
    </main>
  )
}

export default SectionMid
