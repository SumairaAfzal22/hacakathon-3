import React from 'react'
import Image from "next/image"
const Essential = () => {
  return (
    <main>
        <div className="text-center mt-[60px]">
        <h1 className="uppercase text-[30px] lg:text-[56px] font-medium text-black">FLIGHT ESSENTIALS</h1>
        <p className="text-[15px] font-normal">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        <div className="w-auto mt-6">

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-950 transition duration-300">
            Shop
          </button>
        </div>
      </div>

      <div className=' flex justify-between items-center text-[22px] font-semibold mb-4'>
          <h1 className="text-black">The Essentials</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mx-4 lg:mx-10">
        <div className="w-full sm:w-[45%] lg:w-[30%] relative">
        <Image className='rounded-md w-full h-auto'
                 src={"/nike-4.png"}
                 alt="shoes"
                 width={1344}
                 height={700}
                />
      <button className="absolute bottom-4 left-4 rounded-[30px] bg-white text-black font-medium px-5 py-2 text-sm sm:text-base">
        Men&apos;s
      </button>
    </div>

    <div  className="w-full sm:w-[45%] lg:w-[30%] relative">
   <Image className='rounded-md w-full h-auto'
                 src={"/nike-5.png"}
                 alt="shoes"
                 width={1344}
                 height={700}
                />
       
        
        
      <button className="absolute bottom-4 left-4 rounded-[30px] bg-white text-black font-medium px-5 py-2 text-sm sm:text-base">
        Women&apos;s
      </button>
    </div>

    <div className="w-full sm:w-[45%] lg:w-[30%] relative">
    <Image className='rounded-md w-full h-auto'
                 src={"/nike-6.png"}
                 alt="shoes"
                 width={1344}
                 height={700}
                />
      <button className="absolute bottom-4 left-4 rounded-[30px] bg-white text-black font-medium px-5 py-2 text-sm sm:text-base">
        Kid&apos;s
      </button>
    </div>
    </div>
    </main>
  )
}

export default Essential
